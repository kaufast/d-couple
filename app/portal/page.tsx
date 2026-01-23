import { createClient } from '@/lib/supabase/server';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Strategic Mobility Portal - Strategic Accountability Hub',
  description: 'Secure portal for asset preservation and relocation strategy.',
};

export default async function PortalPage() {
  const supabase = await createClient();

  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Fetch user's confidential reports
  const { data: confidentialReports } = await supabase
    .from('reports')
    .select(`
      *,
      entity:entities(name, slug)
    `)
    .eq('author_id', user?.id)
    .eq('classification', 'confidential_internal')
    .order('created_at', { ascending: false })
    .limit(5);

  // Fetch user's restricted reports
  const { data: restrictedReports } = await supabase
    .from('reports')
    .select(`
      *,
      entity:entities(name, slug)
    `)
    .eq('classification', 'restricted')
    .eq('status', 'approved')
    .order('created_at', { ascending: false })
    .limit(5);

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="mb-3">Strategic Mobility Portal</h1>
          <p className="lead">
            Secure workspace for asset preservation and relocation strategy
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="row mb-5">
        <div className="col-md-4">
          <div className="card h-100 border-primary">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-shield-lock text-primary me-2"></i>
                Asset Preservation
              </h5>
              <p className="card-text">
                Access confidential asset protection strategies and legal frameworks
              </p>
              <Link
                href="/portal/asset-preservation"
                className="btn btn-primary w-100"
              >
                Access
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-info">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-geo-alt text-info me-2"></i>
                Logistics & Relocation
              </h5>
              <p className="card-text">
                Strategic relocation planning and jurisdictional analysis
              </p>
              <Link href="/portal/relocation" className="btn btn-info w-100">
                Access
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-success">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-file-earmark-lock text-success me-2"></i>
                Restricted Reports
              </h5>
              <p className="card-text">
                View verified analyst reports with restricted access
              </p>
              <Link href="#restricted" className="btn btn-success w-100">
                View Reports
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Confidential Reports */}
      {confidentialReports && confidentialReports.length > 0 && (
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="mb-3">Your Confidential Reports</h3>
            <div className="list-group">
              {confidentialReports.map((report) => (
                <Link
                  key={report.id}
                  href={`/reports/${report.id}`}
                  className="list-group-item list-group-item-action"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">{report.title}</h6>
                    <small className="badge bg-danger">Confidential</small>
                  </div>
                  <p className="mb-1 text-muted">
                    <small>{report.entity?.name}</small>
                  </p>
                  <small className="text-muted">
                    {report.category.replace(/_/g, ' ')}
                  </small>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Recent Restricted Reports */}
      <div className="row" id="restricted">
        <div className="col-12">
          <h3 className="mb-3">Recent Restricted Reports</h3>
          {!restrictedReports || restrictedReports.length === 0 ? (
            <div className="alert alert-info">
              No restricted reports available at this time.
            </div>
          ) : (
            <div className="row">
              {restrictedReports.map((report) => (
                <div key={report.id} className="col-md-6 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="badge bg-warning text-dark">
                          Restricted
                        </span>
                        <span className="badge bg-light text-dark">
                          Impact: {report.impact_rating}
                        </span>
                      </div>
                      <h6 className="card-title">
                        <Link href={`/reports/${report.id}`}>{report.title}</Link>
                      </h6>
                      <p className="card-text text-muted small">
                        {report.entity?.name} •{' '}
                        {report.category.replace(/_/g, ' ')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Security Notice */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="alert alert-warning">
            <h6 className="alert-heading">
              <i className="bi bi-exclamation-triangle me-2"></i>
              Security Notice
            </h6>
            <p className="mb-0">
              All activity in the Strategic Mobility Portal is logged for security
              purposes. Confidential data should be handled according to your
              organization's data protection policies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
