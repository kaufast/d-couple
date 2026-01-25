import { Organization, WithContext, Article, BreadcrumbList, ItemList } from 'schema-dts';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://d-couple.com';

export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'dcouple.',
    alternateName: 'd-couple',
    url: baseUrl,
    logo: `${baseUrl}/assets/imgs/template/logo/favicon.svg`,
    description: 'Strategic research hub dedicated to monitoring centralized actors and fostering sovereign economic growth through regional alternatives.',
    sameAs: [
      // Add social media URLs when available
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'privacy@dcouple.com',
      contactType: 'Privacy and Data Protection',
    },
  };
}

export function generateEntitySchema(entity: {
  name: string;
  slug: string;
  description?: string;
  category?: string;
  accountability_score?: number;
  headquarters?: string;
}): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: entity.name,
    description: entity.description || `Strategic oversight and accountability data for ${entity.name}`,
    url: `${baseUrl}/directory/${entity.slug}`,
    ...(entity.headquarters && {
      address: {
        '@type': 'PostalAddress',
        addressLocality: entity.headquarters,
      },
    }),
    aggregateRating: entity.accountability_score
      ? {
          '@type': 'AggregateRating',
          ratingValue: entity.accountability_score,
          bestRating: 100,
          worstRating: 0,
          ratingCount: 1,
        }
      : undefined,
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
  category?: string;
  image?: string;
}): WithContext<Article> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `${baseUrl}/reports/${article.slug}`,
    author: {
      '@type': 'Organization',
      name: article.author || 'd-couple Research',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'dcouple.',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/assets/imgs/template/logo/favicon.svg`,
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    ...(article.image && { image: article.image }),
    ...(article.category && {
      articleSection: article.category,
    }),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

export function generateDirectoryListSchema(entities: Array<{
  name: string;
  slug: string;
  description?: string;
}>): WithContext<ItemList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: entities.map((entity, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${baseUrl}/directory/${entity.slug}`,
      name: entity.name,
      ...(entity.description && { description: entity.description }),
    })),
  };
}
