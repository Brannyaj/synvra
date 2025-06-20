import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';

// Add timestamp to logs
const log = (message: string, data?: any) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
  if (data) {
    console.log(`[${timestamp}] Data:`, JSON.stringify(data, null, 2));
  }
}

// Configure CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, stripe-signature',
};

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return NextResponse.json(
    { received: true },
    { status: 200, headers: corsHeaders }
  );
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2025-05-28.basil' });
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  let event: Stripe.Event;
  try {
    const sig = req.headers.get('stripe-signature');
    const rawBody = await req.text();
    event = stripe.webhooks.constructEvent(rawBody, sig!, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    log('ERROR: Stripe webhook signature verification failed.', { error: err.message });
    return NextResponse.json({ step: 'stripe-signature-verification', error: err.message }, { status: 400 });
  }

  log(`Event received: ${event.type}`);

  try {
    if (event.type === 'checkout.session.completed' || event.type === 'checkout.session.async_payment_succeeded') {
      const session = event.data.object as Stripe.Checkout.Session;
      
      const clientEmail = session.customer_details?.email;
      if (!clientEmail) {
        const errorMessage = 'CRITICAL: No email address found in Stripe checkout session customer_details.';
        log(errorMessage, { customer_details: session.customer_details });
        return NextResponse.json({ step: 'customer-email-check', error: errorMessage }, { status: 400 });
      }

      const fullName = session.customer_details?.name || '';
      const metadata = session.metadata || {};
      
      let projectDetails: any = {};
      try {
        projectDetails = JSON.parse(metadata.projectDetails || '{}');
      } catch (err: any) {
         log('ERROR: Failed to parse projectDetails JSON.', { error: err.message });
      }

      try {
        log('Payment successful. Sending confirmation emails only.');
        await sendConfirmationEmails(clientEmail, fullName, projectDetails);
        log('Confirmation emails sent successfully.');
        return NextResponse.json({ received: true });
      } catch (error: any) {
        log('Error sending confirmation emails.', { error: error.message });
        return NextResponse.json({ step: 'send-emails', error: error.message }, { status: 500 });
      }

    } else if (event.type === 'checkout.session.async_payment_failed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const clientEmail = session.customer_details?.email || '';
      const fullName = session.customer_details?.name || '';
      await sendFailureEmail(clientEmail, fullName);
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    // This will now catch our specific errors from the helper functions.
    log('ERROR: A critical step failed in the webhook handler.', { error: err.message, stack: err.stack });
    return NextResponse.json({ step: 'critical-step-failed', error: err.message, details: (err as any).body }, { status: 500 });
  }
}

async function sendConfirmationEmails(clientEmail: string, fullName: string, projectDetails: any) {
  const deposit = projectDetails.deposit?.toString() || '';
  const totalPrice = projectDetails.totalPrice?.toString() || '';

  const clientEmailBody = {
    from: 'noreply@synvra.com',
    to: clientEmail,
    subject: 'Payment Confirmation – Thank you for your deposit!',
    html: `<p>Hi ${fullName},</p><p>Thank you for your payment of <strong>$${deposit}</strong> for your project deposit.</p><p>If you have any questions, please contact us at <a href="mailto:support@synvra.com">support@synvra.com</a>.</p><p>Best,<br>The Synvra Team</p>`
  };

  const internalEmailBody = {
    from: 'noreply@synvra.com',
    to: 'support@synvra.com',
    subject: 'New Project Proposal Submission – Payment Received',
    html: `<h2>New Project Proposal Submission</h2><ul><li><strong>Full Name:</strong> ${fullName}</li><li><strong>Email:</strong> ${clientEmail}</li><li><strong>Deposit:</strong> $${deposit}</li><li><strong>Total Project Amount:</strong> $${totalPrice}</li><li><strong>Service Type:</strong> ${projectDetails.service}</li><li><strong>Tier:</strong> ${projectDetails.tier}</li><li><strong>Timeline:</strong> ${projectDetails.timeline}</li><li><strong>Project Description:</strong> ${projectDetails.description || 'Not provided'}</li></ul>`
  };
  
  await resend.emails.send(clientEmailBody);
  log('Confirmation email sent to client successfully');
  await resend.emails.send(internalEmailBody);
  log('Internal notification email sent successfully');
}

async function sendFailureEmail(clientEmail: string, fullName: string | null) {
  const emailBody = {
    from: 'noreply@synvra.com',
    to: clientEmail,
    subject: 'Payment Failed – Action Required',
    html: `<p>Hi ${fullName || 'there'},</p><p>We were unable to process your payment. Please contact your bank or try another payment method.</p><p>If you need assistance, please contact us at <a href="mailto:support@synvra.com">support@synvra.com</a>.</p><p>Best,<br>The Synvra Team</p>`
  };
  await resend.emails.send(emailBody);
  log('Payment failure email sent successfully');
} 