import { Resend } from 'resend';
import { generateQuoteEmail, generateNotificationEmail } from '../../lib/email-template';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY!);

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
    } = await request.json();

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

    // Send confirmation email to user
    await resend.emails.send({
      from: 'Synvra <support@synvra.com>',
      to: email,
      ...generateQuoteEmail({ name })
    });

    // Send notification email to support
    await resend.emails.send({
      from: 'Synvra <support@synvra.com>',
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

    return NextResponse.json({
      status: 'success',
      message: 'Your quote request has been received successfully!'
    });
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