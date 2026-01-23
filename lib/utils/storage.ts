/**
 * Supabase Storage Utilities
 */

import { createClient } from '@/lib/supabase/client';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export async function uploadContactAttachment(file: File): Promise<{ path?: string; error?: string }> {
  // Validate file size
  if (file.size > MAX_FILE_SIZE) {
    return { error: 'File size must be less than 5MB' };
  }

  // Validate file type
  if (!ALLOWED_TYPES.includes(file.type)) {
    return { error: 'Invalid file type. Allowed: PDF, Images, Word documents' };
  }

  const supabase = createClient();

  // Generate unique filename
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 15);
  const fileExt = file.name.split('.').pop();
  const fileName = `${timestamp}_${randomString}.${fileExt}`;

  // Upload to Supabase Storage
  const { data, error } = await supabase.storage
    .from('contact-attachments')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    console.error('Upload error:', error);
    return { error: 'Failed to upload file' };
  }

  return { path: data.path };
}

export async function deleteContactAttachment(path: string): Promise<{ error?: string }> {
  const supabase = createClient();

  const { error } = await supabase.storage
    .from('contact-attachments')
    .remove([path]);

  if (error) {
    console.error('Delete error:', error);
    return { error: 'Failed to delete file' };
  }

  return {};
}

export function getPublicUrl(path: string): string {
  const supabase = createClient();

  const { data } = supabase.storage
    .from('contact-attachments')
    .getPublicUrl(path);

  return data.publicUrl;
}
