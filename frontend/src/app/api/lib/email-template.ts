const baseEmailTemplate = (content: string) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Synvra</title>
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
      
      ${content}

      <div class="footer">
        <div class="footer-grid">
          <div class="footer-section footer-company-info">
            <div class="footer-heading">Synvra</div>
            <p class="footer-text">Creating innovative digital solutions that help businesses thrive in the modern world.</p>
            <div class="contact-item">
              <span class="footer-text">📧 support@synvra.com</span>
            </div>
          </div>

          <div class="footer-section">
            <div class="footer-heading">Solutions</div>
            <ul class="footer-links">
              <li><a href="https://synvra.com/services/web-development">Web Development</a></li>
              <li><a href="https://synvra.com/services/mobile-apps">Mobile Apps</a></li>
              <li><a href="https://synvra.com/services/cloud-solutions">Cloud Solutions</a></li>
              <li><a href="https://synvra.com/services/ai-ml">AI & Machine Learning</a></li>
              <li><a href="https://synvra.com/services/cybersecurity">Cybersecurity</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <div class="footer-heading">Company</div>
            <ul class="footer-links">
              <li><a href="https://synvra.com/about">About Us</a></li>
              <li><a href="https://synvra.com/work">Our Work</a></li>
              <li><a href="https://synvra.com/services">Services</a></li>
              <li><a href="https://synvra.com/contact">Contact</a></li>
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
`;

export const generateQuoteEmail = ({ name }: { name: string }) => {
  const content = `
    <div class="content">
      <div class="section">
        <h1 style="color: #0F172A; margin-bottom: 20px;">Quote Request Received</h1>
        <p>Dear ${name},</p>
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
  `;

  return {
    subject: 'Your Quote Request - Synvra',
    html: baseEmailTemplate(content)
  };
};

export const generateContactEmail = ({ name, message }: { name: string; message: string }) => {
  const content = `
    <div class="content">
      <div class="section">
        <h1 style="color: #0F172A; margin-bottom: 20px;">Thank You for Contacting Us</h1>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to Synvra. We've received your message and appreciate you taking the time to contact us.</p>
        
        <div style="background-color: #F0F9FF; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0F172A; margin-bottom: 10px;">Your Message:</h3>
          <p style="color: #1F2937;">${message}</p>
        </div>

        <p>Our team will review your message and get back to you within 1-2 business days.</p>
      </div>

      <div style="margin-top: 30px; color: #0F172A; font-weight: 500;">
        Best regards,<br>
        SYNVRA TEAM
      </div>
    </div>
  `;

  return {
    subject: 'We\'ve Received Your Message - Synvra',
    html: baseEmailTemplate(content)
  };
};

export const generateNotificationEmail = ({ name, email, message, type }: { 
  name: string; 
  email: string; 
  message: string;
  type: 'quote' | 'contact';
}) => {
  const content = `
    <div class="content">
      <div class="section">
        <h1 style="color: #0F172A; margin-bottom: 20px;">New ${type === 'quote' ? 'Quote Request' : 'Contact Form'} Submission</h1>
        
        <div style="background-color: #F0F9FF; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    </div>
  `;

  return {
    subject: `New ${type === 'quote' ? 'Quote Request' : 'Contact Form'} from ${name}`,
    html: baseEmailTemplate(content)
  };
}; 