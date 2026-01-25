import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://d-couple.com';
const siteName = 'dcouple.';

export function generateEntityMetadata(entity: {
  name: string;
  slug: string;
  description?: string;
  category?: string;
  accountability_score?: number;
  headquarters?: string;
}): Metadata {
  const title = `${entity.name} - Accountability Oversight | dcouple.`;
  const description =
    entity.description ||
    `Strategic oversight data for ${entity.name}. Accountability score: ${entity.accountability_score || 'N/A'}/100. Track compliance violations, labor practices, and market dominance.`;

  const url = `${baseUrl}/directory/${entity.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: 'profile',
      images: [
        {
          url: `${baseUrl}/api/og?entity=${encodeURIComponent(entity.name)}&score=${entity.accountability_score || 0}`,
          width: 1200,
          height: 630,
          alt: `${entity.name} Accountability Overview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/api/og?entity=${encodeURIComponent(entity.name)}&score=${entity.accountability_score || 0}`],
    },
    alternates: {
      canonical: url,
    },
    keywords: [
      entity.name,
      'accountability score',
      'corporate oversight',
      'compliance tracking',
      entity.category || 'big tech',
      'GDPR compliance',
      'labor practices',
      'strategic intelligence',
    ],
  };
}

export function generateReportMetadata(report: {
  title: string;
  description?: string;
  id: string;
  entity_name?: string;
  category?: string;
  created_at: string;
}): Metadata {
  const title = `${report.title} | Field Intel - dcouple.`;
  const description =
    report.description ||
    `Field intelligence report on ${report.entity_name || 'oversight activity'}. Strategic analysis and verified data from the dcouple. research network.`;

  const url = `${baseUrl}/reports/${report.id}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: 'article',
      publishedTime: report.created_at,
      authors: ['d-couple Research'],
      images: [
        {
          url: `${baseUrl}/api/og?report=${encodeURIComponent(report.title)}`,
          width: 1200,
          height: 630,
          alt: report.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/api/og?report=${encodeURIComponent(report.title)}`],
    },
    alternates: {
      canonical: url,
    },
    keywords: [
      report.entity_name || '',
      'field intelligence',
      'oversight report',
      report.category || '',
      'strategic research',
      'accountability',
      'compliance',
    ].filter(Boolean),
  };
}

export function generateCategoryMetadata(category: {
  name: string;
  slug: string;
  description?: string;
  count?: number;
}): Metadata {
  const title = `${category.name} - Strategic Intelligence | dcouple.`;
  const description =
    category.description ||
    `${category.count || 0} entities and reports tracked in ${category.name}. Strategic oversight, compliance tracking, and regional alternatives.`;

  const url = `${baseUrl}/category/${category.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/api/og?category=${encodeURIComponent(category.name)}`,
          width: 1200,
          height: 630,
          alt: `${category.name} Intelligence Feed`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/api/og?category=${encodeURIComponent(category.name)}`],
    },
    alternates: {
      canonical: url,
    },
    keywords: [
      category.name,
      'strategic sector',
      'intelligence feed',
      'oversight directory',
      'accountability tracking',
    ],
  };
}

export function generateDirectoryMetadata(): Metadata {
  const title = 'Oversight Directory - 10,000+ Entities Tracked | dcouple.';
  const description =
    'Comprehensive directory of centralized actors with accountability scores, compliance violations, and regional alternatives. Strategic intelligence for sovereign growth.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/directory`,
      siteName,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/api/og?page=directory`,
          width: 1200,
          height: 630,
          alt: 'dcouple. Oversight Directory',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/api/og?page=directory`],
    },
    alternates: {
      canonical: `${baseUrl}/directory`,
    },
    keywords: [
      'oversight directory',
      'accountability scores',
      'corporate governance',
      'compliance tracking',
      'GDPR violations',
      'big tech oversight',
      'strategic intelligence',
      'entity directory',
    ],
  };
}
