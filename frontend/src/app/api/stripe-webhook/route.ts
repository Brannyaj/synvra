import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2025-05-28.basil' });

export const config = { api: { bodyParser: false } };

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

    // 1. Send confirmation to client
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
                 <p>We've received your deposit and will be in touch soon with next steps.</p>
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

    // 2. Send internal notification to support@synvra.com
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