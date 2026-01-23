/**
 * Email Notification Utilities using Resend
 */

import { Resend } from 'resend';

// Initialize Resend with API key from environment
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

interface ContactSubmissionEmailProps {
  name: string;
  email: string;
  message: string;
  submissionId: string;
  hasAttachments: boolean;
}

export async function sendContactSubmissionNotification({
  name,
  email,
  message,
  submissionId,
  hasAttachments,
}: ContactSubmissionEmailProps) {
  if (!resend) {
    console.warn('Resend API key not configured. Skipping email notification.');
    return { success: false, error: 'Email service not configured' };
  }

  const adminEmail = process.env.ADMIN_EMAIL || 'admin@strategic-accountability-hub.com';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  try {
    const { data, error } = await resend.emails.send({
      from: 'Strategic Accountability Hub <noreply@strategic-accountability-hub.com>',
      to: adminEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
              <h2 style="color: #171717; margin-top: 0;">New Contact Form Submission</h2>
              <p style="color: #6c757d; margin-bottom: 0;">You have received a new message from your website.</p>
            </div>

            <div style="background-color: #fff; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
              <h3 style="color: #171717; margin-top: 0; border-bottom: 2px solid #171717; padding-bottom: 10px;">Submission Details</h3>

              <div style="margin-bottom: 15px;">
                <strong style="color: #495057;">Name:</strong><br>
                <span style="color: #212529;">${name}</span>
              </div>

              <div style="margin-bottom: 15px;">
                <strong style="color: #495057;">Email:</strong><br>
                <a href="mailto:${email}" style="color: #0d6efd; text-decoration: none;">${email}</a>
              </div>

              <div style="margin-bottom: 15px;">
                <strong style="color: #495057;">Message:</strong><br>
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; margin-top: 5px;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>

              ${
                hasAttachments
                  ? `
              <div style="margin-bottom: 15px;">
                <strong style="color: #495057;">Attachments:</strong><br>
                <span style="color: #28a745;">✓ This submission includes file attachments</span>
              </div>
              `
                  : ''
              }
            </div>

            <div style="text-align: center; margin-bottom: 20px;">
              <a href="${siteUrl}/admin/contact-submissions"
                 style="display: inline-block; background-color: #171717; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">
                View in Admin Dashboard
              </a>
            </div>

            <div style="background-color: #f8f9fa; border-radius: 8px; padding: 15px; text-align: center;">
              <p style="color: #6c757d; font-size: 14px; margin: 0;">
                <strong>Strategic Accountability Hub</strong><br>
                Corporate Governance Oversight & Strategic Accountability
              </p>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

${hasAttachments ? 'This submission includes file attachments.\n\n' : ''}
View this submission in the admin dashboard: ${siteUrl}/admin/contact-submissions
      `.trim(),
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error: error.message };
    }

    console.log('Email notification sent:', data);
    return { success: true, messageId: data?.id };
  } catch (error) {
    console.error('Unexpected error sending email:', error);
    return { success: false, error: 'Failed to send email notification' };
  }
}

/**
 * Send welcome email to new users
 */
export async function sendWelcomeEmail(userEmail: string, userName: string) {
  if (!resend) {
    console.warn('Resend API key not configured. Skipping welcome email.');
    return { success: false, error: 'Email service not configured' };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  try {
    const { data, error } = await resend.emails.send({
      from: 'Strategic Accountability Hub <noreply@strategic-accountability-hub.com>',
      to: userEmail,
      subject: 'Welcome to Strategic Accountability Hub',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #171717; color: #fff; border-radius: 8px; padding: 30px; margin-bottom: 20px; text-align: center;">
              <h1 style="margin: 0;">Welcome to Strategic Accountability Hub</h1>
            </div>

            <div style="background-color: #fff; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
              <p style="font-size: 16px; margin-top: 0;">Hi ${userName},</p>

              <p>Thank you for joining Strategic Accountability Hub — your platform for corporate governance oversight and strategic accountability.</p>

              <p>Here's what you can do:</p>

              <ul style="color: #495057;">
                <li>Browse our institutional directory</li>
                <li>Submit governance reports</li>
                <li>Participate in community validation</li>
                <li>Access strategic mobility resources</li>
              </ul>

              <div style="text-align: center; margin: 30px 0;">
                <a href="${siteUrl}/directory"
                   style="display: inline-block; background-color: #171717; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">
                  Explore the Directory
                </a>
              </div>

              <p style="color: #6c757d; font-size: 14px; margin-bottom: 0;">
                If you have any questions, feel free to contact us at any time.
              </p>
            </div>

            <div style="background-color: #f8f9fa; border-radius: 8px; padding: 15px; text-align: center;">
              <p style="color: #6c757d; font-size: 14px; margin: 0;">
                © ${new Date().getFullYear()} Strategic Accountability Hub. All rights reserved.
              </p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Error sending welcome email:', error);
      return { success: false, error: error.message };
    }

    return { success: true, messageId: data?.id };
  } catch (error) {
    console.error('Unexpected error sending welcome email:', error);
    return { success: false, error: 'Failed to send welcome email' };
  }
}
