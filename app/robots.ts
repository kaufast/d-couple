import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/portal/',
          '/api/',
          '/auth/callback',
          '/admin/',
          '/login',
          '/signup',
          '/single-*',
          '/archive-*',
          '/index-*',
          '/portfolio',
          '/portfolio-details',
          '/about-me',
          '/page-author',
          '/page-search-results',
          '/page-term',
        ],
      },
      {
        userAgent: ['ChatGPT-User', 'GPTBot', 'OAI-SearchBot'],
        allow: '/',
        disallow: ['/portal/', '/api/', '/auth/', '/admin/', '/login', '/signup'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/portal/', '/api/', '/auth/', '/admin/', '/login', '/signup'],
      },
      {
        userAgent: ['Claude-Web', 'anthropic-ai'],
        allow: '/',
        disallow: ['/portal/', '/api/', '/auth/', '/admin/', '/login', '/signup'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/portal/', '/api/', '/auth/', '/admin/', '/login', '/signup'],
      },
      {
        userAgent: ['CCBot', 'cohere-ai', 'facebookbot'],
        allow: '/',
        disallow: ['/portal/', '/api/', '/auth/', '/admin/', '/login', '/signup'],
      },
    ],
    sitemap: 'https://www.d-couple.com/sitemap.xml',
  };
}
