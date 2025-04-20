import { Handler } from '@netlify/functions';
import { Resend } from 'resend';
import { generateQuoteEmail, generateNotificationEmail } from '../../../src/app/api/lib/email-template';

const resend = new Resend(process.env.RESEND_API_KEY!);

// Helper function to retry failed email attempts
async function retryEmailSend(emailFn: () => Promise<any>, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await emailFn();
      return result;
    } catch (error) {
      console.error(`Email send attempt ${attempt} failed:`, error);
      if (attempt === maxRetries) throw error;
      // Wait before retrying (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, attempt * 1000));
    }
  }
}

export const handler: Handler = async (event) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    if (!event.body) {
      throw new Error('No request body provided');
    }

    const data = JSON.parse(event.body);

    // Validate required fields
    if (!data.name || !data.email || !data.projectType || !data.budget || !data.timeline || !data.description || !data.services || data.services.length === 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          message: 'Please fill in all required fields',
        }),
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          message: 'Please enter a valid email address',
        }),
      };
    }

    try {
      // Send confirmation email to user with retry logic
      await retryEmailSend(async () => {
        return resend.emails.send({
          from: 'Synvra <no-reply@synvra.com>',
          to: data.email,
          cc: ['support@synvra.com'],
          ...generateQuoteEmail({ name: data.name })
        });
      });

      // Send notification email to support with retry logic
      await retryEmailSend(async () => {
        return resend.emails.send({
          from: 'Synvra <no-reply@synvra.com>',
          to: 'support@synvra.com',
          ...generateNotificationEmail({
            name: data.name,
            email: data.email,
            message: `
Project Type: ${data.projectType}
Company: ${data.company || 'Not provided'}
Phone: ${data.phone || 'Not provided'}
Budget: ${data.budget}
Timeline: ${data.timeline}
Services: ${data.services.join(', ')}

Description:
${data.description}
            `,
            type: 'quote'
          })
        });
      });

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          message: 'Quote request received successfully',
        }),
      };
    } catch (error) {
      console.error('Error sending emails:', error);
      if (error instanceof Error && error.message.includes('Resend API')) {
        return {
          statusCode: 503,
          headers,
          body: JSON.stringify({
            message: 'Email service is temporarily unavailable. Please try again later or contact us directly at support@synvra.com'
          }),
        };
      }
      throw error;
    }
  } catch (error) {
    console.error('Error processing quote request:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: 'Failed to process quote request',
      }),
    };
  }
}; 