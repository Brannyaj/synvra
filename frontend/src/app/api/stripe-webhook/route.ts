import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { SignatureRequestApi } from '@dropbox/sign/api';

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
  'Access-Chtrol-Allow-Headers': 'Content-Type, Authorization, stripe-signature',
};

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return NextResponse.json(
    { received: true },
    { status: 200, headers: corsHeaders }
  );
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2025-05-28.basil' });

if (!process.env.DROPBOX_SIGN_API_KEY) {
  throw new Error('DROPBOX_SIGN_API_KEY environment variable is not set');
}

// Initialize Dropbox Sign API
const signatureRequestApi = new SignatureRequestApi();
signatureRequestApi.username = process.env.DROPBOX_SIGN_API_KEY!;

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
      const metadata = session.metadata || {};
      const clientEmail = session.customer_details?.email || '';
      const fullName = session.customer_details?.name || '';
      
      let projectDetails: any = {};
      try {
        projectDetails = JSON.parse(metadata.projectDetails || '{}');
      } catch (err: any) {
         log('ERROR: Failed to parse projectDetails JSON.', { error: err.message });
      }

      try {
        await createDropboxSignRequest(clientEmail, fullName, projectDetails);
      } catch (err: any) {
        log('ERROR: Failed during Dropbox Sign request creation.', { 
            error: err.message, 
            response_body: err.body,
            stack: err.stack 
        });
        return NextResponse.json({ 
            step: 'dropbox-sign-request', 
            error: err.message,
            details: err.body
        }, { status: 500 });
      }

      try {
        await sendConfirmationEmails(clientEmail, fullName, projectDetails);
      } catch (err: any) {
        log('ERROR: Failed during email sending.', { error: err.message, stack: err.stack });
      }

    } else if (event.type === 'checkout.session.async_payment_failed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const clientEmail = session.customer_details?.email || '';
      const fullName = session.customer_details?.name || '';
      await sendFailureEmail(clientEmail, fullName);
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    log('FATAL: An unhandled error occurred in the main webhook handler.', { error: err.message, stack: err.stack });
    return NextResponse.json({ step: 'main-handler-unhandled', error: err.message }, { status: 500 });
  }
}

async function createDropboxSignRequest(clientEmail: string, fullName: string, projectDetails: any) {
  const deposit = projectDetails.deposit?.toString() || '';
  const totalPrice = projectDetails.totalPrice?.toString() || '';
  
  const data = {
    templateIds: [process.env.DROPBOX_SIGN_TEMPLATE_ID!],
    subject: 'Project Services Agreement',
    message: 'Please review and sign the project services agreement.',
    signers: [{ role: 'Client', emailAddress: clientEmail, name: fullName }],
    customFields: [
      { name: 'full_name', value: fullName },
      { name: 'email', value: clientEmail },
      { name: 'service_type', value: projectDetails.service || '' },
      { name: 'project_type', value: 'Website/Platform' },
      { name: 'tier', value: projectDetails.tier || '' },
      { name: 'timeline', value: projectDetails.timeline || '' },
      { name: 'total_amount', value: totalPrice },
      { name: 'deposit_paid', value: deposit },
      { name: 'remaining_balance', value: (Number(totalPrice || 0) - Number(deposit)).toString() },
      { name: 'deposit_deducted', value: deposit },
      { name: 'project_description', value: `Service: ${projectDetails.service || ''}\nTier: ${projectDetails.tier || ''}\nTimeline: ${projectDetails.timeline || ''}` }
    ],
    clientId: process.env.DROPBOX_SIGN_CLIENT_ID!,
    testMode: true
  };
  await signatureRequestApi.signatureRequestCreateEmbeddedWithTemplate(data);
  log('Dropbox Sign request created successfully');
}

async function sendConfirmationEmails(clientEmail: string, fullName: string, projectDetails: any) {
  const deposit = projectDetails.deposit?.toString() || '';
  const totalPrice = projectDetails.totalPrice?.toString() || '';

  const clientEmailBody = {
    from: 'noreply@synvra.com',
    to: clientEmail,
    subject: 'Payment Confirmation – Thank you for your deposit!',
    html: `<p>Hi ${fullName},</p><p>Thank you for your payment of <strong>$${deposit}</strong> for your project deposit.</p><p>You will receive a separate email with a link to sign the Project Services Agreement.</p><p>If you have any questions, please contact us at <a href="mailto:support@synvra.com">support@synvra.com</a>.</p><p>Best,<br>The Synvra Team</p>`
  };

  const internalEmailBody = {
    from: 'noreply@synvra.com',
    to: 'support@synvra.com',
    subject: 'New Project Proposal Submission – Payment Received',
    html: `<h2>New Project Proposal Submission</h2><ul><li><strong>Full Name:</strong> ${fullName}</li><li><strong>Email:</strong> ${clientEmail}</li><li><strong>Deposit:</strong> $${deposit}</li><li><strong>Total Project Amount:</strong> $${totalPrice}</li><li><strong>Service Type:</strong> ${projectDetails.service}</li><li><strong>Tier:</strong> ${projectDetails.tier}</li><li><strong>Timeline:</strong> ${projectDetails.timeline}</li></ul>`
  };
  
  const resend = new (require('resend').Resend)(process.env.RESEND_API_KEY);
  await resend.emails.send(clientEmailBody);
  log('Confirmation email sent to client successfully');
  await resend.emails.send(internalEmailBody);
  log('Internal notification email sent successfully');
}

async function sendFailureEmail(clientEmail: string, fullName: string) {
  const emailBody = {
    from: 'noreply@synvra.com',
    to: clientEmail,
    subject: 'Payment Failed – Action Required',
    html: `<p>Hi ${fullName},</p><p>We were unable to process your payment. Please contact your bank or try another payment method.</p><p>If you need assistance, please contact us at <a href="mailto:support@synvra.com">support@synvra.com</a>.</p><p>Best,<br>The Synvra Team</p>`
  };
  const resend = new (require('resend').Resend)(process.env.RESEND_API_KEY);
  await resend.emails.send(emailBody);
  log('Payment failure email sent successfully');
} 