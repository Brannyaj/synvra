import { NextResponse } from 'next/server';
import { emailTemplates, sendTemplateEmail } from '../lib/brevo';

export async function POST(request: Request) {
  try {
    const { name, email, company, phone, projectType, budget, timeline, description } = await request.json();

    // Send confirmation email to client
    await sendTemplateEmail({
      templateId: emailTemplates.QUOTE_RESPONSE,
      to: { email, name },
      params: {
        name,
        projectType,
        budget,
        timeline,
        description,
        year: new Date().getFullYear()
      }
    });

    // Send notification to company
    await sendTemplateEmail({
      templateId: emailTemplates.QUOTE_RESPONSE,
      to: { email: 'support@synvra.com', name: 'Synvra Support' },
      params: {
        name,
        email,
        company,
        phone,
        projectType,
        budget,
        timeline,
        description,
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