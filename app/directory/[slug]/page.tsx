import { createClient, createAdminClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { formatDate } from '@/lib/utils/dates';
import Layout from '@/components/layout/Layout';

// Revalidate every hour (ISR)
export const revalidate = 3600;

// Generate static params for top entities
export async function generateStaticParams() {
  const supabase = createAdminClient();

  // Pre-render top 100 entities by governance score
  const { data: entities } = await supabase
    .from('entities')
    .select('slug')
    .order('governance_score', { ascending: false })
    .limit(100);

  return entities?.map((entity) => ({
    slug: entity.slug,
  })) || [];
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const supabase = await createClient();

  const { data: entity } = await supabase
    .from('entities')
    .select('name, sector, governance_score, description')
    .eq('slug', params.slug)
    .single();

  if (!entity) {
    return {
      title: 'Entity Not Found',
    };
  }

  return {
    title: `${entity.name} - Strategic Accountability Hub`,
    description: entity.description || `Governance oversight and compliance reports for ${entity.name} in the ${entity.sector || 'various'} sector. Governance Score: ${entity.governance_score}/100.`,
    openGraph: {
      title: entity.name,
      description: `${entity.sector || 'Entity'} - Governance Score: ${entity.governance_score}`,
      type: 'website',
    },
  };
}

export default async function EntityPage({
  params,
}: {
  params: { slug: string };
}) {
  const supabase = await createClient();

  // Fetch entity data
  const { data: entity } = await supabase
    .from('entities')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (!entity) {
    notFound();
  }

  // Fetch approved public reports for this entity
  const { data: reports } = await supabase
    .from('reports')
    .select(`
      *,
      author:user_profiles(display_name, role)
    `)
    .eq('entity_id', entity.id)
    .eq('status', 'approved')
    .eq('classification', 'unclassified')
    .order('impact_rating', { ascending: false })
    .limit(20);

  // Calculate statistics
  const reportsByCategory = reports?.reduce(
    (acc, report) => {
      acc[report.category] = (acc[report.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  ) || {};

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div className="container py-5">
        {/* Entity Header */}
        <div className="row mb-4">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/directory">Directory</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {entity.name}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <h1 className="mb-2">{entity.name}</h1>
                {entity.sector && (
                  <span className="badge bg-secondary">{entity.sector}</span>
                )}
                {entity.is_verified && (
                  <span className="badge bg-success ms-2">Verified</span>
                )}
              </div>
            </div>

            {entity.description && (
              <p className="lead">{entity.description}</p>
            )}

            {entity.website_url && (
              <p>
                <strong>Website:</strong>{' '}
                <a
                  href={entity.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {entity.website_url}
                </a>
              </p>
            )}
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Governance Score</h5>
                <div className="display-4 mb-3">{entity.governance_score}/100</div>
                <div className="progress" style={{ height: '10px' }}>
                  <div
                    className={`progress-bar ${
                      entity.governance_score >= 75
                        ? 'bg-success'
                        : entity.governance_score >= 50
                        ? 'bg-warning'
                        : 'bg-danger'
                    }`}
                    role="progressbar"
                    style={{ width: `${entity.governance_score}%` }}
                    aria-valuenow={entity.governance_score}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <small className="text-muted d-block mt-2">
                  Last updated: {formatDate(entity.updated_at)}
                </small>
              </div>
            </div>

            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">Report Statistics</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <strong>Total Reports:</strong> {reports?.length || 0}
                  </li>
                  {Object.entries(reportsByCategory).map(([category, count]) => (
                    <li key={category}>
                      <strong className="text-capitalize">
                        {category.replace(/_/g, ' ')}:
                      </strong>{' '}
                      {count as number}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Reports Section */}
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2>Strategic Reports</h2>
              <Link
                href={`/reports/submit?entity_id=${entity.id}`}
                className="btn btn-primary"
              >
                Submit Report
              </Link>
            </div>

            {!reports || reports.length === 0 ? (
              <div className="alert alert-info">
                No public reports available for this entity yet.{' '}
                <Link href={`/reports/submit?entity_id=${entity.id}`}>
                  Be the first to contribute!
                </Link>
              </div>
            ) : (
              <div className="row">
                {reports.map((report) => (
                  <div key={report.id} className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <span
                            className={`badge ${
                              report.category === 'compliance'
                                ? 'bg-primary'
                                : report.category === 'policy_strategy'
                                ? 'bg-info'
                                : report.category === 'asset_preservation'
                                ? 'bg-warning'
                                : 'bg-secondary'
                            }`}
                          >
                            {report.category.replace(/_/g, ' ')}
                          </span>
                          <span className="badge bg-light text-dark">
                            Impact: {report.impact_rating}
                          </span>
                        </div>

                        <h5 className="card-title">
                          <Link
                            href={`/reports/${report.id}`}
                            className="text-decoration-none"
                          >
                            {report.title}
                          </Link>
                        </h5>

                        <p className="card-text text-muted">
                          {report.content.substring(0, 150)}...
                        </p>

                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <small className="text-muted">
                            By {report.author?.display_name || 'Anonymous'} •{' '}
                            {formatDate(report.created_at)}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
