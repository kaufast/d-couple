/**
 * Zod Validation Schema for Contact Form
 */

import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .trim(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .trim()
    .toLowerCase(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must not exceed 2,000 characters')
    .trim(),
  termsAccepted: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must accept the terms to submit',
    }),
  attachments: z.array(z.string()).max(3).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
