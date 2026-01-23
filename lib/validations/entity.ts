/**
 * Zod Validation Schemas for Entities
 */

import { z } from 'zod';

export const entitySchema = z.object({
  slug: z
    .string()
    .min(3, 'Slug must be at least 3 characters')
    .max(100, 'Slug must not exceed 100 characters')
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lowercase with hyphens only')
    .trim(),
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(200, 'Name must not exceed 200 characters')
    .trim(),
  sector: z
    .string()
    .min(2, 'Sector must be at least 2 characters')
    .max(100, 'Sector must not exceed 100 characters')
    .optional(),
  governance_score: z
    .number()
    .int('Governance score must be an integer')
    .min(0, 'Governance score must be at least 0')
    .max(100, 'Governance score must not exceed 100')
    .default(50),
  description: z
    .string()
    .max(1000, 'Description must not exceed 1,000 characters')
    .optional(),
  website_url: z
    .string()
    .url('Must be a valid URL')
    .optional()
    .or(z.literal('')),
  is_verified: z.boolean().default(false),
});

export type EntityFormData = z.infer<typeof entitySchema>;

export const entityUpdateSchema = entitySchema.partial().extend({
  id: z.string().uuid(),
});

export type EntityUpdateData = z.infer<typeof entityUpdateSchema>;
