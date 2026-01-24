import { createClient } from '@/lib/supabase/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { formatDate } from '@/lib/utils/dates';

export const metadata: Metadata = {
  title: 'Asset Preservation - Strategic Mobility Portal',
  description: 'Confidential asset protection strategies and legal frameworks.',
};

export default async function AssetPreservationPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Fetch asset preservation reports user has access to
  const { data: reports } = await supabase
    .from('reports')
    .select(`
      *,
      entity:entities(name, slug, sector),
      author:user_profiles(display_name, role)
    `)
    .eq('category', 'asset_preservation')
    .or(`author_id.eq.${user?.id},classification.eq.restricted,classification.eq.unclassified`)
    .eq('status', 'approved')
    .order('created_at', { ascending: false })
    .limit(20);

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="mb-3">Asset Preservation</h1>
          <p className="lead">
            Strategic asset protection, wealth management, and legal preservation frameworks
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="row mb-5">
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h3 className="mb-0">{reports?.length || 0}</h3>
              <p className="text-muted mb-0">Total Reports</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h3 className="mb-0">
                {reports?.filter((r) => r.classification === 'confidential_internal')
                  .length || 0}
              </h3>
              <p className="text-muted mb-0">Confidential</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h3 className="mb-0">
                {reports?.filter((r) => r.classification === 'restricted').length ||
                  0}
              </h3>
              <p className="text-muted mb-0">Restricted</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h3 className="mb-0">
                {reports?.filter((r) => r.classification === 'unclassified')
                  .length || 0}
              </h3>
              <p className="text-muted mb-0">Public</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reports */}
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>Reports</h3>
            <Link href="/reports/submit" className="btn btn-primary">
              Submit New Report
            </Link>
          </div>

          {!reports || reports.length === 0 ? (
            <div className="alert alert-info">
              No asset preservation reports available. Be the first to contribute!
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
