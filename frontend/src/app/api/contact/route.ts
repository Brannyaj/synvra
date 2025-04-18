import { Resend } from 'resend';
import { generateContactEmail, generateNotificationEmail } from '../lib/email-template';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Send confirmation email to user
    await resend.emails.send({
      from: 'Synvra <no-reply@synvra.com>',
      to: email,
      cc: ['support@synvra.com'],
      ...generateContactEmail({ name, message })
    });

    // Send notification email to support
    await resend.emails.send({
      from: 'Synvra <no-reply@synvra.com>',
      to: 'support@synvra.com',
      ...generateNotificationEmail({ name, email, message, type: 'contact' })
    });

    return NextResponse.json({
      status: 'success',
      message: 'Your message has been sent successfully!'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Failed to send message. Please try again later.'
      },
      { status: 500 }
    );
  }
} 