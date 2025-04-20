import { Handler } from '@netlify/functions';
import { Resend } from 'resend';
import { generateContactEmail, generateNotificationEmail } from '../../../src/app/api/lib/email-template';

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
    'Content-Type': 'application/json'
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
      body: JSON.stringify({
        status: 'error',
        message: 'Method not allowed'
      }),
    };
  }

  try {
    if (!event.body) {
      throw new Error('No request body provided');
    }

    const { name, email, message, company, phone } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          status: 'error',
          message: 'Please fill in all required fields'
        }),
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          status: 'error',
          message: 'Please enter a valid email address'
        }),
      };
    }

    try {
      // Send confirmation email to user with retry logic
      await retryEmailSend(async () => {
        return resend.emails.send({
          from: 'Synvra <no-reply@synvra.com>',
          to: email,
          ...generateContactEmail({ name, message })
        });
      });

      // Send notification email to support with retry logic
      await retryEmailSend(async () => {
        return resend.emails.send({
          from: 'Synvra <no-reply@synvra.com>',
          to: 'support@synvra.com',
          ...generateNotificationEmail({
            name,
            email,
            message: `
Name: ${name}
Email: ${email}
${company ? `Company: ${company}\n` : ''}${phone ? `Phone: ${phone}\n` : ''}
Message:
${message}
            `,
            type: 'contact'
          })
        });
      });

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          status: 'success',
          message: 'Your message has been sent successfully!'
        }),
      };
    } catch (error) {
      console.error('Error sending emails:', error);
      if (error instanceof Error && error.message.includes('Resend API')) {
        return {
          statusCode: 503,
          headers,
          body: JSON.stringify({
            status: 'error',
            message: 'Email service is temporarily unavailable. Please try again later or contact us directly at support@synvra.com'
          }),
        };
      }
      throw error;
    }
  } catch (error) {
    console.error('Error processing contact request:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        status: 'error',
        message: 'Failed to send message. Please try again later.'
      }),
    };
  }
}; 