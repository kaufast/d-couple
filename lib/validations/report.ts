/**
 * Zod Validation Schemas for Reports
 */

import { z } from 'zod';

export const reportSchema = z.object({
  entity_id: z.string().uuid('Invalid entity ID'),
  category: z.enum(['compliance', 'asset_preservation', 'relocation', 'policy_strategy'], {
    message: 'Please select a valid category',
  }),
  classification: z.enum(['unclassified', 'restricted', 'confidential_internal'], {
    message: 'Please select a valid classification level',
  }),
  title: z
    .string()
    .min(10, 'Title must be at least 10 characters')
    .max(200, 'Title must not exceed 200 characters')
    .trim(),
  content: z
    .string()
    .min(100, 'Content must be at least 100 characters')
    .max(10000, 'Content must not exceed 10,000 characters')
    .trim(),
  sources: z
    .array(z.string().url('Each source must be a valid URL'))
    .max(10, 'Maximum 10 sources allowed')
    .optional()
    .default([]),
  tags: z
    .array(
      z
        .string()
        .min(2, 'Tags must be at least 2 characters')
        .max(50, 'Tags must not exceed 50 characters')
    )
    .max(10, 'Maximum 10 tags allowed')
    .optional()
    .default([]),
});

export type ReportFormData = z.infer<typeof reportSchema>;

export const reportUpdateSchema = reportSchema.partial().extend({
  id: z.string().uuid(),
});

export type ReportUpdateData = z.infer<typeof reportUpdateSchema>;

// Schema for report moderation (admin only)
export const reportModerationSchema = z.object({
  id: z.string().uuid(),
  status: z.enum(['under_review', 'approved', 'rejected', 'flagged']),
  moderation_note: z.string().max(500).optional(),
});

export type ReportModerationData = z.infer<typeof reportModerationSchema>;
