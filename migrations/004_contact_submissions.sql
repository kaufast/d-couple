-- Contact Form Submissions Table
-- This migration adds a table to store contact form submissions

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  ip_address INET,
  user_agent TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for contact_submissions
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Trigger for automatic timestamp updates
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Row-Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Only admins can view contact submissions
CREATE POLICY "contact_submissions_select_admin"
  ON contact_submissions
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );

-- Anyone can insert (public contact form)
CREATE POLICY "contact_submissions_insert_public"
  ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Only admins can update status
CREATE POLICY "contact_submissions_update_admin"
  ON contact_submissions
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );

-- Only admins can delete submissions
CREATE POLICY "contact_submissions_delete_admin"
  ON contact_submissions
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );

-- Comments for documentation
COMMENT ON TABLE contact_submissions IS 'Contact form submissions from the public website';
COMMENT ON COLUMN contact_submissions.status IS 'Submission status: new, read, replied, archived';
