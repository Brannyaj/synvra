import { Resend } from 'resend';
import { generateQuoteEmail, generateNotificationEmail } from '../lib/email-template';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

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

export async function POST(request: Request) {
  try {
    // Check content type
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { 
          status: 'error',
          message: 'Content-Type must be application/json' 
        },
        { status: 400 }
      );
    }

    let requestData;
    try {
      requestData = await request.json();
    } catch (error) {
      console.error('Failed to parse request body:', error);
      return NextResponse.json(
        { 
          status: 'error',
          message: 'Invalid JSON in request body' 
        },
        { status: 400 }
      );
    }

    const { 
      name, 
      email, 
      company, 
      phone,
      projectType, 
      budget, 
      timeline, 
      description,
      services 
    } = requestData;

    // Validate required fields
    if (!name || !email || !projectType || !budget || !timeline || !description || !services || services.length === 0) {
      return NextResponse.json(
        { 
          status: 'error',
          message: 'Please fill in all required fields' 
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Please enter a valid email address'
        },
        { status: 400 }
      );
    }

    try {
      // Send confirmation email to user with retry logic
      await retryEmailSend(async () => {
        return resend.emails.send({
          from: 'Synvra <no-reply@synvra.com>',
          to: email,
          cc: ['support@synvra.com'],
          ...generateQuoteEmail({ name })
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
Project Type: ${projectType}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}
Budget: ${budget}
Timeline: ${timeline}
Services: ${services.join(', ')}

Description:
${description}
            `,
            type: 'quote'
          })
        });
      });

      return NextResponse.json({
        status: 'success',
        message: 'Your quote request has been received successfully!'
      });
    } catch (error) {
      console.error('Error sending emails:', error);
      if (error instanceof Error && error.message.includes('Resend API')) {
        return NextResponse.json(
          {
            status: 'error',
            message: 'Email service is temporarily unavailable. Please try again later or contact us directly at support@synvra.com'
          },
          { status: 503 }
        );
      }
      throw error; // Let the outer catch block handle other errors
    }
  } catch (error) {
    console.error('Error processing quote request:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Failed to submit quote request. Please try again later.'
      },
      { status: 500 }
    );
  }
} 