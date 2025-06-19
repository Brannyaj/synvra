import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { SignatureRequestApi } from '@dropbox/sign/api';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2025-05-28.basil' });

if (!process.env.DROPBOX_SIGN_API_KEY) {
  throw new Error('DROPBOX_SIGN_API_KEY environment variable is not set');
}

// Initialize Dropbox Sign API
const signatureRequestApi = new SignatureRequestApi();
signatureRequestApi.username = process.env.DROPBOX_SIGN_API_KEY;

export async function POST(req: NextRequest) {
  console.log('Webhook received');
  const sig = req.headers.get('stripe-signature');
  const rawBody = await req.text();
  let event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig!, process.env.STRIPE_WEBHOOK_SECRET!);
    console.log('Event type:', event.type);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Handle both immediate and async payment success
  if (event.type === 'checkout.session.completed' || event.type === 'checkout.session.async_payment_succeeded') {
    console.log('Processing payment success event:', event.type);
    const session = event.data.object as Stripe.Checkout.Session;
    const metadata = session.metadata || {};
    console.log('Session metadata:', metadata);
    
    // Parse projectDetails from metadata
    let projectDetails;
    try {
      projectDetails = JSON.parse(metadata.projectDetails || '{}');
      console.log('Parsed project details:', projectDetails);
    } catch (err) {
      console.error('Error parsing projectDetails:', err);
      projectDetails = {};
    }

    const clientEmail = session.customer_details?.email || '';
    const fullName = session.customer_details?.name || '';
    const deposit = projectDetails.deposit?.toString() || '';
    const totalPrice = projectDetails.totalPrice?.toString() || '';

    // Create signature request
    try {
      if (!process.env.DROPBOX_SIGN_TEMPLATE_ID) {
        throw new Error('DROPBOX_SIGN_TEMPLATE_ID environment variable is not set');
      }

      if (!process.env.DROPBOX_SIGN_CLIENT_ID) {
        throw new Error('DROPBOX_SIGN_CLIENT_ID environment variable is not set');
      }

      console.log('Creating Dropbox Sign request for:', clientEmail);
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
      console.log('Dropbox Sign request created successfully');
    } catch (error) {
      console.error('Error creating signature request:', error);
    }

    // Send confirmation to client
    try {
      console.log('Sending confirmation email to:', clientEmail);
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
        console.error('Resend client email error:', resendErr);
      } else {
        console.log('Confirmation email sent successfully');
      }
    } catch (err) {
      console.error('Error sending confirmation email to client via Resend:', err);
    }

    // Send internal notification
    try {
      console.log('Sending internal notification');
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
        console.error('Resend internal email error:', resendErr);
      } else {
        console.log('Internal notification sent successfully');
      }
    } catch (err) {
      console.error('Error sending internal notification email via Resend:', err);
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
      console.error('Error sending payment failure email:', err);
    }
  }

  return NextResponse.json({ received: true });
} 