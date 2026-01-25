import { createAdminClient } from '@/lib/supabase/server';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createAdminClient();

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://d-couple.com';

  // Fetch all entities
  const { data: entities } = await supabase
    .from('entities')
    .select('slug, updated_at')
    .order('updated_at', { ascending: false })
    .limit(10000); // Limit to 10k for sitemap

  const entityUrls: MetadataRoute.Sitemap = entities?.map((entity) => ({
    url: `${baseUrl}/directory/${entity.slug}`,
    lastModified: new Date(entity.updated_at),
    changeFrequency: 'weekly',
    priority: 0.8,
  })) || [];

  // Fetch all public approved reports
  const { data: reports } = await supabase
    .from('reports')
    .select('id, updated_at')
    .eq('status', 'approved')
    .eq('classification', 'unclassified')
    .order('updated_at', { ascending: false })
    .limit(5000);

  const reportUrls: MetadataRoute.Sitemap = reports?.map((report) => ({
    url: `${baseUrl}/reports/${report.id}`,
    lastModified: new Date(report.updated_at),
    changeFrequency: 'monthly',
    priority: 0.6,
  })) || [];

  // Static strategic pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/directory`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/governance`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/reports/submit`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/page-contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Strategic sector category pages
  const strategicSectors = [
    'capital-lab',
    'logistics-autonomy',
    'sovereign-tech',
    'jurisdictional-law',
    'field-intel',
    'work-trade-autonomy',
    'eu-funding',
    'privacy-tech',
    'compliance',
    'tech-sovereignty',
  ];

  const sectorUrls: MetadataRoute.Sitemap = strategicSectors.map((sector) => ({
    url: `${baseUrl}/category/${sector}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.75,
  }));

  return [
    ...staticPages,
    ...sectorUrls,
    ...entityUrls,
    ...reportUrls,
  ];
}
