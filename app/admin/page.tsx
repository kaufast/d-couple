import { createClient } from '@/lib/supabase/server';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Admin Dashboard - Strategic Accountability Hub',
  description: 'Administrative dashboard for platform management.',
};

export default async function AdminDashboard() {
  const supabase = await createClient();

  // Fetch statistics
  const [
    { count: totalEntities },
    { count: totalReports },
    { count: pendingReports },
    { count: totalUsers },
    { count: newContacts },
  ] = await Promise.all([
    supabase.from('entities').select('*', { count: 'exact', head: true }),
    supabase.from('reports').select('*', { count: 'exact', head: true }),
    supabase
      .from('reports')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'under_review'),
    supabase.from('user_profiles').select('*', { count: 'exact', head: true }),
    supabase
      .from('contact_submissions')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'new'),
  ]);

  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="mb-3">Admin Dashboard</h1>
          <p className="lead">Platform overview and management tools</p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="row mb-5">
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h2 className="display-4 mb-2">{totalEntities || 0}</h2>
              <p className="text-muted mb-0">Total Entities</p>
              <Link href="/directory" className="btn btn-sm btn-primary mt-2">
                View All
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h2 className="display-4 mb-2">{totalReports || 0}</h2>
              <p className="text-muted mb-0">Total Reports</p>
              {pendingReports && pendingReports > 0 && (
                <span className="badge bg-warning mt-2">
                  {pendingReports} pending
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h2 className="display-4 mb-2">{totalUsers || 0}</h2>
              <p className="text-muted mb-0">Total Users</p>
              <Link href="/admin/users" className="btn btn-sm btn-primary mt-2">
                Manage
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center border-warning">
            <div className="card-body">
              <h2 className="display-4 mb-2">{newContacts || 0}</h2>
              <p className="text-muted mb-0">New Contacts</p>
              <Link
                href="/admin/contact-submissions"
                className="btn btn-sm btn-warning mt-2"
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="row">
        <div className="col-12">
          <h3 className="mb-3">Quick Actions</h3>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-envelope me-2"></i>
                Contact Submissions
              </h5>
              <p className="card-text">
                Review and respond to contact form submissions.
              </p>
              <Link
                href="/admin/contact-submissions"
                className="btn btn-primary w-100"
              >
                Manage Contacts
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-file-text me-2"></i>
                Moderate Reports
              </h5>
              <p className="card-text">
                Approve, reject, or flag user-submitted reports.
              </p>
              <Link href="/admin/reports" className="btn btn-primary w-100">
                Moderate Reports
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-people me-2"></i>
                User Management
              </h5>
              <p className="card-text">
                Verify users, change roles, and manage accounts.
              </p>
              <Link href="/admin/users" className="btn btn-primary w-100">
                Manage Users
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
