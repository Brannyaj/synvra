import * as SibApiV3Sdk from '@sendinblue/client';

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);

export const emailTemplates = {
  // Template IDs will be set after creating templates in Brevo
  CONTACT_RESPONSE: 1, // You'll replace this with actual template ID
  QUOTE_RESPONSE: 2,   // You'll replace this with actual template ID
  WELCOME_EMAIL: 3     // You'll replace this with actual template ID
};

export const sendTemplateEmail = async ({
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