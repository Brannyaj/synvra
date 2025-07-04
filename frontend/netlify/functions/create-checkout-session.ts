import { Handler } from '@netlify/functions';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
});

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { amount, email, name, projectDetails } = JSON.parse(event.body || '{}');
    const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    console.log("Received payload:", { amount, numericAmount, email, name, projectDetails });

    if (!numericAmount || numericAmount <= 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Amount must be greater than zero' }),
      };
    }

    // Format a user-friendly description
    const desc = `Mandatory initial deposit for ${projectDetails.name || 'your project'}: ${projectDetails.service.replace('-', ' ')} (${projectDetails.tier}, ${projectDetails.timeline})`;

    const session = await stripe.checkout.sessions.create({
      // payment_method_types: ['card'], // Removed to let Stripe show all eligible methods
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Project Deposit',
              description: desc,
            },
            unit_amount: Math.round(numericAmount * 100), // Convert to cents
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
        projectDetails: JSON.stringify(projectDetails),
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to create checkout session' }),
    };
  }
};

export { handler }; 