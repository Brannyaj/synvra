import { Handler } from '@netlify/functions';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const handler: Handler = async (event) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { name, email, phone, company, description, budget, deadline } = body;

    // Validate required fields
    if (!name || !email || !description) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: 'Name, email, and project description are required',
        }),
      };
    }

    // Create quote in database
    const quote = await prisma.quote.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        description,
        budget: budget ? parseFloat(budget) : null,
        deadline: deadline ? new Date(deadline) : null,
        status: 'pending',
      },
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: 'Quote submitted successfully',
        quoteId: quote.id,
      }),
    };
  } catch (error) {
    console.error('Error processing quote:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'An error occurred while processing your request',
      }),
    };
  } finally {
    await prisma.$disconnect();
  }
};

export { handler }; 