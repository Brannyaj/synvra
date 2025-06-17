import { NextResponse } from 'next/server';

const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL;

if (!ZAPIER_WEBHOOK_URL) {
  throw new Error('ZAPIER_WEBHOOK_URL environment variable is not set');
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const response = await fetch(ZAPIER_WEBHOOK_URL as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Zapier webhook error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText,
        url: ZAPIER_WEBHOOK_URL,
        payload
      });
      throw new Error(`Failed to submit to Zapier: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error submitting to Zapier:', error);
    return NextResponse.json(
      { error: 'Failed to submit proposal. Please try again later.' },
      { status: 500 }
    );
  }
} 