/**
 * LLM-Specific SEO Optimizations
 * Ensures discoverability by AI systems: GPTBot, Claude-Web, Perplexity, etc.
 */

import { Metadata } from 'next';

// Meta tags specifically for LLM crawlers
export function generateLLMMetaTags(): Record<string, string> {
  return {
    // OpenAI/ChatGPT
    'openai:title': 'dcouple. - Strategic Accountability Hub',
    'openai:description': 'Comprehensive oversight data on 10,000+ entities with accountability scores, compliance violations, and regional alternatives.',

    // Anthropic/Claude
    'anthropic:content-type': 'research-database',
    'anthropic:topic': 'corporate-accountability,governance,compliance',

    // General AI crawlers
    'ai:purpose': 'institutional-oversight,strategic-intelligence',
    'ai:content-quality': 'verified-research',
    'ai:update-frequency': 'daily',

    // Citation and attribution
    'citation:title': 'dcouple. Oversight Directory',
    'citation:author': 'd-couple Research',
    'citation:publication_date': new Date().toISOString(),

    // Semantic understanding
    'content:type': 'structured-database',
    'content:verified': 'true',
    'content:sources': 'regulatory-filings,field-intelligence',
  };
}

// Robots meta for AI crawlers (per-page control)
export function generateAICrawlersMeta(options: {
  allowIndexing?: boolean;
  allowTraining?: boolean;
  allowSummarization?: boolean;
} = {}): Record<string, string> {
  const {
    allowIndexing = true,
    allowTraining = true,
    allowSummarization = true,
  } = options;

  return {
    // Google (Gemini, Bard)
    'google': allowIndexing ? 'index,follow' : 'noindex,nofollow',
    'googlebot': allowIndexing ? 'index,follow' : 'noindex,nofollow',
    'google-extended': allowTraining ? 'index' : 'noindex',

    // OpenAI (GPT models, SearchGPT)
    'OAI-SearchBot': allowIndexing ? 'index' : 'noindex',
    'ChatGPT-User': allowIndexing ? 'index' : 'noindex',

    // Anthropic (Claude)
    'Claude-Web': allowIndexing ? 'index' : 'noindex',

    // Perplexity
    'PerplexityBot': allowIndexing ? 'index' : 'noindex',

    // General robots
    'robots': allowIndexing
      ? 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'
      : 'noindex,nofollow',
  };
}

// Structured content hints for AI understanding
export function generateContentHints(content: {
  type: 'entity' | 'report' | 'analysis' | 'guide';
  primaryTopic: string;
  keyMetrics?: string[];
  methodology?: string;
  updateFrequency?: string;
}): Record<string, string> {
  return {
    'content:type': content.type,
    'content:primary-topic': content.primaryTopic,
    ...(content.keyMetrics && {
      'content:metrics': content.keyMetrics.join(','),
    }),
    ...(content.methodology && {
      'content:methodology': content.methodology,
    }),
    ...(content.updateFrequency && {
      'content:update-frequency': content.updateFrequency,
    }),
  };
}

// Generate comprehensive metadata for LLM discovery
export function enhanceMetadataForAI(baseMetadata: Metadata, additions: {
  contentType?: string;
  verificationLevel?: 'verified' | 'unverified';
  dataPoints?: number;
  lastVerified?: string;
} = {}): Metadata {
  const llmTags = generateLLMMetaTags();
  const aiCrawlers = generateAICrawlersMeta();

  const otherMetadata: Record<string, string> = {
    ...(baseMetadata.other as Record<string, string> || {}),
    ...llmTags,
    ...aiCrawlers,
  };

  if (additions.contentType) {
    otherMetadata['content:type'] = additions.contentType;
  }
  if (additions.verificationLevel) {
    otherMetadata['verification:level'] = additions.verificationLevel;
  }
  if (additions.dataPoints) {
    otherMetadata['data:points'] = additions.dataPoints.toString();
  }
  if (additions.lastVerified) {
    otherMetadata['verification:date'] = additions.lastVerified;
  }

  return {
    ...baseMetadata,
    other: otherMetadata,
  };
}

// Entity-specific AI hints
export function generateEntityAIHints(entity: {
  name: string;
  sector: string;
  accountability_score: number;
  violations_count?: number;
  last_audit?: string;
}): Record<string, string> {
  return {
    'entity:name': entity.name,
    'entity:sector': entity.sector,
    'entity:accountability-score': entity.accountability_score.toString(),
    'entity:score-range': '0-100',
    ...(entity.violations_count && {
      'entity:violations': entity.violations_count.toString(),
    }),
    ...(entity.last_audit && {
      'entity:last-audit': entity.last_audit,
    }),
    'data:verified': 'true',
    'data:source': 'regulatory-filings,field-intelligence',
  };
}

// Report-specific AI hints
export function generateReportAIHints(report: {
  title: string;
  category: string;
  entity_name: string;
  date: string;
  status: string;
}): Record<string, string> {
  return {
    'report:title': report.title,
    'report:category': report.category,
    'report:subject': report.entity_name,
    'report:date': report.date,
    'report:status': report.status,
    'content:type': 'field-intelligence',
    'verification:level': 'verified',
  };
}
