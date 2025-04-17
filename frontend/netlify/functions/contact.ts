import { Handler } from '@netlify/functions';
import * as SibApiV3Sdk from '@sendinblue/client';

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);

const emailTemplates = {
  CONTACT_RESPONSE: parseInt(process.env.BREVO_CONTACT_TEMPLATE_ID || '1'),
  WELCOME_EMAIL: parseInt(process.env.BREVO_WELCOME_TEMPLATE_ID || '2')
};

const sendTemplateEmail = async ({
  templateId,
  to,
  params,
}: {
  templateId: number;
  to: { email: string; name: string };
  params: Record<string, any>;
}) => {
  try {
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.templateId = templateId;
    sendSmtpEmail.to = [to];
    sendSmtpEmail.params = params;

    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const handler: Handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || '{}');

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

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

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error('Error processing contact form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process contact form' })
    };
  }
}; 