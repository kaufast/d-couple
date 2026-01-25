import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import ReportQueueItem from './ReportQueueItem';

export const metadata: Metadata = {
  title: 'Field Intel Review Queue - Admin',
  description: 'Review and moderate Field Intel submissions from associates.',
};

export default async function ReportsQueuePage() {
  const supabase = await createClient();

  // Check if user is authenticated and is admin
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Fetch user profile to check admin role
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('role')
    .eq('id', user.id)
    .single();

  if (profile?.role !== 'admin') {
    redirect('/');
  }

  // Fetch pending reports ordered by urgency and date
  const { data: reports, error } = await supabase
    .from('reports')
    .select(`
      *,
      user_profiles:user_id (
        email,
        display_name
      )
    `)
    .in('status', ['draft', 'under_review'])
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching reports:', error);
  }

  // Get statistics
  const { count: underReviewCount } = await supabase
    .from('reports')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'under_review');

  const { count: draftCount } = await supabase
    .from('reports')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'draft');

  const { count: verifiedCount } = await supabase
    .from('reports')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'verified');

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="ds-6 fw-bold mb-2">Field Intel Review Queue</h1>
              <p className="fs-7 text-700">
                Associate Review Dashboard - Chief Moderator Command Center
              </p>
            </div>
            <div className="d-flex gap-2">
              <span className="badge bg-warning text-dark px-3 py-2 fs-8">
                {underReviewCount || 0} Under Review
              </span>
              <span className="badge bg-light text-dark border border-300 px-3 py-2 fs-8">
                {draftCount || 0} Drafts
              </span>
              <span className="badge bg-dark text-white px-3 py-2 fs-8">
                {verifiedCount || 0} Verified
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Filter Tabs */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card border-300 bg-card p-3">
            <div className="d-flex gap-3 align-items-center">
              <span className="fs-7 fw-bold text-dark">Filter:</span>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-sm btn-dark">
                  All Pending
                </button>
                <button type="button" className="btn btn-sm btn-outline-dark">
                  Under Review
                </button>
                <button type="button" className="btn btn-sm btn-outline-dark">
                  Drafts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Overview */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card border-dark p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="fs-8 text-600 mb-1">Average Review Time</p>
                <p className="fs-5 fw-bold text-dark mb-0">3.2 min</p>
              </div>
              <div className="text-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-dark opacity-25" viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-dark p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="fs-8 text-600 mb-1">Approval Rate</p>
                <p className="fs-5 fw-bold text-dark mb-0">87%</p>
              </div>
              <div className="text-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-dark opacity-25" viewBox="0 0 16 16">
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-dark p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="fs-8 text-600 mb-1">Today's Reviews</p>
                <p className="fs-5 fw-bold text-dark mb-0">12</p>
              </div>
              <div className="text-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-dark opacity-25" viewBox="0 0 16 16">
                  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reports Queue */}
      <div className="row">
        <div className="col-12">
          <div className="card border-300 bg-card">
            <div className="card-header bg-dark text-white px-4 py-3">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <span className="fs-7 fw-bold">Date Submitted</span>
                </div>
                <div className="col-md-2">
                  <span className="fs-7 fw-bold">Contributor</span>
                </div>
                <div className="col-md-3">
                  <span className="fs-7 fw-bold">Subject Actor</span>
                </div>
                <div className="col-md-2">
                  <span className="fs-7 fw-bold">Status</span>
                </div>
                <div className="col-md-2 text-end">
                  <span className="fs-7 fw-bold">Actions</span>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              {reports && reports.length > 0 ? (
                reports.map((report) => (
                  <ReportQueueItem key={report.id} report={report} />
                ))
              ) : (
                <div className="p-5 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="text-600 mb-3" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                  </svg>
                  <p className="fs-6 text-700 mb-0">No pending Field Intel submissions</p>
                  <p className="fs-8 text-600">All reports have been reviewed</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* OPSEC Reminder */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="alert alert-info border-dark">
            <div className="d-flex gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
              </svg>
              <div>
                <p className="fs-7 fw-bold mb-1">OPSEC Reminder</p>
                <p className="fs-8 text-700 mb-0">
                  Review in a secure environment. Check PII before publishing. Report suspicious patterns to <a href="mailto:privacy@dcouple.com" className="text-dark text-decoration-underline">privacy@dcouple.com</a> within 2 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
