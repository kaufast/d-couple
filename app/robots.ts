import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://strategic-accountability-hub.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/portal/', '/api/', '/auth/callback'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
