-- Strategic Accountability Hub - Initial Database Schema
-- This migration creates the core tables for entities, reports, votes, and user profiles

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Core Entities Table (Companies/Foundations/Politicians)
CREATE TABLE IF NOT EXISTS entities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  sector TEXT, -- e.g., 'Technology', 'Finance', 'Government', 'Healthcare'
  governance_score INT DEFAULT 50 CHECK (governance_score >= 0 AND governance_score <= 100),
  is_verified BOOLEAN DEFAULT FALSE,
  description TEXT,
  website_url TEXT,
  metadata JSONB DEFAULT '{}'::jsonb, -- Flexible metadata storage
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for entities
CREATE INDEX idx_entities_slug ON entities(slug);
CREATE INDEX idx_entities_sector ON entities(sector);
CREATE INDEX idx_entities_governance_score ON entities(governance_score DESC);
CREATE INDEX idx_entities_created_at ON entities(created_at DESC);

-- Strategic Reports & Asset Mobility Proposals
CREATE TABLE IF NOT EXISTS reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  entity_id UUID REFERENCES entities(id) ON DELETE CASCADE,
  category TEXT NOT NULL CHECK (category IN ('compliance', 'asset_preservation', 'relocation', 'policy_strategy')),
  classification TEXT DEFAULT 'unclassified' CHECK (classification IN ('unclassified', 'restricted', 'confidential_internal')),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  impact_rating INT DEFAULT 0,
  status TEXT DEFAULT 'under_review' CHECK (status IN ('under_review', 'approved', 'rejected', 'flagged')),
  sources TEXT[], -- Array of source URLs or citations
  tags TEXT[], -- Array of tags for categorization
  metadata JSONB DEFAULT '{}'::jsonb, -- Additional data (attachments, etc.)
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for reports
CREATE INDEX idx_reports_entity_id ON reports(entity_id);
CREATE INDEX idx_reports_author_id ON reports(author_id);
CREATE INDEX idx_reports_category ON reports(category);
CREATE INDEX idx_reports_status ON reports(status);
CREATE INDEX idx_reports_classification ON reports(classification);
CREATE INDEX idx_reports_impact_rating ON reports(impact_rating DESC);
CREATE INDEX idx_reports_created_at ON reports(created_at DESC);

-- Verification/Voting System
CREATE TABLE IF NOT EXISTS impact_votes (
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  report_id UUID REFERENCES reports(id) ON DELETE CASCADE,
  vote_weight INT CHECK (vote_weight IN (1, -1)),
  voted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (user_id, report_id)
);

-- Indexes for impact_votes
CREATE INDEX idx_impact_votes_report_id ON impact_votes(report_id);
CREATE INDEX idx_impact_votes_user_id ON impact_votes(user_id);

-- User Profiles (Extended)
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  role TEXT DEFAULT 'contributor' CHECK (role IN ('contributor', 'verified_analyst', 'admin')),
  institution_affiliation TEXT,
  expertise_areas TEXT[], -- Array of expertise domains
  reputation_score INT DEFAULT 0,
  is_verified BOOLEAN DEFAULT FALSE,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for user_profiles
CREATE INDEX idx_user_profiles_role ON user_profiles(role);
CREATE INDEX idx_user_profiles_reputation_score ON user_profiles(reputation_score DESC);

-- Activity Log (Audit Trail)
CREATE TABLE IF NOT EXISTS activity_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  action TEXT NOT NULL, -- 'report_submitted', 'entity_created', 'vote_cast', 'login', etc.
  entity_type TEXT, -- 'report', 'entity', 'vote', 'user'
  entity_id UUID,
  metadata JSONB DEFAULT '{}'::jsonb,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for activity_log
CREATE INDEX idx_activity_log_user_id ON activity_log(user_id);
CREATE INDEX idx_activity_log_created_at ON activity_log(created_at DESC);
CREATE INDEX idx_activity_log_action ON activity_log(action);
CREATE INDEX idx_activity_log_entity_type ON activity_log(entity_type);

-- Functions for automatic timestamp updates
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for automatic timestamp updates
CREATE TRIGGER update_entities_updated_at
  BEFORE UPDATE ON entities
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_reports_updated_at
  BEFORE UPDATE ON reports
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_profiles_updated_at
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Function to automatically create user profile on signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, display_name, created_at)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.email),
    NOW()
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();

-- Comments for documentation
COMMENT ON TABLE entities IS 'Core entities (companies, foundations, politicians) tracked by the system';
COMMENT ON TABLE reports IS 'Strategic reports on governance, compliance, asset preservation, and relocation';
COMMENT ON TABLE impact_votes IS 'Community validation system for rating report impact';
COMMENT ON TABLE user_profiles IS 'Extended user profiles with roles and reputation';
COMMENT ON TABLE activity_log IS 'Audit trail for all significant user actions';
