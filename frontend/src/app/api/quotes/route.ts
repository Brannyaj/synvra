import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  return new Response(JSON.stringify({
    message: "This is a static site. For dynamic quote requests, please visit www.synvra.com"
  }), {
    headers: { 'content-type': 'application/json' }
  });
}

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    
    // Check if API key exists
    if (!resendApiKey) {
      console.log('RESEND_API_KEY not found in environment variables');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      );
    }

    const resend = new Resend(resendApiKey);
    const formData = await request.json();

    // Validate required fields
    if (!formData.email || !formData.name) {
      console.log('Missing required fields'); // Debug log
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Attempting to send client confirmation email...'); // Debug log
    
    // Send confirmation email to client
    try {
      const clientEmail = await resend.emails.send({
        from: 'Synvra <no-reply@synvra.com>',
        to: ['delivered@resend.dev'], // This is Resend's test email address
        subject: 'Your Quote Request Has Been Received - Synvra',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>Quote Request Confirmation</title>
              <style>
                body { 
                  font-family: 'Arial', sans-serif;
                  line-height: 1.6;
                  color: #1F2937;
                  margin: 0;
                  padding: 0;
                  background-color: #f3f4f6;
                }
                .container {
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #ffffff;
                }
                .banner {
                  background-color: #0F172A;
                  padding: 40px 20px;
                  text-align: center;
                }
                .logo {
                  font-family: 'Arial', sans-serif;
                  color: #ffffff;
                  font-size: 48px;
                  font-weight: 800;
                  letter-spacing: 8px;
                  text-transform: uppercase;
                  margin: 0;
                  background: linear-gradient(135deg, #60A5FA, #3B82F6);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
                  position: relative;
                  display: inline-block;
                }
                .logo::after {
                  content: '';
                  position: absolute;
                  bottom: -8px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 60%;
                  height: 3px;
                  background: linear-gradient(90deg, transparent, #60A5FA, transparent);
                }
                .content {
                  padding: 40px 20px;
                  background-color: #ffffff;
                }
                .section {
                  margin-bottom: 30px;
                }
                .steps {
                  background-color: #F0F9FF;
                  padding: 20px;
                  border-radius: 8px;
                  margin: 20px 0;
                }
                .step {
                  display: flex;
                  align-items: flex-start;
                  margin-bottom: 15px;
                }
                .step-number {
                  background-color: #0EA5E9;
                  color: white;
                  width: 24px;
                  height: 24px;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-right: 12px;
                  flex-shrink: 0;
                }
                .footer {
                  background-color: #0F172A;
                  color: #E2E8F0;
                  padding: 40px 20px;
                }
                .footer-grid {
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 40px;
                  max-width: 600px;
                  margin: 0 auto;
                }
                .footer-section {
                  margin-bottom: 30px;
                }
                .footer-company-info {
                  grid-column: span 2;
                }
                .footer-heading {
                  color: #ffffff;
                  font-size: 16px;
                  margin-bottom: 16px;
                  font-weight: 600;
                }
                .footer-text {
                  color: #94A3B8;
                  font-size: 14px;
                  margin: 8px 0;
                }
                .footer-links {
                  list-style: none;
                  padding: 0;
                  margin: 0;
                }
                .footer-links li {
                  margin-bottom: 8px;
                }
                .footer-links a {
                  color: #94A3B8;
                  text-decoration: none;
                }
                .contact-item {
                  display: flex;
                  align-items: center;
                  gap: 8px;
                  margin-bottom: 12px;
                }
                .social-links {
                  display: flex;
                  gap: 16px;
                  margin-top: 20px;
                }
                .social-links a {
                  color: #E2E8F0;
                  text-decoration: none;
                }
                .copyright {
                  grid-column: span 2;
                  text-align: center;
                  margin-top: 30px;
                  padding-top: 20px;
                  border-top: 1px solid #1E293B;
                  color: #64748B;
                  font-size: 12px;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="banner">
                  <h1 class="logo">SYNVRA</h1>
                </div>
                
                <div class="content">
                  <div class="section">
                    <h1 style="color: #0F172A; margin-bottom: 20px;">Quote Request Received</h1>
                    <p>Dear ${formData.name},</p>
                    <p>Thank you for choosing Synvra. We've received your quote request and are excited to help bring your vision to life.</p>
                  </div>

                  <div class="steps">
                    <h2 style="color: #0F172A; margin-bottom: 15px;">Next Steps</h2>
                    <div class="step">
                      <div class="step-number">1</div>
                      <div>Our team will carefully review your requirements within 24 hours</div>
                    </div>
                    <div class="step">
                      <div class="step-number">2</div>
                      <div>We'll prepare a detailed proposal tailored to your needs</div>
                    </div>
                    <div class="step">
                      <div class="step-number">3</div>
                      <div>A dedicated team member will reach out to discuss your project in detail</div>
                    </div>
                  </div>

                  <div style="margin-top: 30px; color: #0F172A; font-weight: 500;">
                    Best regards,<br>
                    SYNVRA TEAM
                  </div>
                </div>

                <div class="footer">
                  <div class="footer-grid">
                    <div class="footer-section footer-company-info">
                      <div class="footer-heading">Synvra</div>
                      <p class="footer-text">Creating innovative digital solutions that help businesses thrive in the modern world.</p>
                      <div class="contact-item">
                        <span class="footer-text">📞 202-573-8594</span>
                      </div>
                      <div class="contact-item">
                        <span class="footer-text">📧 support@synvra.com</span>
                      </div>
                      <div class="contact-item">
                        <span class="footer-text">📍 28 West 44th Street, New York, NY 10036</span>
                      </div>
                    </div>

                    <div class="footer-section">
                      <div class="footer-heading">Solutions</div>
                      <ul class="footer-links">
                        <li><a href="/services/web-development">Web Development</a></li>
                        <li><a href="/services/mobile-apps">Mobile Apps</a></li>
                        <li><a href="/services/cloud-solutions">Cloud Solutions</a></li>
                        <li><a href="/services/ai-ml">AI & Machine Learning</a></li>
                        <li><a href="/services/cybersecurity">Cybersecurity</a></li>
                      </ul>
                    </div>

                    <div class="footer-section">
                      <div class="footer-heading">Company</div>
                      <ul class="footer-links">
                        <li><a href="/company/about">About Us</a></li>
                        <li><a href="/company/careers">Careers</a></li>
                        <li><a href="/company/case-studies">Case Studies</a></li>
                        <li><a href="/company/blog">Blog</a></li>
                        <li><a href="/company/press">Press</a></li>
                      </ul>
                    </div>

                    <div class="footer-section">
                      <div class="footer-heading">Resources</div>
                      <ul class="footer-links">
                        <li><a href="/resources/documentation">Documentation</a></li>
                        <li><a href="/resources/api">API Reference</a></li>
                        <li><a href="/resources/support">Support Center</a></li>
                        <li><a href="/resources/status">System Status</a></li>
                      </ul>
                    </div>

                    <div class="footer-section">
                      <div class="footer-heading">Legal</div>
                      <ul class="footer-links">
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/security">Security</a></li>
                        <li><a href="/compliance">Compliance</a></li>
                      </ul>
                    </div>

                    <div class="copyright">
                      ${new Date().getFullYear()} Synvra. All rights reserved.<br>
                      This is an automated message. Please do not reply directly to this email.
                    </div>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      });
      console.log('Client confirmation email sent:', clientEmail); // Debug log
    } catch (emailError) {
      console.error('Error sending client confirmation email:', emailError);
      if (emailError instanceof Error) {
        throw new Error(`Failed to send client confirmation email: ${emailError.message}`);
      } else {
        throw new Error('Failed to send client confirmation email: Unknown error');
      }
    }

    console.log('Attempting to send admin notification...'); // Debug log

    // Send notification to admin
    try {
      const adminEmail = await resend.emails.send({
        from: 'Synvra Notifications <notifications@synvra.com>',
        to: ['support@synvra.com'],
        subject: 'New Quote Request Received',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>New Quote Request</title>
              <style>
                body { 
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  color: #333;
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                }
                .header {
                  background-color: #1a56db;
                  color: white;
                  padding: 20px;
                  text-align: center;
                  border-radius: 8px 8px 0 0;
                }
                .content {
                  background-color: #f9fafb;
                  padding: 20px;
                  border-radius: 0 0 8px 8px;
                  border: 1px solid #e5e7eb;
                }
              </style>
            </head>
            <body>
              <div class="header">
                <h1>New Quote Request Received</h1>
              </div>
              <div class="content">
                <h2>Client Information</h2>
                <ul>
                  <li><strong>Name:</strong> ${formData.name}</li>
                  <li><strong>Email:</strong> ${formData.email}</li>
                  <li><strong>Phone:</strong> ${formData.phone}</li>
                  <li><strong>Company:</strong> ${formData.company || 'Not provided'}</li>
                  <li><strong>Budget Range:</strong> ${formData.budget}</li>
                  ${formData.exactBudget ? `<li><strong>Exact Budget:</strong> $${formData.exactBudget}</li>` : ''}
                  ${formData.deadline ? `<li><strong>Desired Completion:</strong> ${formData.deadline}</li>` : ''}
                </ul>

                <h2>Project Description</h2>
                <p>${formData.description}</p>

                <p style="margin-top: 20px; color: #1a56db;">
                  Please review and follow up with the client within 24-48 business hours.
                </p>
              </div>
            </body>
          </html>
        `,
      });
      console.log('Admin notification email sent:', adminEmail); // Debug log
    } catch (emailError) {
      console.error('Error sending admin notification:', emailError);
      if (emailError instanceof Error) {
        throw new Error(`Failed to send admin notification: ${emailError.message}`);
      } else {
        throw new Error('Failed to send admin notification: Unknown error');
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Quote request submitted successfully' 
    });
  } catch (error) {
    console.error('Error processing quote request:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        { 
          success: false, 
          message: `Failed to process quote request: ${error.message}` 
        },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to process quote request: Unknown error' 
        },
        { status: 500 }
      );
    }
  }
}
