import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  // Handle OPTIONS request (CORS preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: '',
    };
  }

  if (event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify({
        success: true,
        message: 'Analytics data retrieved successfully',
        stats: {
          totalVisits: 0,
          pathStats: []
        }
      }),
    };
  }

  if (event.httpMethod === 'POST') {
    try {
      // Here you would typically store the analytics data
      // For now, we'll just return a success response
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify({
          success: true,
          message: 'Visit tracked successfully'
        }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify({
          success: false,
          message: 'Failed to track visit'
        }),
      };
    }
  }

  return {
    statusCode: 405,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify({
      success: false,
      message: 'Method not allowed'
    }),
  };
}; 