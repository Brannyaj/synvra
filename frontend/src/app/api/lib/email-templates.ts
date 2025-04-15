export const emailTemplates = {
  // Contact Form Response Template
  contactResponse: (name: string, message: string) => `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333333;
        }
        .header {
          background-color: #0A0F1C;
          padding: 30px;
          text-align: center;
        }
        .logo {
          max-width: 150px;
          margin-bottom: 20px;
        }
        .content {
          padding: 30px;
          background-color: #ffffff;
        }
        .footer {
          background-color: #f7f7f7;
          padding: 20px;
          text-align: center;
          font-size: 12px;
          color: #666666;
        }
        .button {
          display: inline-block;
          padding: 12px 24px;
          background-color: #0A0F1C;
          color: #ffffff;
          text-decoration: none;
          border-radius: 4px;
          margin: 20px 0;
        }
        .social-links {
          margin-top: 20px;
        }
        .social-links a {
          margin: 0 10px;
          color: #0A0F1C;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <img src="https://synvra.com/logo.png" alt="Synvra" class="logo">
        </div>
        <div class="content">
          <h2>Thank you for contacting us, ${name}!</h2>
          <p>We've received your message and appreciate you reaching out to us. Our team will review your inquiry and get back to you within 1-2 business days.</p>
          <p>For your reference, here's what you sent us:</p>
          <blockquote style="border-left: 3px solid #0A0F1C; padding-left: 15px; margin: 20px 0;">
            ${message}
          </blockquote>
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Visit our <a href="https://synvra.com/portfolio" style="color: #0A0F1C;">portfolio</a></li>
            <li>Check out our <a href="https://synvra.com/services" style="color: #0A0F1C;">services</a></li>
            <li>Read about <a href="https://synvra.com/about" style="color: #0A0F1C;">our approach</a></li>
          </ul>
          <a href="https://synvra.com" class="button">Visit Our Website</a>
        </div>
        <div class="footer">
          <p>© ${new Date().getFullYear()} Synvra. All rights reserved.</p>
          <div class="social-links">
            <a href="https://linkedin.com/company/synvra">LinkedIn</a>
            <a href="https://twitter.com/synvra">Twitter</a>
            <a href="https://instagram.com/synvra">Instagram</a>
          </div>
          <p style="margin-top: 20px;">
            Synvra - Transforming Ideas into Digital Reality<br>
            <small>This is an automated response. Please do not reply to this email.</small>
          </p>
        </div>
      </div>
    </body>
    </html>
  `,

  // Quote Request Response Template
  quoteResponse: (name: string, projectType: string, budget: string, timeline: string) => `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333333;
        }
        .header {
          background-color: #0A0F1C;
          padding: 30px;
          text-align: center;
        }
        .logo {
          max-width: 150px;
          margin-bottom: 20px;
        }
        .content {
          padding: 30px;
          background-color: #ffffff;
        }
        .project-details {
          background-color: #f7f7f7;
          padding: 20px;
          border-radius: 4px;
          margin: 20px 0;
        }
        .footer {
          background-color: #f7f7f7;
          padding: 20px;
          text-align: center;
          font-size: 12px;
          color: #666666;
        }
        .button {
          display: inline-block;
          padding: 12px 24px;
          background-color: #0A0F1C;
          color: #ffffff;
          text-decoration: none;
          border-radius: 4px;
          margin: 20px 0;
        }
        .social-links {
          margin-top: 20px;
        }
        .social-links a {
          margin: 0 10px;
          color: #0A0F1C;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <img src="https://synvra.com/logo.png" alt="Synvra" class="logo">
        </div>
        <div class="content">
          <h2>Thank you for your project inquiry, ${name}!</h2>
          <p>We're excited about the possibility of working together on your project. Our team will carefully review your requirements and prepare a detailed quote.</p>
          
          <div class="project-details">
            <h3>Project Overview</h3>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Budget Range:</strong> ${budget}</p>
            <p><strong>Timeline:</strong> ${timeline}</p>
          </div>

          <p>What happens next?</p>
          <ol>
            <li>Our team will review your project requirements (within 1-2 business days)</li>
            <li>We'll prepare a detailed proposal including timeline and cost estimates</li>
            <li>We'll schedule a call to discuss the proposal and answer any questions</li>
          </ol>

          <p>While you wait, explore some of our similar projects:</p>
          <a href="https://synvra.com/portfolio" class="button">View Our Portfolio</a>
        </div>
        <div class="footer">
          <p>© ${new Date().getFullYear()} Synvra. All rights reserved.</p>
          <div class="social-links">
            <a href="https://linkedin.com/company/synvra">LinkedIn</a>
            <a href="https://twitter.com/synvra">Twitter</a>
            <a href="https://instagram.com/synvra">Instagram</a>
          </div>
          <p style="margin-top: 20px;">
            Synvra - Transforming Ideas into Digital Reality<br>
            <small>This is an automated response. Please do not reply to this email.</small>
          </p>
        </div>
      </div>
    </body>
    </html>
  `,

  // Welcome Email Template
  welcomeEmail: (name: string) => `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333333;
        }
        .header {
          background-color: #0A0F1C;
          padding: 30px;
          text-align: center;
        }
        .logo {
          max-width: 150px;
          margin-bottom: 20px;
        }
        .content {
          padding: 30px;
          background-color: #ffffff;
        }
        .feature-box {
          border: 1px solid #eeeeee;
          padding: 15px;
          margin: 10px 0;
          border-radius: 4px;
        }
        .footer {
          background-color: #f7f7f7;
          padding: 20px;
          text-align: center;
          font-size: 12px;
          color: #666666;
        }
        .button {
          display: inline-block;
          padding: 12px 24px;
          background-color: #0A0F1C;
          color: #ffffff;
          text-decoration: none;
          border-radius: 4px;
          margin: 20px 0;
        }
        .social-links {
          margin-top: 20px;
        }
        .social-links a {
          margin: 0 10px;
          color: #0A0F1C;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <img src="https://synvra.com/logo.png" alt="Synvra" class="logo">
        </div>
        <div class="content">
          <h2>Welcome to Synvra, ${name}!</h2>
          <p>We're thrilled to have you join our community of innovative businesses and entrepreneurs.</p>
          
          <h3>What makes Synvra different?</h3>
          <div class="feature-box">
            <h4>🚀 Innovation First</h4>
            <p>We combine cutting-edge technology with creative solutions to deliver exceptional results.</p>
          </div>
          <div class="feature-box">
            <h4>💡 Expert Team</h4>
            <p>Our experienced professionals are dedicated to bringing your vision to life.</p>
          </div>
          <div class="feature-box">
            <h4>🤝 Partnership Approach</h4>
            <p>We work closely with you to ensure your project's success every step of the way.</p>
          </div>

          <p>Ready to start your journey with us?</p>
          <a href="https://synvra.com/contact" class="button">Schedule a Consultation</a>
        </div>
        <div class="footer">
          <p>© ${new Date().getFullYear()} Synvra. All rights reserved.</p>
          <div class="social-links">
            <a href="https://linkedin.com/company/synvra">LinkedIn</a>
            <a href="https://twitter.com/synvra">Twitter</a>
            <a href="https://instagram.com/synvra">Instagram</a>
          </div>
          <p style="margin-top: 20px;">
            Synvra - Transforming Ideas into Digital Reality<br>
            <small>You received this email because you signed up for Synvra's services.</small>
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}; 