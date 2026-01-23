import { createClient } from '@/lib/supabase/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { formatDate } from '@/lib/utils/dates';

export const metadata: Metadata = {
  title: 'Logistics & Relocation - Strategic Mobility Portal',
  description: 'Strategic relocation planning and jurisdictional analysis.',
};

export default async function RelocationPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Fetch relocation reports user has access to
  const { data: reports } = await supabase
    .from('reports')
    .select(`
      *,
      entity:entities(name, slug, sector),
      author:user_profiles(display_name, role)
    `)
    .eq('category', 'relocation')
    .or(`author_id.eq.${user?.id},classification.eq.restricted,classification.eq.unclassified`)
    .eq('status', 'approved')
    .order('created_at', { ascending: false })
    .limit(20);

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="mb-3">Logistics & Relocation</h1>
          <p className="lead">
            Strategic relocation planning, jurisdictional analysis, and operational transfers
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="row mb-5">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h3 className="mb-0">{reports?.length || 0}</h3>
              <p className="text-muted mb-0">Total Reports</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h3 className="mb-0">
                {new Set(reports?.map((r) => r.entity_id)).size || 0}
              </h3>
              <p className="text-muted mb-0">Entities Covered</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h3 className="mb-0">
                {reports?.reduce((sum, r) => sum + (r.tags?.length || 0), 0) || 0}
              </h3>
              <p className="text-muted mb-0">Total Tags</p>
            </div>
          </div>
        </div>
      </div>

      {/* Common Tags */}
      {reports && reports.length > 0 && (
        <div className="row mb-5">
          <div className="col-12">
            <h5>Common Topics</h5>
            <div className="d-flex flex-wrap gap-2">
              {Array.from(
                new Set(reports.flatMap((r) => r.tags || []))
              ).map((tag) => (
                <span key={tag} className="badge bg-secondary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Reports */}
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>Relocation Reports</h3>
            <Link href="/reports/submit" className="btn btn-primary">
              Submit New Report
            </Link>
          </div>

          {!reports || reports.length === 0 ? (
            <div className="alert alert-info">
              No relocation reports available. Be the first to contribute!
            </div>
          ) : (
            <div className="row">
              {reports.map((report) => (
                <div key={report.id} className="col-md-6 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-2">
                        <span
                          className={`badge ${
                            report.classification === 'confidential_internal'
                              ? 'bg-danger'
                              : report.classification === 'restricted'
                              ? 'bg-warning text-dark'
                              : 'bg-success'
                          }`}
                        >
                          {report.classification}
                        </span>
                        <span className="badge bg-light text-dark">
                          Impact: {report.impact_rating}
                        </span>
                      </div>

                      <h5 className="card-title">
                        <Link href={`/reports/${report.id}`}>{report.title}</Link>
                      </h5>

                      <p className="card-text text-muted small">
                        <strong>{report.entity?.name}</strong> •{' '}
                        {report.entity?.sector}
                      </p>

                      <p className="card-text">
                        {report.content.substring(0, 120)}...
                      </p>

                      {report.tags && report.tags.length > 0 && (
                        <div className="mb-2">
                          {report.tags.slice(0, 3).map((tag: string) => (
                            <span
                              key={tag}
                              className="badge bg-light text-dark me-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <small className="text-muted">
                          By {report.author?.display_name || 'Anonymous'}
                        </small>
                        <small className="text-muted">
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
  );
}
