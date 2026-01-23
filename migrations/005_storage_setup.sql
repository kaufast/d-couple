-- Storage Setup for Contact Form Attachments
-- Run this to create storage buckets and policies

-- Create storage bucket for contact attachments
INSERT INTO storage.buckets (id, name, public)
VALUES ('contact-attachments', 'contact-attachments', false)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for contact-attachments bucket

-- Allow public uploads (anyone can upload to contact form)
CREATE POLICY "contact_attachments_insert_public"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'contact-attachments');

-- Only admins can view attachments
CREATE POLICY "contact_attachments_select_admin"
ON storage.objects FOR SELECT
USING (
  bucket_id = 'contact-attachments'
  AND (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  )
);

-- Only admins can delete attachments
CREATE POLICY "contact_attachments_delete_admin"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'contact-attachments'
  AND (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  )
);

-- Add attachments column to contact_submissions
ALTER TABLE contact_submissions
ADD COLUMN IF NOT EXISTS attachments TEXT[] DEFAULT '{}';

COMMENT ON COLUMN contact_submissions.attachments IS 'Array of storage paths for uploaded files';
