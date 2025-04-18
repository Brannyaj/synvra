import { Resend } from 'resend';
import { generateQuoteEmail, generateNotificationEmail } from '../lib/email-template';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

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
      from: 'Synvra <no-reply@synvra.com>',
      to: email,
      cc: ['support@synvra.com'],
      ...generateQuoteEmail({ name })
    });

    // Send notification email to support
    await resend.emails.send({
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

    return new NextResponse(
      JSON.stringify({
        status: 'success',
        message: 'Your quote request has been received successfully!'
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing quote request:', error);
    return new NextResponse(
      JSON.stringify({
        status: 'error',
        message: 'Failed to submit quote request. Please try again later.'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
} 