const baseEmailTemplate = (content: string) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Synvra</title>
    <style>
      body { 
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.6;
        color: #000000;
        margin: 0;
        padding: 0;
        background-color: #ffffff;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
      }
      .banner {
        background-color: #0A0F1C;
        padding: 30px;
        text-align: center;
      }
      .logo {
        color: #3B82F6;
        font-size: 32px;
        font-weight: bold;
        letter-spacing: 2px;
      }
      .content {
        padding: 40px 30px;
        background-color: #ffffff;
      }
      .section {
        margin-bottom: 30px;
      }
      h1 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 20px;
        color: #000000;
      }
      p {
        margin: 0 0 20px;
        font-size: 16px;
        line-height: 1.6;
      }
      .steps {
        background-color: #F8FAFC;
        padding: 25px;
        border-radius: 8px;
        margin: 30px 0;
      }
      .step {
        display: flex;
        align-items: flex-start;
        margin-bottom: 20px;
      }
      .step:last-child {
        margin-bottom: 0;
      }
      .step-number {
        background-color: #3B82F6;
        color: white;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
        font-size: 14px;
        flex-shrink: 0;
      }
      .step-text {
        font-size: 16px;
        padding-top: 2px;
      }
      .footer {
        background-color: #0A0F1C;
        color: #ffffff;
        padding: 30px;
        text-align: left;
      }
      .footer-heading {
        color: #ffffff;
        font-size: 18px;
        margin-bottom: 10px;
      }
      .footer-text {
        color: #ffffff;
        font-size: 14px;
        margin: 0 0 15px;
        opacity: 0.9;
      }
      .footer-email {
        color: #ffffff;
        font-size: 14px;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="banner">
        <div class="logo">SYNVRA</div>
      </div>
      
      ${content}

      <div class="footer">
        <div class="footer-heading">Synvra</div>
        <p class="footer-text">Creating innovative digital solutions that help businesses thrive in the modern world.</p>
        <a href="mailto:support@synvra.com" class="footer-email">📧 support@synvra.com</a>
      </div>
    </div>
  </body>
</html>
`;

export const generateQuoteEmail = ({ name }: { name: string }) => {
  const content = `
    <div class="content">
      <h1>Quote Request Received</h1>
      <p>Dear ${name},</p>
      <p>Thank you for choosing Synvra. We've received your quote request and are excited to help bring your vision to life.</p>

      <div class="steps">
        <h2 style="color: #000000; margin: 0 0 20px; font-size: 20px;">Next Steps</h2>
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-text">Our team will carefully review your requirements within 24 hours</div>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <div class="step-text">We'll prepare a detailed proposal tailored to your needs</div>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <div class="step-text">A dedicated team member will reach out to discuss your project in detail</div>
        </div>
      </div>

      <p style="margin-bottom: 0;">Best regards,<br>SYNVRA TEAM</p>
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
      <h1>Thank You for Contacting Us</h1>
      <p>Dear ${name},</p>
      <p>Thank you for reaching out to Synvra. We've received your message and appreciate you taking the time to contact us.</p>
      
      <div class="steps">
        <h3 style="color: #000000; margin: 0 0 10px; font-size: 18px;">Your Message:</h3>
        <p style="margin: 0;">${message}</p>
      </div>

      <p>Our team will review your message and get back to you within 1-2 business days.</p>
      <p style="margin-bottom: 0;">Best regards,<br>SYNVRA TEAM</p>
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
      <h1>New ${type === 'quote' ? 'Quote Request' : 'Contact Form'} Submission</h1>
      
      <div class="steps">
        <p style="margin: 0 0 10px;"><strong>Name:</strong> ${name}</p>
        <p style="margin: 0 0 10px;"><strong>Email:</strong> ${email}</p>
        <p style="margin: 0 0 10px;"><strong>Message:</strong></p>
        <p style="margin: 0; white-space: pre-wrap;">${message}</p>
      </div>
    </div>
  `;

  return {
    subject: `New ${type === 'quote' ? 'Quote Request' : 'Contact Form'} from ${name}`,
    html: baseEmailTemplate(content)
  };
}; 