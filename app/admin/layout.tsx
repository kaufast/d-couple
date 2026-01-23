import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/page-login?redirect=/admin');
  }

  // Check if user is admin
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('role, display_name')
    .eq('id', user.id)
    .single();

  if (profile?.role !== 'admin') {
    return (
      <Layout headerStyle={1} footerStyle={1}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card border-danger">
                <div className="card-header bg-danger text-white">
                  <h4 className="mb-0">Access Denied</h4>
                </div>
                <div className="card-body">
                  <p>You must be an administrator to access this area.</p>
                  <Link href="/" className="btn btn-primary">
                    Go to Homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div className="admin-layout">
        {/* Admin Header */}
        <div className="bg-dark text-white py-3">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">
                <i className="bi bi-shield-lock me-2"></i>
                Admin Dashboard
              </h5>
              <span className="small">
                Logged in as: {profile.display_name || user.email}
              </span>
            </div>
          </div>
        </div>

        {/* Admin Navigation */}
        <div className="bg-light border-bottom">
          <div className="container">
            <nav className="nav nav-pills py-3">
              <Link href="/admin" className="nav-link">
                Overview
              </Link>
              <Link href="/admin/contact-submissions" className="nav-link">
                Contact Submissions
              </Link>
              <Link href="/directory" className="nav-link">
                Entities
              </Link>
              <Link href="/admin/reports" className="nav-link">
                Reports (Moderate)
              </Link>
              <Link href="/admin/users" className="nav-link">
                Users
              </Link>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="py-4">{children}</div>
      </div>
    </Layout>
  );
}
