import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { formatDateTime } from '@/lib/utils/dates';
import { VoteButtons } from '@/components/reports/VoteButtons';
import { getUserVote } from '@/app/actions/votes';
import Layout from '@/components/layout/Layout';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const supabase = await createClient();

  const { data: report } = await supabase
    .from('reports')
    .select('title, category')
    .eq('id', params.id)
    .single();

  if (!report) {
    return {
      title: 'Report Not Found',
    };
  }

  return {
    title: `${report.title} - Strategic Accountability Hub`,
    description: `${report.category.replace(/_/g, ' ')} report - Strategic governance and compliance oversight`,
  };
}

export default async function ReportPage({ params }: { params: { id: string } }) {
  const supabase = await createClient();

  // Fetch report with related data
  const { data: report } = await supabase
    .from('reports')
    .select(`
      *,
      author:user_profiles(id, display_name, role, is_verified),
      entity:entities(id, slug, name, sector)
    `)
    .eq('id', params.id)
    .single();

  if (!report) {
    notFound();
  }

  // Get current user's vote
  const userVote = await getUserVote(params.id);

  // Get current user for ownership check
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isAuthor = user && user.id === report.author_id;

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div className="container py-5">
        {/* Breadcrumb */}
        <div className="row mb-4">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/directory">Directory</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href={`/directory/${report.entity?.slug}`}>
                    {report.entity?.name}
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Report
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            {/* Report Header */}
            <div className="mb-4">
              <div className="d-flex gap-2 mb-3">
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

                <span
                  className={`badge ${
                    report.classification === 'unclassified'
                      ? 'bg-success'
                      : report.classification === 'restricted'
                      ? 'bg-warning'
                      : 'bg-danger'
                  }`}
                >
                  {report.classification}
                </span>

                <span
                  className={`badge ${
                    report.status === 'approved'
                      ? 'bg-success'
                      : report.status === 'under_review'
                      ? 'bg-warning'
                      : 'bg-danger'
                  }`}
                >
                  {report.status.replace(/_/g, ' ')}
                </span>
              </div>

              <h1 className="mb-3">{report.title}</h1>

              <div className="d-flex align-items-center gap-3 text-muted mb-3">
                <span>
                  By{' '}
                  <strong>{report.author?.display_name || 'Anonymous'}</strong>
                  {report.author?.is_verified && (
                    <i
                      className="bi bi-patch-check-fill text-success ms-1"
                      title="Verified"
                    ></i>
                  )}
                </span>
                <span>•</span>
                <span>{formatDateTime(report.created_at)}</span>
                {report.updated_at !== report.created_at && (
                  <>
                    <span>•</span>
                    <span className="small">
                      Updated {formatDateTime(report.updated_at)}
                    </span>
                  </>
                )}
              </div>

              {/* Voting */}
              <div className="mb-4">
                <VoteButtons
                  reportId={report.id}
                  initialScore={report.impact_rating}
                  initialUserVote={userVote}
                />
              </div>
            </div>

            {/* Report Content */}
            <div className="card mb-4">
              <div className="card-body">
                <div
                  className="report-content"
                  dangerouslySetInnerHTML={{ __html: report.content }}
                />
              </div>
            </div>

            {/* Sources */}
            {report.sources && report.sources.length > 0 && (
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Sources</h5>
                  <ul>
                    {report.sources.map((source: string, index: number) => (
                      <li key={index}>
                        <a
                          href={source}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {source}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Tags */}
            {report.tags && report.tags.length > 0 && (
              <div className="mb-4">
                <h6>Tags:</h6>
                <div className="d-flex flex-wrap gap-2">
                  {report.tags.map((tag: string, index: number) => (
                    <span key={index} className="badge bg-light text-dark">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Actions */}
            {isAuthor && report.status === 'under_review' && (
              <div className="alert alert-warning">
                <h6>Your report is under review</h6>
                <p className="mb-0">
                  It will be published once approved by an administrator.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Related Entity</h5>
                <h6>
                  <Link href={`/directory/${report.entity?.slug}`}>
                    {report.entity?.name}
                  </Link>
                </h6>
                {report.entity?.sector && (
                  <p className="mb-0 text-muted">{report.entity.sector}</p>
                )}
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Report Details</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <strong>Category:</strong>{' '}
                    <span className="text-capitalize">
                      {report.category.replace(/_/g, ' ')}
                    </span>
                  </li>
                  <li>
                    <strong>Classification:</strong>{' '}
                    <span className="text-capitalize">{report.classification}</span>
                  </li>
                  <li>
                    <strong>Impact Rating:</strong> {report.impact_rating}
                  </li>
                  <li>
                    <strong>Status:</strong>{' '}
                    <span className="text-capitalize">
                      {report.status.replace(/_/g, ' ')}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
