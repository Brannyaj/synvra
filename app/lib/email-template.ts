export const baseEmailTemplate = (content: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Synvra</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #1a1a1a;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      text-align: center;
      padding: 20px 0;
      background: linear-gradient(to right, #0A0F1C, #1E293B);
    }
    .logo {
      width: 150px;
      height: auto;
    }
    .content {
      padding: 30px 20px;
      background-color: #ffffff;
    }
    .footer {
      text-align: center;
      padding: 20px;
      font-size: 14px;
      color: #666;
      background-color: #f5f5f5;
    }
    .button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #0A0F1C;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      margin: 20px 0;
    }
    .section {
      margin-bottom: 30px;
    }
    h1 {
      color: #0A0F1C;
      margin-bottom: 20px;
    }
    p {
      margin: 10px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://synvra.com/logo.png" alt="Synvra" class="logo">
    </div>
    ${content}
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} Synvra. All rights reserved.</p>
      <p>support@synvra.com</p>
    </div>
  </div>
</body>
</html>
`;

export const generateQuoteEmail = ({ name }: { name: string }) => {
  const content = `
    <div class="content">
      <div class="section">
        <h1>Thank You for Your Quote Request</h1>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to Synvra. We have received your quote request and our team will review it promptly.</p>
        <p>We typically respond within 24-48 business hours with a detailed proposal tailored to your project requirements.</p>
        <p>In the meantime, if you have any urgent questions, please don't hesitate to contact us at support@synvra.com.</p>
      </div>
    </div>
  `;

  return {
    subject: 'Quote Request Received - Synvra',
    html: baseEmailTemplate(content)
  };
};

export const generateNotificationEmail = ({ 
  name, 
  email, 
  message, 
  type 
}: { 
  name: string; 
  email: string; 
  message: string;
  type: 'quote' | 'contact';
}) => {
  const content = `
    <div class="content">
      <div class="section">
        <h1>New ${type === 'quote' ? 'Quote Request' : 'Contact Form'} Submission</h1>
        
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