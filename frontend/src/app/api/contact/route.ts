import { Resend } from 'resend';
import { generateContactEmail, generateNotificationEmail } from '../lib/email-template';
import { NextResponse } from 'next/server';

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
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
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
          ...generateContactEmail({ name, message })
        });
      });

      // Send notification email to support with retry logic
      await retryEmailSend(async () => {
        return resend.emails.send({
          from: 'Synvra <no-reply@synvra.com>',
          to: 'support@synvra.com',
          ...generateNotificationEmail({ name, email, message, type: 'contact' })
        });
      });

      return NextResponse.json({
        status: 'success',
        message: 'Your message has been sent successfully!'
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
    console.error('Error processing contact request:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Failed to send message. Please try again later.'
      },
      { status: 500 }
    );
  }
} 