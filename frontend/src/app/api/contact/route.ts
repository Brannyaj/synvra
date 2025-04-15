import { NextResponse } from 'next/server';
import { emailTemplates, sendTemplateEmail } from '../lib/brevo';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Send confirmation email to user
    await sendTemplateEmail({
      templateId: emailTemplates.CONTACT_RESPONSE,
      to: { email, name },
      params: {
        name,
        message,
        year: new Date().getFullYear()
      }
    });

    // Send notification to company
    await sendTemplateEmail({
      templateId: emailTemplates.WELCOME_EMAIL,
      to: { email: 'support@synvra.com', name: 'Synvra Support' },
      params: {
        name,
        email,
        message,
        year: new Date().getFullYear()
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 