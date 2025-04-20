require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(express.static('public'));
app.use((req, res, next) => {
  if (req.originalUrl === '/webhook') {
    next();
  } else {
    express.json()(req, res, next);
  }
});
app.use(cors());

// Serve the payment page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the success page
app.get('/payment-success', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'payment-success.html'));
});

// Create payment intent
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'usd' } = req.body;

    // Validate amount
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        processor: 'RAPH LLC',
        for: 'Synvra',
      },
    });

    console.log(`Payment intent created: ${paymentIntent.id} for $${amount}`);
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
});

// Webhook endpoint
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.WEBHOOK_SECRET
    );

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log('💰 Payment succeeded:', {
          id: paymentIntent.id,
          amount: paymentIntent.amount / 100,
          currency: paymentIntent.currency,
          customer: paymentIntent.customer,
          status: paymentIntent.status,
          metadata: paymentIntent.metadata,
        });
        // Here we'll add email notification logic later
        break;

      case 'payment_intent.created':
        const createdPayment = event.data.object;
        console.log('🆕 Payment Intent created:', {
          id: createdPayment.id,
          amount: createdPayment.amount / 100,
          currency: createdPayment.currency,
          status: createdPayment.status,
        });
        break;

      case 'charge.succeeded':
        const charge = event.data.object;
        console.log('💳 Charge succeeded:', {
          id: charge.id,
          amount: charge.amount / 100,
          currency: charge.currency,
          status: charge.status,
          payment_intent: charge.payment_intent,
        });
        break;

      case 'charge.updated':
        const updatedCharge = event.data.object;
        console.log('📝 Charge updated:', {
          id: updatedCharge.id,
          amount: updatedCharge.amount / 100,
          currency: updatedCharge.currency,
          status: updatedCharge.status,
          payment_intent: updatedCharge.payment_intent,
        });
        break;

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        console.error('❌ Payment failed:', {
          id: failedPayment.id,
          amount: failedPayment.amount / 100,
          currency: failedPayment.currency,
          customer: failedPayment.customer,
          status: failedPayment.status,
          error: failedPayment.last_payment_error,
        });
        break;

      default:
        console.log(`⚠️ Unhandled event type: ${event.type}`, event.data.object);
    }

    res.json({ received: true });
  } catch (err) {
    console.error('Webhook error:', err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Payment webhook ready for RAPH LLC/SYNVRA`);
}); 