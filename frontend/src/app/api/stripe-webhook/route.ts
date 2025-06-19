import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import api from '@dropbox/sign';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2025-05-28.basil' });

if (!process.env.DROPBOX_SIGN_API_KEY) {
  throw new Error('DROPBOX_SIGN_API_KEY environment variable is not set');
}

// Initialize Dropbox Sign API
const signatureRequestApi = new api.SignatureRequestApi();
signatureRequestApi.username = process.env.DROPBOX_SIGN_API_KEY;

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature');
  const rawBody = await req.text();
  let event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig!, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const metadata = session.metadata || {};
    const clientEmail = metadata.email || metadata.clientEmail;
    const fullName = metadata.fullName || '';
    const deposit = metadata.deposit || '';

    // Create signature request
    try {
      if (!process.env.DROPBOX_SIGN_TEMPLATE_ID) {
        throw new Error('DROPBOX_SIGN_TEMPLATE_ID environment variable is not set');
      }

      if (!process.env.DROPBOX_SIGN_CLIENT_ID) {
        throw new Error('DROPBOX_SIGN_CLIENT_ID environment variable is not set');
      }

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
          { name: 'company_name', value: metadata.companyName || '' },
          { name: 'email', value: clientEmail },
          { name: 'phone', value: metadata.phone || '' },
          { name: 'service_type', value: metadata.serviceType || '' },
          { name: 'project_type', value: metadata.projectType || '' },
          { name: 'tier', value: metadata.tier || '' },
          { name: 'timeline', value: metadata.timeline || '' },
          { name: 'total_amount', value: metadata.totalPrice || '' },
          { name: 'deposit_paid', value: deposit },
          { name: 'remaining_balance', value: (Number(metadata.totalPrice || 0) - Number(deposit)).toString() },
          { name: 'deposit_deducted', value: deposit },
          { name: 'project_description', value: metadata.additionalRequirements || '' }
        ],
        clientId: process.env.DROPBOX_SIGN_CLIENT_ID,
        testMode: process.env.NODE_ENV === 'development'
      };

      await signatureRequestApi.signatureRequestCreateEmbeddedWithTemplate(data);
    } catch (error) {
      console.error('Error creating signature request:', error);
    }

    // Send confirmation to client
    try {
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
      }
    } catch (err) {
      console.error('Error sending confirmation email to client via Resend:', err);
    }

    // Send internal notification
    try {
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
              <li><strong>Total Project Amount:</strong> $${metadata.totalPrice}</li>
              <li><strong>Service Type:</strong> ${metadata.serviceType}</li>
              <li><strong>Tier:</strong> ${metadata.tier}</li>
              <li><strong>Timeline:</strong> ${metadata.timeline}</li>
              <li><strong>Company Name:</strong> ${metadata.companyName}</li>
              <li><strong>Phone:</strong> ${metadata.phone}</li>
              <li><strong>Company Size:</strong> ${metadata.companySize}</li>
              <li><strong>Industry:</strong> ${metadata.industry}</li>
              <li><strong>Project Type:</strong> ${metadata.projectType}</li>
              <li><strong>Project Description:</strong> ${metadata.additionalRequirements}</li>
            </ul>
          `
        })
      });
      if (!resendResInternal.ok) {
        const resendErr = await resendResInternal.text();
        console.error('Resend internal email error:', resendErr);
      }
    } catch (err) {
      console.error('Error sending internal notification email via Resend:', err);
    }
  }

  return NextResponse.json({ received: true });
} 