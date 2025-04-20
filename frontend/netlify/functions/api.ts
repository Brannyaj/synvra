import { Handler } from '@netlify/functions';

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
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          message: 'Quote received',
          data: body
        })
      };
    }

    if (path === 'health') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          status: 'ok', 
          timestamp: new Date().toISOString(),
          path: event.path,
          httpMethod: event.httpMethod
        })
      };
    }

    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ 
        error: 'Not Found',
        path: event.path,
        httpMethod: event.httpMethod
      })
    };

  } catch (error) {
    console.error('API Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
}; 