import { Handler } from '@netlify/functions';

const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL;

const handler: Handler = async (event) => {
  if (!ZAPIER_WEBHOOK_URL) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'ZAPIER_WEBHOOK_URL environment variable is not set' }),
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const payload = JSON.parse(event.body || '{}');
    const response = await fetch(ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return {
        statusCode: response.status,
        body: JSON.stringify({
          error: 'Failed to submit to Zapier',
          status: response.status,
          statusText: response.statusText,
          errorText,
        }),
      };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to submit proposal', details: error instanceof Error ? error.message : error }),
    };
  }
};

export { handler }; 