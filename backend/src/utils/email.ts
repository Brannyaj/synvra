import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface EmailOptions {
  to: string;
  templateName: string;
  variables: Record<string, string | number>;
}

export const sendEmail = async ({ to, templateName, variables }: EmailOptions) => {
  try {
    // Get system settings
    const settings = await prisma.systemSettings.findFirst();
    if (!settings) {
      throw new Error('System settings not found');
    }

    // Get email template
    const template = await prisma.emailTemplate.findUnique({
      where: { name: templateName },
    });
    if (!template) {
      throw new Error(`Email template ${templateName} not found`);
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: settings.smtpHost,
      port: settings.smtpPort,
      secure: settings.smtpSecure,
      auth: {
        user: settings.smtpUsername,
        pass: settings.smtpPassword,
      },
    });

    // Replace template variables
    let content = template.content;
    for (const [key, value] of Object.entries(variables)) {
      content = content.replace(new RegExp(`{{${key}}}`, 'g'), String(value));
    }

    // Send email
    await transporter.sendMail({
      from: settings.smtpUsername,
      to,
      subject: template.subject,
      html: content,
    });

    // Log success
    await prisma.systemLog.create({
      data: {
        level: 'INFO',
        message: `Email sent successfully to ${to} using template ${templateName}`,
      },
    });
  } catch (error) {
    // Log error
    await prisma.systemLog.create({
      data: {
        level: 'ERROR',
        message: `Failed to send email to ${to} using template ${templateName}`,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
    });
    throw error;
  }
};
