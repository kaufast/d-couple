import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { ReportSubmissionForm } from '@/components/reports/ReportSubmissionForm';
import Layout from '@/components/layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Submit Report - Strategic Accountability Hub',
  description: 'Submit strategic governance, compliance, or policy reports.',
};

export default async function SubmitReportPage({
  searchParams,
}: {
  searchParams: { entity_id?: string };
}) {
  const supabase = await createClient();

  // Check if user is authenticated
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/login?redirect=/reports/submit');
  }

  const entityId = searchParams.entity_id;

  if (!entityId) {
    redirect('/directory');
  }

  // Fetch entity details
  const { data: entity } = await supabase
    .from('entities')
    .select('name, slug')
    .eq('id', entityId)
    .single();

  if (!entity) {
    redirect('/directory');
  }

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-12">
            <h1 className="mb-2">Submit Strategic Report</h1>
            <p className="lead">
              Submitting report for <strong>{entity.name}</strong>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <ReportSubmissionForm entityId={entityId} />
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Submission Guidelines</h5>
                <ul className="small">
                  <li>Reports must be factual and well-sourced</li>
                  <li>Avoid speculation or unverified claims</li>
                  <li>Use professional, objective language</li>
                  <li>Provide context and analysis, not just data</li>
                  <li>Include credible sources when possible</li>
                </ul>

                <h6 className="mt-3">Classification Levels</h6>
                <ul className="small">
                  <li>
                    <strong>Public:</strong> Visible to all users
                  </li>
                  <li>
                    <strong>Restricted:</strong> Verified analysts only
                  </li>
                  <li>
                    <strong>Confidential:</strong> Private (you + admins)
                  </li>
                </ul>

                <h6 className="mt-3">Review Process</h6>
                <p className="small mb-0">
                  Reports from contributors are reviewed before publication.
                  Verified analysts' reports are published immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
