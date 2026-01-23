-- Row-Level Security (RLS) Policies
-- This migration implements privacy-first access control for all tables

-- Enable Row-Level Security on all tables
ALTER TABLE entities ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE impact_votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_log ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- ENTITIES POLICIES
-- =====================================================

-- Anyone can read entities (public directory)
CREATE POLICY "entities_select_public"
  ON entities
  FOR SELECT
  USING (true);

-- Only admins can insert entities
CREATE POLICY "entities_insert_admin"
  ON entities
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );

-- Only admins can update entities
CREATE POLICY "entities_update_admin"
  ON entities
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

-- Only admins can delete entities
CREATE POLICY "entities_delete_admin"
  ON entities
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );

-- =====================================================
-- REPORTS POLICIES
-- =====================================================

-- Public reports (unclassified, approved) are viewable by everyone
CREATE POLICY "reports_select_public"
  ON reports
  FOR SELECT
  USING (
    classification = 'unclassified'
    AND status = 'approved'
  );

-- Authors can view their own reports (regardless of status/classification)
CREATE POLICY "reports_select_own"
  ON reports
  FOR SELECT
  USING (auth.uid() = author_id);

-- Verified analysts can view restricted reports (if approved)
CREATE POLICY "reports_select_restricted"
  ON reports
  FOR SELECT
  USING (
    classification = 'restricted'
    AND status = 'approved'
    AND EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND (user_profiles.role = 'verified_analyst' OR user_profiles.role = 'admin')
      AND user_profiles.is_verified = true
    )
  );

-- Admins can view all reports
CREATE POLICY "reports_select_admin"
  ON reports
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );

-- Verified users can submit reports
CREATE POLICY "reports_insert_verified"
  ON reports
  FOR INSERT
  WITH CHECK (
    auth.uid() = author_id
    AND EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND (
        user_profiles.role = 'verified_analyst'
        OR user_profiles.role = 'admin'
        OR (user_profiles.role = 'contributor' AND user_profiles.is_verified = true)
      )
    )
  );

-- Authors can update their own reports (only if under_review)
CREATE POLICY "reports_update_own"
  ON reports
  FOR UPDATE
  USING (
    auth.uid() = author_id
    AND status = 'under_review'
  )
  WITH CHECK (
    auth.uid() = author_id
    AND status = 'under_review'
  );

-- Admins can update any report
CREATE POLICY "reports_update_admin"
  ON reports
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

-- Authors can delete their own reports (only if under_review)
CREATE POLICY "reports_delete_own"
  ON reports
  FOR DELETE
  USING (
    auth.uid() = author_id
    AND status = 'under_review'
  );

-- Admins can delete any report
CREATE POLICY "reports_delete_admin"
  ON reports
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );

-- =====================================================
-- IMPACT_VOTES POLICIES
-- =====================================================

-- Users can only see their own votes
CREATE POLICY "impact_votes_select_own"
  ON impact_votes
  FOR SELECT
  USING (auth.uid() = user_id);

-- Admins can view all votes (for moderation)
CREATE POLICY "impact_votes_select_admin"
  ON impact_votes
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );

-- Users can insert their own votes
CREATE POLICY "impact_votes_insert_own"
  ON impact_votes
  FOR INSERT
  WITH CHECK (
    auth.uid() = user_id
    AND EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
    )
  );

-- Users can update only their own votes
CREATE POLICY "impact_votes_update_own"
  ON impact_votes
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Users can delete their own votes
CREATE POLICY "impact_votes_delete_own"
  ON impact_votes
  FOR DELETE
  USING (auth.uid() = user_id);

-- =====================================================
-- USER_PROFILES POLICIES
-- =====================================================

-- Anyone can view public profile information
CREATE POLICY "user_profiles_select_public"
  ON user_profiles
  FOR SELECT
  USING (true);

-- Users can update their own profile
CREATE POLICY "user_profiles_update_own"
  ON user_profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (
    auth.uid() = id
    -- Prevent users from changing their own role
    AND role = (SELECT role FROM user_profiles WHERE id = auth.uid())
  );

-- Admins can update any profile (including roles)
CREATE POLICY "user_profiles_update_admin"
  ON user_profiles
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

-- =====================================================
-- ACTIVITY_LOG POLICIES
-- =====================================================

-- Users can view their own activity
CREATE POLICY "activity_log_select_own"
  ON activity_log
  FOR SELECT
  USING (auth.uid() = user_id);

-- Admins can view all activity
CREATE POLICY "activity_log_select_admin"
  ON activity_log
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );

-- Insert is allowed for all authenticated users (for logging)
CREATE POLICY "activity_log_insert_authenticated"
  ON activity_log
  FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

-- Only admins can delete activity logs
CREATE POLICY "activity_log_delete_admin"
  ON activity_log
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = auth.uid()
      AND user_profiles.role = 'admin'
    )
  );

-- =====================================================
-- HELPER FUNCTIONS FOR VOTE AGGREGATION
-- =====================================================

-- Function to update report impact_rating after vote changes
CREATE OR REPLACE FUNCTION update_report_impact_rating()
RETURNS TRIGGER AS $$
DECLARE
  total_score INT;
BEGIN
  -- Calculate total score from all votes for this report
  SELECT COALESCE(SUM(vote_weight), 0)
  INTO total_score
  FROM impact_votes
  WHERE report_id = COALESCE(NEW.report_id, OLD.report_id);

  -- Update the report's impact_rating
  UPDATE reports
  SET impact_rating = total_score,
      updated_at = NOW()
  WHERE id = COALESCE(NEW.report_id, OLD.report_id);

  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to auto-update impact_rating on vote changes
CREATE TRIGGER update_impact_rating_on_vote_insert
  AFTER INSERT ON impact_votes
  FOR EACH ROW
  EXECUTE FUNCTION update_report_impact_rating();

CREATE TRIGGER update_impact_rating_on_vote_update
  AFTER UPDATE ON impact_votes
  FOR EACH ROW
  EXECUTE FUNCTION update_report_impact_rating();

CREATE TRIGGER update_impact_rating_on_vote_delete
  AFTER DELETE ON impact_votes
  FOR EACH ROW
  EXECUTE FUNCTION update_report_impact_rating();

-- =====================================================
-- HELPER FUNCTIONS FOR ACTIVITY LOGGING
-- =====================================================

-- Function to log report submissions
CREATE OR REPLACE FUNCTION log_report_submission()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO activity_log (user_id, action, entity_type, entity_id, metadata)
  VALUES (
    NEW.author_id,
    'report_submitted',
    'report',
    NEW.id,
    jsonb_build_object(
      'category', NEW.category,
      'classification', NEW.classification,
      'entity_id', NEW.entity_id
    )
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to log new reports
CREATE TRIGGER log_new_report
  AFTER INSERT ON reports
  FOR EACH ROW
  EXECUTE FUNCTION log_report_submission();

-- Comments for documentation
COMMENT ON POLICY "reports_select_public" ON reports IS 'Public access to approved unclassified reports';
COMMENT ON POLICY "reports_select_restricted" ON reports IS 'Verified analysts can view approved restricted reports';
COMMENT ON POLICY "reports_select_admin" ON reports IS 'Admins have full access to all reports';
