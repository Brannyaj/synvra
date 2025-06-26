import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
});

export async function POST(request: Request) {
  try {
    const { amount, email, name, referralCode, projectDetails, ...rest } = await request.json();

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Project Deposit',
              description: `25% deposit for your project: ${projectDetails?.service || ''} (${projectDetails?.tier || ''}, ${projectDetails?.timeline || ''})`,
            },
            unit_amount: Math.round(amount * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/get-started`,
      customer_email: email,
      client_reference_id: name,
      metadata: {
        referralCode: referralCode || '', // Store referral code in metadata
        projectDetails: JSON.stringify({
          service: projectDetails?.service || '',
          tier: projectDetails?.tier || '',
          timeline: projectDetails?.timeline || '',
          totalPrice: projectDetails?.totalPrice ? String(projectDetails.totalPrice) : '',
          deposit: projectDetails?.deposit ? String(projectDetails.deposit) : '',
          description: projectDetails?.description || '',
          phone: projectDetails?.phone || '',
          companyName: projectDetails?.companyName || '',
          companySize: projectDetails?.companySize || '',
          industry: projectDetails?.industry || ''
        })
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
} 