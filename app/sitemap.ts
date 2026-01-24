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

  return [
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
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    ...entityUrls,
    ...reportUrls,
  ];
}
