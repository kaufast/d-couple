-- Seed Data for Strategic Accountability Hub
-- This provides initial test data for development and demonstration

-- Insert sample entities
INSERT INTO entities (slug, name, sector, governance_score, description, website_url, is_verified) VALUES
(
  'tech-corp-alpha',
  'Tech Corp Alpha',
  'Technology',
  72,
  'Leading technology corporation specializing in cloud infrastructure and enterprise software solutions.',
  'https://example.com/tech-corp-alpha',
  true
),
(
  'global-finance-holdings',
  'Global Finance Holdings',
  'Finance',
  65,
  'International financial services conglomerate with operations in investment banking and asset management.',
  'https://example.com/global-finance',
  true
),
(
  'healthcare-innovations-inc',
  'Healthcare Innovations Inc',
  'Healthcare',
  81,
  'Medical technology company focused on diagnostic tools and patient care systems.',
  'https://example.com/healthcare-innovations',
  true
),
(
  'energy-solutions-corp',
  'Energy Solutions Corp',
  'Energy',
  58,
  'Renewable energy provider specializing in solar and wind power infrastructure.',
  'https://example.com/energy-solutions',
  false
),
(
  'manufacturing-giants-ltd',
  'Manufacturing Giants Ltd',
  'Manufacturing',
  69,
  'Industrial manufacturing company with global supply chain operations.',
  'https://example.com/manufacturing-giants',
  true
),
(
  'retail-network-group',
  'Retail Network Group',
  'Retail',
  74,
  'Multi-national retail corporation operating department stores and e-commerce platforms.',
  'https://example.com/retail-network',
  false
),
(
  'transport-logistics-co',
  'Transport & Logistics Co',
  'Transportation',
  63,
  'International shipping and logistics provider with air, sea, and ground services.',
  'https://example.com/transport-logistics',
  true
),
(
  'education-foundation',
  'Education Foundation',
  'Education',
  88,
  'Non-profit foundation dedicated to improving educational access and quality worldwide.',
  'https://example.com/education-foundation',
  true
)
ON CONFLICT (slug) DO NOTHING;

-- Note: Sample reports and votes will be created through the application UI
-- after user authentication is set up

-- Insert sample tags for common categories
-- These will be referenced in the application for autocomplete
CREATE TABLE IF NOT EXISTS common_tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tag_name TEXT UNIQUE NOT NULL,
  category TEXT,
  usage_count INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO common_tags (tag_name, category) VALUES
('corporate-governance', 'compliance'),
('financial-transparency', 'compliance'),
('data-privacy', 'compliance'),
('esg-reporting', 'compliance'),
('audit-findings', 'compliance'),
('risk-assessment', 'compliance'),
('regulatory-compliance', 'compliance'),
('supply-chain', 'policy_strategy'),
('labor-practices', 'policy_strategy'),
('environmental-impact', 'policy_strategy'),
('tax-strategy', 'policy_strategy'),
('market-expansion', 'policy_strategy'),
('mergers-acquisitions', 'policy_strategy'),
('asset-restructuring', 'asset_preservation'),
('wealth-management', 'asset_preservation'),
('trust-formation', 'asset_preservation'),
('estate-planning', 'asset_preservation'),
('offshore-holdings', 'asset_preservation'),
('corporate-relocation', 'relocation'),
('headquarters-move', 'relocation'),
('tax-domicile', 'relocation'),
('jurisdictional-change', 'relocation'),
('operational-transfer', 'relocation')
ON CONFLICT (tag_name) DO NOTHING;

-- Create index on common_tags
CREATE INDEX IF NOT EXISTS idx_common_tags_category ON common_tags(category);
CREATE INDEX IF NOT EXISTS idx_common_tags_usage_count ON common_tags(usage_count DESC);

-- Comments
COMMENT ON TABLE common_tags IS 'Pre-defined tags for report categorization and autocomplete';
