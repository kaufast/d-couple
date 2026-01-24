import Layout from '@/components/layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Ethics & Data Handling Protocol - dcouple.',
  description: 'Associate data handling protocol and research ethics framework for counter-actor intelligence gathering.',
};

export default function GovernancePage() {
  return (
    <Layout headerStyle={4} footerStyle={4}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Last Updated Timestamp */}
            <div className="mb-4 pb-3 border-bottom border-300">
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-dark text-white px-3 py-2 rounded-pill fs-8">
                  Last Updated: January 24, 2026
                </span>
                <span className="badge bg-light text-dark px-3 py-2 rounded-pill fs-8 border border-300">
                  Required Reading: All Contributors
                </span>
              </div>
            </div>

            <h1 className="ds-6 fw-bold mb-4">Research Ethics & Data Handling</h1>
            <p className="fs-6 text-700 mb-5">
              dcouple. Associate Data Handling Protocol
            </p>

            <hr className="my-5 border-dark" />

            {/* Objective */}
            <section className="mb-5">
              <div className="card border-dark bg-card p-4">
                <h2 className="fs-5 fw-bold text-dark mb-3">Objective</h2>
                <p className="fs-7 text-700 mb-0 lh-lg">
                  To ensure that <strong>"Field Intel"</strong> and source data remain decoupled from the
                  identities of researchers and participants. This protocol transforms passive security into
                  an active <strong>Sovereign Defense System</strong>, protecting both associates and
                  the integrity of the oversight mission.
                </p>
              </div>
            </section>

            {/* Section 1: Anonymization Hierarchy */}
            <section className="mb-5">
              <h2 className="fs-4 fw-bold text-dark mb-4">
                1. The Anonymization Hierarchy
              </h2>

              <p className="fs-7 text-700 lh-lg mb-4">
                Associates must apply the <strong>"Motivated Intruder Test"</strong> before any submission.
                This means assessing if a well-resourced actor could "single out" a source by combining
                your report with other public data.
              </p>

              <div className="mb-4">
                <div className="card border-300 bg-light p-4 mb-3">
                  <h3 className="fs-6 fw-bold text-dark mb-2">
                    <span className="text-dark me-2">→</span>
                    Generalization
                  </h3>
                  <p className="fs-7 text-700 mb-2">
                    Replace exact values with ranges to prevent precise identification.
                  </p>
                  <div className="ps-4">
                    <p className="fs-8 text-600 mb-0 font-monospace">
                      ✗ "Company X's revenue: €42,847,392"
                      <br />
                      ✓ "Revenue between €40M-€50M"
                    </p>
                  </div>
                </div>

                <div className="card border-300 bg-light p-4 mb-3">
                  <h3 className="fs-6 fw-bold text-dark mb-2">
                    <span className="text-dark me-2">→</span>
                    Perturbation
                  </h3>
                  <p className="fs-7 text-700 mb-0">
                    Add "statistical noise" to data points to maintain the pattern without revealing
                    the exact, identifiable figure. Useful for time-series data and trend analysis.
                  </p>
                </div>

                <div className="card border-300 bg-light p-4">
                  <h3 className="fs-6 fw-bold text-dark mb-2">
                    <span className="text-dark me-2">→</span>
                    Pseudonymization
                  </h3>
                  <p className="fs-7 text-700 mb-2">
                    Use alphanumeric codes instead of names.
                  </p>
                  <div className="alert alert-warning border-warning mb-0">
                    <strong>Critical:</strong> Reversal of these codes is strictly forbidden outside
                    of the admin's encrypted environment.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Secure Intake & Storage */}
            <section className="mb-5">
              <h2 className="fs-4 fw-bold text-dark mb-4">
                2. Secure Intake & Storage
              </h2>

              <div className="ps-4">
                <div className="mb-4">
                  <h3 className="fs-6 fw-bold text-dark mb-2">
                    Need-to-Know Access
                  </h3>
                  <p className="fs-7 text-700">
                    Data is stored using <strong>Row-Level Security (RLS)</strong>. Associates only
                    have permissions to view or modify data relevant to their specific "Decoupling" sector
                    (Capital Lab, Logistics Autonomy, Sovereign Tech, etc.).
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="fs-6 fw-bold text-dark mb-2">
                    Zero-Trace Submission
                  </h3>
                  <p className="fs-7 text-700 mb-2">
                    Never submit intel over unsecured channels like standard email.
                  </p>
                  <div className="card border-dark bg-card p-3">
                    <p className="fs-8 text-700 mb-2">
                      <strong>✓ Use:</strong> Submit Intelligence portal (strips metadata automatically)
                    </p>
                    <p className="fs-8 text-700 mb-0">
                      <strong>✗ Avoid:</strong> Standard email, public messaging platforms
                    </p>
                  </div>
                  <p className="fs-8 text-600 mt-2 mb-0">
                    The portal automatically removes: location data, device ID, browser fingerprint, IP geolocation.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="fs-6 fw-bold text-dark mb-2">
                    Encrypted "At-Rest" Storage
                  </h3>
                  <p className="fs-7 text-700">
                    All raw field notes must be stored on encrypted volumes. If an associate's device
                    is seized or lost, the data must remain unreadable.
                  </p>
                  <div className="alert alert-info border-dark">
                    <strong>Recommendation:</strong> Use BitLocker (Windows), FileVault (macOS), or
                    LUKS (Linux) for full-disk encryption.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Operational Security (OPSEC) */}
            <section className="mb-5">
              <h2 className="fs-4 fw-bold text-dark mb-4">
                3. Operational Security (OPSEC)
              </h2>

              <div className="ps-4">
                <div className="mb-4">
                  <h3 className="fs-6 fw-bold text-dark mb-2">
                    Conflict of Interest Disclosure
                  </h3>
                  <p className="fs-7 text-700">
                    Associates must disclose any financial or institutional ties to "Big Actors"
                    before engaging in specific oversight audits. This includes:
                  </p>
                  <ul className="fs-7 text-700">
                    <li>Employment or contractor relationships</li>
                    <li>Equity holdings or investment positions</li>
                    <li>Advisory board memberships</li>
                    <li>Research grants or sponsored partnerships</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="fs-6 fw-bold text-dark mb-2">
                    Clear Desk/Remote Policy
                  </h3>
                  <p className="fs-7 text-700 mb-2">
                    <strong>Do not</strong> process sensitive hub data in public spaces or leave physical
                    folders unattended.
                  </p>
                  <div className="card border-300 bg-light p-3">
                    <p className="fs-8 text-700 mb-1">
                      <strong>✗ Prohibited:</strong> Cafes, coworking spaces, airport lounges
                    </p>
                    <p className="fs-8 text-700 mb-0">
                      <strong>✓ Permitted:</strong> Secured home office, private office space, encrypted VPN connection
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="fs-6 fw-bold text-dark mb-2">
                    Incident Reporting
                  </h3>
                  <div className="alert alert-danger border-danger">
                    <p className="fs-7 mb-2">
                      <strong>Critical Requirement:</strong> If you suspect a breach or a "motivated intruder"
                      attempt, you must notify the Security Desk within <strong>2 hours</strong>.
                    </p>
                    <p className="fs-7 mb-0">
                      Security Desk: <a href="mailto:privacy@dcouple.com" className="text-dark text-decoration-underline">privacy@dcouple.com</a>
                    </p>
                  </div>
                  <p className="fs-8 text-600 mt-2">
                    Examples of incidents: suspicious login attempts, unexpected data access requests,
                    phishing attempts targeting associates, social engineering contact from monitored entities.
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-5 border-dark" />

            {/* Strategic Rationale */}
            <section className="mb-5">
              <h2 className="fs-5 fw-bold text-dark mb-4">Why This Protocol Exists</h2>

              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card border-dark h-100 p-4">
                    <h3 className="fs-6 fw-bold text-dark mb-2">Liability Protection</h3>
                    <p className="fs-7 text-700 mb-0">
                      If a "Big Actor" claims misinformation, this Protocol proves rigorous,
                      data-centric verification processes.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card border-dark h-100 p-4">
                    <h3 className="fs-6 fw-bold text-dark mb-2">Trust for Growth Projects</h3>
                    <p className="fs-7 text-700 mb-0">
                      Regional alternatives will only share insider data if associates follow
                      strict non-disclosure and anonymization rules.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card border-dark h-100 p-4">
                    <h3 className="fs-6 fw-bold text-dark mb-2">Scaling Your Workforce</h3>
                    <p className="fs-7 text-700 mb-0">
                      Acts as a manual so you don't explain security to every new associate
                      personally, saving time for your job.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Compliance Certification */}
            <section className="mb-5">
              <div className="card border-dark bg-dark text-white p-4">
                <h2 className="fs-5 fw-bold mb-3">Associate Compliance Certification</h2>
                <p className="fs-7 mb-3 opacity-75">
                  By submitting Field Intel to the dcouple. hub, associates certify that:
                </p>
                <ul className="fs-7 mb-0 opacity-75">
                  <li className="mb-2">They have applied the Motivated Intruder Test to all submitted data</li>
                  <li className="mb-2">All identifiable information has been properly anonymized</li>
                  <li className="mb-2">They have disclosed any conflicts of interest</li>
                  <li className="mb-2">They understand the 2-hour incident reporting requirement</li>
                  <li>They accept responsibility for OPSEC compliance in their work environment</li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="fs-5 fw-bold text-dark mb-3">Questions or Concerns?</h2>
              <p className="fs-7 text-700 mb-3">
                For questions about this protocol or to report security concerns:
              </p>
              <div className="ps-4">
                <p className="fs-7 mb-2">
                  <strong className="text-dark">Security Desk:</strong>
                  <a href="mailto:privacy@dcouple.com" className="text-700 text-decoration-underline"> privacy@dcouple.com</a>
                </p>
                <p className="fs-7 mb-0">
                  <strong className="text-dark">Data Protection Officer:</strong>
                  <a href="mailto:dpo@dcouple.com" className="text-700 text-decoration-underline"> dpo@dcouple.com</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
