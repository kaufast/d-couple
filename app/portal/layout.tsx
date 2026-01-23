import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Layout from '@/components/layout/Layout';

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/login?redirect=/portal');
  }

  // Check if user has verified role
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('role, is_verified, display_name')
    .eq('id', user.id)
    .single();

  if (!profile?.is_verified) {
    return (
      <Layout headerStyle={1} footerStyle={1}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card border-warning">
                <div className="card-header bg-warning text-dark">
                  <h4 className="mb-0">Verification Required</h4>
                </div>
                <div className="card-body">
                  <p>
                    Access to the Strategic Mobility Portal requires account
                    verification.
                  </p>
                  <p>
                    To request verification, please contact an administrator with:
                  </p>
                  <ul>
                    <li>Your institutional affiliation</li>
                    <li>Areas of expertise</li>
                    <li>Reason for portal access</li>
                  </ul>
                  <p className="mb-0">
                    <strong>Email:</strong> admin@strategic-accountability-hub.com
                  </p>
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
      <div className="portal-secure-layout">
        {/* Security Banner */}
        <div className="bg-danger text-white py-2">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <span className="fw-bold">
                <i className="bi bi-shield-lock-fill me-2"></i>
                Secure Session Active
              </span>
              <span className="small">
                Logged in as: {profile.display_name || user.email}
              </span>
            </div>
          </div>
        </div>

        {/* Portal Navigation */}
        <div className="bg-light border-bottom">
          <div className="container">
            <nav className="nav nav-pills py-3">
              <a href="/portal" className="nav-link">
                Overview
              </a>
              <a href="/portal/asset-preservation" className="nav-link">
                Asset Preservation
              </a>
              <a href="/portal/relocation" className="nav-link">
                Logistics & Relocation
              </a>
            </nav>
          </div>
        </div>

        {/* Content */}
        {children}
      </div>
    </Layout>
  );
}
