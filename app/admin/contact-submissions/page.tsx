import { createClient } from '@/lib/supabase/server';
import type { Metadata } from 'next';
import { SubmissionRow } from './SubmissionRow';

export const metadata: Metadata = {
  title: 'Contact Submissions - Admin Dashboard',
  description: 'Manage contact form submissions.',
};

type FilterStatus = 'all' | 'new' | 'in_progress' | 'resolved' | 'spam';

interface PageProps {
  searchParams: Promise<{ status?: FilterStatus }>;
}

export default async function ContactSubmissionsPage({ searchParams }: PageProps) {
  const supabase = await createClient();
  const params = await searchParams;
  const filterStatus = params.status || 'all';

  // Build query
  let query = supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false });

  if (filterStatus !== 'all') {
    query = query.eq('status', filterStatus);
  }

  const { data: submissions, error } = await query;

  if (error) {
    console.error('Error fetching submissions:', error);
  }

  // Get counts for each status
  const { count: newCount } = await supabase
    .from('contact_submissions')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'new');

  const { count: inProgressCount } = await supabase
    .from('contact_submissions')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'in_progress');

  const { count: resolvedCount } = await supabase
    .from('contact_submissions')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'resolved');

  const { count: spamCount } = await supabase
    .from('contact_submissions')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'spam');

  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="mb-3">Contact Submissions</h1>
          <p className="lead">Review and respond to contact form submissions</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="row mb-4">
        <div className="col-12">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className={`nav-link ${filterStatus === 'all' ? 'active' : ''}`}
                href="/admin/contact-submissions"
              >
                All ({(newCount || 0) + (inProgressCount || 0) + (resolvedCount || 0) + (spamCount || 0)})
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${filterStatus === 'new' ? 'active' : ''}`}
                href="/admin/contact-submissions?status=new"
              >
                New{' '}
                {newCount && newCount > 0 && (
                  <span className="badge bg-warning text-dark">{newCount}</span>
                )}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${filterStatus === 'in_progress' ? 'active' : ''}`}
                href="/admin/contact-submissions?status=in_progress"
              >
                In Progress {inProgressCount && inProgressCount > 0 && `(${inProgressCount})`}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${filterStatus === 'resolved' ? 'active' : ''}`}
                href="/admin/contact-submissions?status=resolved"
              >
                Resolved {resolvedCount && resolvedCount > 0 && `(${resolvedCount})`}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${filterStatus === 'spam' ? 'active' : ''}`}
                href="/admin/contact-submissions?status=spam"
              >
                Spam {spamCount && spamCount > 0 && `(${spamCount})`}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Submissions Table */}
      <div className="row">
        <div className="col-12">
          {!submissions || submissions.length === 0 ? (
            <div className="alert alert-info">
              No submissions found{filterStatus !== 'all' && ` with status "${filterStatus}"`}.
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Attachments</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((submission) => (
                    <SubmissionRow key={submission.id} submission={submission} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
