/**
 * Server Actions for Contact Form
 */

'use server';

import { createClient } from '@/lib/supabase/server';
import { contactFormSchema } from '@/lib/validations/contact';
import { sanitizePlainText } from '@/lib/utils/sanitize';
import { headers } from 'next/headers';
import { sendContactSubmissionNotification } from '@/lib/email/notifications';

export async function submitContactForm(formData: FormData) {
  const supabase = await createClient();

  // Get client IP and User-Agent for security/spam prevention
  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown';
  const userAgent = headersList.get('user-agent') || 'unknown';

  // Validate input
  const rawData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
    termsAccepted: formData.get('checkbox') === 'on',
    attachments: formData.getAll('attachments') as string[],
  };

  const validation = contactFormSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      error: 'Validation failed',
      details: validation.error.errors[0].message,
    };
  }

  const { name, email, message, attachments } = validation.data;

  // Sanitize inputs
  const sanitizedName = sanitizePlainText(name);
  const sanitizedMessage = sanitizePlainText(message);

  // Check for spam (simple rate limiting by IP)
  const { data: recentSubmissions, error: checkError } = await supabase
    .from('contact_submissions')
    .select('id')
    .eq('ip_address', ip)
    .gte('created_at', new Date(Date.now() - 60 * 60 * 1000).toISOString()) // Last hour
    .limit(5);

  if (checkError) {
    console.error('Error checking spam:', checkError);
  }

  if (recentSubmissions && recentSubmissions.length >= 5) {
    return {
      error: 'Too many submissions. Please try again later.',
    };
  }

  // Insert contact submission
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert({
      name: sanitizedName,
      email,
      message: sanitizedMessage,
      attachments: attachments || [],
      ip_address: ip,
      user_agent: userAgent,
      status: 'new',
    })
    .select()
    .single();

  if (error) {
    console.error('Contact form error:', error);
    return {
      error: 'Failed to submit contact form. Please try again.',
    };
  }

  // Send email notification to admin
  await sendContactSubmissionNotification({
    name: sanitizedName,
    email,
    message: sanitizedMessage,
    submissionId: data.id,
    hasAttachments: (attachments && attachments.length > 0) || false,
  });

  return {
    success: true,
    message: 'Thank you for contacting us! We will respond to you shortly.',
  };
}
