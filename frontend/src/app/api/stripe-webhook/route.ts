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
signatureRequestApi.username = process.env.DROPBOX_SIGN_API_KEY;

export async function POST(req: NextRequest) {
  try {
    // Environment Variable Self-Check
    const requiredEnvVars = [
      'STRIPE_SECRET_KEY',
      'STRIPE_WEBHOOK_SECRET',
      'DROPBOX_SIGN_API_KEY',
      'DROPBOX_SIGN_TEMPLATE_ID',
      'DROPBOX_SIGN_CLIENT_ID',
      'RESEND_API_KEY',
    ];

    const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

    if (missingEnvVars.length > 0) {
      const errorMessage = `CRITICAL: Missing required environment variables: ${missingEnvVars.join(', ')}`;
      log(errorMessage);
      // Expose the exact missing variables in the response for debugging
      return NextResponse.json(
        { 
          error: 'Server configuration error.',
          details: errorMessage,
          missing_variables: missingEnvVars
        },
        { status: 500, headers: corsHeaders }
      );
    }

    log('Webhook received - All environment variables present.');

    const sig = req.headers.get('stripe-signature');
    if (!sig) {
      log('No Stripe signature found');
      return NextResponse.json(
        { error: 'No Stripe signature found' },
        { status: 400, headers: corsHeaders }
      );
    }
    log('Stripe signature received', { signature: sig.substring(0, 10) + '...' });

    const rawBody = await req.text();
    log('Request body received', { bodyLength: rawBody.length });

    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      log('CRITICAL: STRIPE_WEBHOOK_SECRET is not set');
      return NextResponse.json(
        { error: 'Webhook secret is not configured' },
        { status: 500, headers: corsHeaders }
      );
    }

    let event;
    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
      log('Event constructed successfully', { type: event.type });
    } catch (err: any) {
      log('Webhook signature verification failed', { error: err.message });
      return NextResponse.json(
        { error: `Webhook Error: ${err.message}` },
        { status: 400, headers: corsHeaders }
      );
    }

    // Handle both immediate and async payment success
    if (event.type === 'checkout.session.completed' || event.type === 'checkout.session.async_payment_succeeded') {
      log('Processing payment success event', { eventType: event.type });
      const session = event.data.object as Stripe.Checkout.Session;
      
      // Log payment details
      log('Payment status details', {
        payment_status: session.payment_status,
        status: session.status,
        payment_intent: session.payment_intent
      });

      // TEMPORARY: Bypass ACH payment waiting for testing
      // TODO: Remove this bypass after testing
      log('TESTING MODE: Bypassing ACH payment waiting period');
      
      // Continue with normal processing for confirmed payments
      const metadata = session.metadata || {};
      log('Session metadata received', metadata);
      
      // Parse projectDetails from metadata
      let projectDetails;
      try {
        projectDetails = JSON.parse(metadata.projectDetails || '{}');
        log('Project details parsed successfully', projectDetails);
      } catch (err) {
        log('Error parsing projectDetails', { error: err, metadata });
        projectDetails = {};
      }

      const clientEmail = session.customer_details?.email || '';
      const fullName = session.customer_details?.name || '';
      const deposit = projectDetails.deposit?.toString() || '';
      const totalPrice = projectDetails.totalPrice?.toString() || '';

      log('Customer details extracted', { clientEmail, fullName, deposit, totalPrice });

      // Create signature request
      try {
        if (!process.env.DROPBOX_SIGN_TEMPLATE_ID) {
          throw new Error('DROPBOX_SIGN_TEMPLATE_ID environment variable is not set');
        }

        if (!process.env.DROPBOX_SIGN_CLIENT_ID) {
          throw new Error('DROPBOX_SIGN_CLIENT_ID environment variable is not set');
        }

        log('Creating Dropbox Sign request', { clientEmail, templateId: process.env.DROPBOX_SIGN_TEMPLATE_ID });
        const data = {
          templateIds: [process.env.DROPBOX_SIGN_TEMPLATE_ID],
          subject: 'Project Services Agreement',
          message: 'Please review and sign the project services agreement.',
          signers: [
            {
              role: 'Client',
              emailAddress: clientEmail,
              name: fullName,
            }
          ],
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
          clientId: process.env.DROPBOX_SIGN_CLIENT_ID,
          testMode: process.env.NODE_ENV === 'development'
        };

        await signatureRequestApi.signatureRequestCreateEmbeddedWithTemplate(data);
        log('Dropbox Sign request created successfully');
      } catch (error) {
        log('Error creating signature request', { error });
      }

      // Send confirmation to client
      try {
        log('Sending confirmation email to:', clientEmail);
        const resendResClient = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'noreply@synvra.com',
            to: clientEmail,
            subject: 'Payment Confirmation – Thank you for your deposit!',
            html: `<p>Hi ${fullName},</p>
                   <p>Thank you for your payment of <strong>$${deposit}</strong> for your project deposit.</p>
                   <p>You will receive a separate email with a link to sign the Project Services Agreement.</p>
                   <p>If you have any questions, please contact us at <a href="mailto:support@synvra.com">support@synvra.com</a>.</p>
                   <p>Best,<br>The Synvra Team</p>`
          })
        });
        if (!resendResClient.ok) {
          const resendErr = await resendResClient.text();
          log('Resend client email error', { error: resendErr });
        } else {
          log('Confirmation email sent successfully');
        }
      } catch (err) {
        log('Error sending confirmation email to client via Resend', { error: err });
      }

      // Send internal notification
      try {
        log('Sending internal notification');
        const resendResInternal = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'noreply@synvra.com',
            to: 'support@synvra.com',
            subject: 'New Project Proposal Submission – Payment Received',
            html: `
              <h2>New Project Proposal Submission</h2>
              <ul>
                <li><strong>Full Name:</strong> ${fullName}</li>
                <li><strong>Email:</strong> ${clientEmail}</li>
                <li><strong>Deposit:</strong> $${deposit}</li>
                <li><strong>Total Project Amount:</strong> $${totalPrice}</li>
                <li><strong>Service Type:</strong> ${projectDetails.service}</li>
                <li><strong>Tier:</strong> ${projectDetails.tier}</li>
                <li><strong>Timeline:</strong> ${projectDetails.timeline}</li>
              </ul>
            `
          })
        });
        if (!resendResInternal.ok) {
          const resendErr = await resendResInternal.text();
          log('Resend internal email error', { error: resendErr });
        } else {
          log('Internal notification sent successfully');
        }
      } catch (err) {
        log('Error sending internal notification email via Resend', { error: err });
      }
    } else if (event.type === 'checkout.session.async_payment_failed') {
      // Handle failed ACH payment
      const session = event.data.object as Stripe.Checkout.Session;
      const metadata = session.metadata || {};
      const clientEmail = metadata.email || metadata.clientEmail;
      const fullName = metadata.fullName || '';

      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'noreply@synvra.com',
            to: clientEmail,
            subject: 'Payment Failed – Action Required',
            html: `<p>Hi ${fullName},</p>
                   <p>We were unable to process your payment. Please contact your bank or try another payment method.</p>
                   <p>If you need assistance, please contact us at <a href="mailto:support@synvra.com">support@synvra.com</a>.</p>
                   <p>Best,<br>The Synvra Team</p>`
          })
        });
      } catch (err) {
        log('Error sending payment failure email', { error: err });
      }
    }

    log('Webhook processing finished successfully.');
    return NextResponse.json({ received: true }, { headers: corsHeaders });

  } catch (err: any) {
    log('FATAL: Unhandled exception in webhook handler', { 
      error: err.message,
      stack: err.stack 
    });
    return NextResponse.json(
      { error: 'An unexpected error occurred on the server.' },
      { status: 500, headers: corsHeaders }
    );
  }
} 