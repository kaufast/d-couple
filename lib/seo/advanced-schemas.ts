import { WithContext, WebPage, WebSite, SearchAction, FAQPage, HowTo, Question, Review, AggregateRating } from 'schema-dts';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://d-couple.com';

// WebSite Schema with Sitelinks SearchBox for Google
export function generateWebSiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'dcouple.',
    alternateName: 'd-couple',
    url: baseUrl,
    description: 'Strategic research hub dedicated to monitoring centralized actors and fostering sovereign economic growth through regional alternatives.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/directory?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    } as SearchAction,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: 'dcouple.',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/assets/imgs/template/logo/favicon.svg`,
      },
    },
  };
}

// WebPage Schema with Speakable content for voice search
export function generateWebPageSchema(page: {
  name: string;
  url: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  speakableSelectors?: string[];
}): WithContext<WebPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.name,
    url: `${baseUrl}${page.url}`,
    description: page.description,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      url: baseUrl,
    },
    ...(page.datePublished && { datePublished: page.datePublished }),
    ...(page.dateModified && { dateModified: page.dateModified }),
    ...(page.speakableSelectors && {
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: page.speakableSelectors,
      },
    }),
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl,
        },
      ],
    },
  };
}

// FAQ Schema for governance/methodology pages
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// HowTo Schema for strategic guides
export function generateHowToSchema(guide: {
  name: string;
  description: string;
  totalTime?: string;
  steps: Array<{ name: string; text: string; url?: string }>;
}): WithContext<HowTo> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guide.name,
    description: guide.description,
    ...(guide.totalTime && { totalTime: guide.totalTime }),
    step: guide.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: `${baseUrl}${step.url}` }),
    })),
  };
}

// Dataset Schema for the entity directory (for Google Dataset Search)
export function generateDatasetSchema(): WithContext<any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'dcouple. Oversight Directory',
    description: 'Comprehensive database of 10,000+ centralized actors with accountability scores, compliance violations, labor practices, and market dominance metrics. Updated daily with field intelligence from verified associates.',
    url: `${baseUrl}/directory`,
    keywords: [
      'corporate accountability',
      'governance scores',
      'compliance violations',
      'GDPR enforcement',
      'labor practices',
      'market dominance',
      'big tech oversight',
      'institutional data',
    ],
    license: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    creator: {
      '@type': 'Organization',
      name: 'dcouple.',
      url: baseUrl,
    },
    distribution: {
      '@type': 'DataDownload',
      encodingFormat: 'application/json',
      contentUrl: `${baseUrl}/api/entities`,
    },
    temporalCoverage: '2025/..',
    spatialCoverage: {
      '@type': 'Place',
      name: 'Global',
    },
    variableMeasured: [
      'Accountability Score',
      'Regulatory Compliance',
      'Labor Practices',
      'Market Dominance',
      'Data Sovereignty',
    ],
  };
}

// Review/Rating Schema for entity assessments
export function generateReviewSchema(entity: {
  name: string;
  slug: string;
  accountability_score: number;
  review_text: string;
  date: string;
}): WithContext<Review> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Organization',
      name: entity.name,
      url: `${baseUrl}/directory/${entity.slug}`,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: entity.accountability_score,
      bestRating: 100,
      worstRating: 0,
    },
    author: {
      '@type': 'Organization',
      name: 'd-couple Research',
    },
    reviewBody: entity.review_text,
    datePublished: entity.date,
  };
}

// CollectionPage Schema for category/sector pages
export function generateCollectionPageSchema(collection: {
  name: string;
  description: string;
  url: string;
  itemCount: number;
}): WithContext<any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: collection.name,
    description: collection.description,
    url: `${baseUrl}${collection.url}`,
    about: {
      '@type': 'Thing',
      name: collection.name,
    },
    numberOfItems: collection.itemCount,
    inLanguage: 'en-US',
  };
}

// E-E-A-T Signals for Google Quality Guidelines
export function generateAuthorSchema(author: {
  name: string;
  description: string;
  expertise?: string[];
}): WithContext<any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    description: author.description,
    ...(author.expertise && {
      knowsAbout: author.expertise,
    }),
    memberOf: {
      '@type': 'Organization',
      name: 'dcouple.',
      url: baseUrl,
    },
  };
}
