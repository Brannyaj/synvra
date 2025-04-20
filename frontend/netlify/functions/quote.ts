import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
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
    if (event.httpMethod === 'POST') {
      const body = JSON.parse(event.body || '{}');
      console.log('Quote submission:', body);
      
      // Validate required fields
      const requiredFields = ['name', 'email', 'description'];
      const missingFields = requiredFields.filter(field => !body[field]);
      
      if (missingFields.length > 0) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            error: `Missing required fields: ${missingFields.join(', ')}`
          })
        };
      }

      // Here you would typically save to a database
      // For now, we'll just return success
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          message: 'Quote submitted successfully',
          data: {
            id: Date.now().toString(),
            status: 'received',
            ...body
          }
        })
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({
        error: 'Method not allowed'
      })
    };
  } catch (error) {
    console.error('Quote submission error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
}; 