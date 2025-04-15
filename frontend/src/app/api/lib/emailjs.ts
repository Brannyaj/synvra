import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

export const sendEmail = async ({
  templateId,
  templateParams,
}: {
  templateId: string;
  templateParams: Record<string, any>;
}) => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      templateId,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );
    return { success: true, data: response };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}; 