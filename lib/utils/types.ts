/**
 * TypeScript type definitions for database entities
 */

export type UserRole = 'contributor' | 'verified_analyst' | 'admin';

export type ReportCategory = 'compliance' | 'asset_preservation' | 'relocation' | 'policy_strategy';

export type ReportClassification = 'unclassified' | 'restricted' | 'confidential_internal';

export type ReportStatus = 'under_review' | 'approved' | 'rejected' | 'flagged';

export interface Entity {
  id: string;
  slug: string;
  name: string;
  sector: string | null;
  governance_score: number;
  is_verified: boolean;
  description: string | null;
  website_url: string | null;
  metadata: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface Report {
  id: string;
  author_id: string | null;
  entity_id: string;
  category: ReportCategory;
  classification: ReportClassification;
  title: string;
  content: string;
  impact_rating: number;
  status: ReportStatus;
  sources: string[];
  tags: string[];
  metadata: Record<string, any>;
  created_at: string;
  updated_at: string;
  // Joined data
  author?: UserProfile;
  entity?: Entity;
}

export interface ImpactVote {
  user_id: string;
  report_id: string;
  vote_weight: 1 | -1;
  voted_at: string;
}

export interface UserProfile {
  id: string;
  display_name: string | null;
  role: UserRole;
  institution_affiliation: string | null;
  expertise_areas: string[];
  reputation_score: number;
  is_verified: boolean;
  avatar_url: string | null;
  bio: string | null;
  created_at: string;
  updated_at: string;
}

export interface ActivityLog {
  id: string;
  user_id: string | null;
  action: string;
  entity_type: string | null;
  entity_id: string | null;
  metadata: Record<string, any>;
  ip_address: string | null;
  user_agent: string | null;
  created_at: string;
}

export interface CommonTag {
  id: string;
  tag_name: string;
  category: string | null;
  usage_count: number;
  created_at: string;
}
