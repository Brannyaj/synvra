import { Handler } from '@netlify/functions';
import { prisma } from '../../src/lib/prisma';

export const handler: Handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: ''
    };
  }

  try {
    // Parse the path to determine the action
    const path = event.path.replace('/.netlify/functions/api/', '');
    
    if (path === 'quotes' && event.httpMethod === 'POST') {
      const body = JSON.parse(event.body || '{}');
      
      const quote = await prisma.quote.create({
        data: {
          name: body.name,
          email: body.email,
          phone: body.phone,
          company: body.company,
          description: body.description,
          budget: body.budget ? parseFloat(body.budget) : null,
          deadline: body.deadline ? new Date(body.deadline) : null,
          status: 'pending'
        }
      });

      return {
        statusCode: 201,
        headers,
        body: JSON.stringify({ quote })
      };
    }

    if (path === 'health') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() })
      };
    }

    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: 'Not Found' })
    };

  } catch (error) {
    console.error('API Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
}; 