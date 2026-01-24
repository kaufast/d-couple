import Layout from '@/components/layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sovereign Privacy Framework - dcouple.',
  description: 'Our commitment to data sovereignty and privacy-by-design architecture for strategic autonomy.',
};

export default function PrivacyPage() {
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
              </div>
            </div>

            <h1 className="ds-6 fw-bold mb-4">Sovereign Privacy Framework</h1>
            <p className="fs-6 text-700 mb-5">
              Revised Privacy & Cookies Policy
            </p>

            <hr className="my-5 border-dark" />

            {/* Section 1 */}
            <section className="mb-5">
              <h2 className="fs-4 fw-bold text-dark mb-3">
                1. Our Commitment to Data Sovereignty
              </h2>
              <p className="fs-7 text-700 lh-lg">
                The <strong>dcouple.</strong> project operates on the principle of strategic autonomy.
                We believe that privacy is not just a legal requirement but a fundamental component of
                decoupling from centralized technocracies. This policy outlines our <strong>"privacy-by-design"</strong> architecture.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-5">
              <h2 className="fs-4 fw-bold text-dark mb-3">
                2. Information We Collect (Data Minimization)
              </h2>
              <p className="fs-7 text-700 lh-lg mb-3">
                We collect only the minimum data necessary to verify intelligence and maintain the integrity
                of the Oversight Directory.
              </p>

              <div className="ps-4">
                <p className="fs-7 mb-2">
                  <strong className="text-dark">Sovereign Account Data:</strong>
                  <span className="text-700"> Email, an optional display name, and institutional affiliation (if provided for associate verification).</span>
                </p>

                <p className="fs-7 mb-2">
                  <strong className="text-dark">Strategic Intelligence:</strong>
                  <span className="text-700"> Reports, "Field Intel," and assessments you submit to the hub.</span>
                </p>

                <p className="fs-7 mb-2">
                  <strong className="text-dark">Zero-Tracking Analytics:</strong>
                  <span className="text-700"> We collect limited technical data (IP address and browser type) solely for security purposes and to prevent automated "Big Actor" bot attacks.</span>
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-5">
              <h2 className="fs-4 fw-bold text-dark mb-3">
                3. Data Decoupling & Sharing
              </h2>
              <p className="fs-7 text-700 lh-lg mb-3">
                We do not, and will never, sell your data to third-party advertising networks or data brokers.
              </p>

              <div className="ps-4">
                <p className="fs-7 mb-2">
                  <strong className="text-dark">Public Accountability:</strong>
                  <span className="text-700"> Only content explicitly marked as "Unclassified" or "Public Report" will be visible in the Oversight Directory.</span>
                </p>

                <p className="fs-7 mb-2">
                  <strong className="text-dark">Institutional Safeguards:</strong>
                  <span className="text-700"> We use Supabase and Vercel for infrastructure. Their access is strictly limited to technical maintenance under encrypted protocols.</span>
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-5">
              <h2 className="fs-4 fw-bold text-dark mb-3">
                4. Security & Encryption
              </h2>
              <p className="fs-7 text-700 lh-lg mb-3">
                Your data is protected by <strong>Institutional-Grade Security:</strong>
              </p>

              <div className="ps-4">
                <p className="fs-7 mb-2">
                  <strong className="text-dark">Row-Level Security (RLS):</strong>
                  <span className="text-700"> Ensures that private "Field Intel" is only accessible to authorized associates and administrators.</span>
                </p>

                <p className="fs-7 mb-2">
                  <strong className="text-dark">End-to-End Encryption:</strong>
                  <span className="text-700"> All sensitive communication and jurisdictional legal guides are served over secure, encrypted tunnels.</span>
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-5">
              <h2 className="fs-4 fw-bold text-dark mb-3">
                5. Cookie Policy (Privacy-First)
              </h2>
              <p className="fs-7 text-700 lh-lg mb-3">
                We have decoupled our platform from invasive tracking cookies.
              </p>

              <div className="ps-4">
                <p className="fs-7 mb-2">
                  <strong className="text-dark">Essential Cookies:</strong>
                  <span className="text-700"> Required for your secure session and authentication. These do not track you across other websites.</span>
                </p>

                <p className="fs-7 mb-2">
                  <strong className="text-dark">Functional Analytics:</strong>
                  <span className="text-700"> We use privacy-respecting analytics that do not store personal identifiers or follow your behavior outside of the dcouple. domain.</span>
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-5">
              <h2 className="fs-4 fw-bold text-dark mb-3">
                6. Your Sovereign Rights (GDPR+)
              </h2>
              <p className="fs-7 text-700 lh-lg mb-3">
                As an EU-focused hub, we adhere to the highest standards of the GDPR, granting you the right to:
              </p>

              <div className="ps-4">
                <p className="fs-7 mb-2">
                  <strong className="text-dark">Full Erasure:</strong>
                  <span className="text-700"> The "Right to be Forgotten" from our directory and logs.</span>
                </p>

                <p className="fs-7 mb-2">
                  <strong className="text-dark">Intel Portability:</strong>
                  <span className="text-700"> The right to export your submitted research in a structured format.</span>
                </p>

                <p className="fs-7 mb-2">
                  <strong className="text-dark">Access:</strong>
                  <span className="text-700"> A complete record of any data associated with your sovereign ID.</span>
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-5">
              <h2 className="fs-4 fw-bold text-dark mb-3">
                7. Contact & Oversight
              </h2>
              <p className="fs-7 text-700 lh-lg mb-3">
                For all privacy-related inquiries or to report a compliance issue:
              </p>

              <div className="ps-4">
                <p className="fs-7 mb-2">
                  <strong className="text-dark">Security Desk:</strong>
                  <a href="mailto:privacy@dcouple.com" className="text-700 text-decoration-underline"> privacy@dcouple.com</a>
                </p>

                <p className="fs-7 mb-2">
                  <strong className="text-dark">Data Protection Officer:</strong>
                  <a href="mailto:dpo@dcouple.com" className="text-700 text-decoration-underline"> dpo@dcouple.com</a>
                </p>
              </div>
            </section>

            <hr className="my-5 border-dark" />

            {/* Implementation Notice */}
            <div className="card border-dark bg-card p-4 mt-5">
              <h3 className="fs-6 fw-bold text-dark mb-3">Implementation Notes</h3>
              <p className="fs-7 text-700 mb-3">
                This Sovereign Privacy Framework is integrated across the platform:
              </p>
              <ul className="fs-7 text-700 ps-4 mb-0">
                <li className="mb-2">
                  <strong>Footer Link:</strong> "Privacy & Governance" in bottom navigation
                </li>
                <li className="mb-2">
                  <strong>Consent Banner:</strong> Lightweight, defaults to "Privacy-First" (Essential cookies only)
                </li>
                <li className="mb-2">
                  <strong>Field Intel Form:</strong> Checkbox confirmation: "I understand my submission will be handled according to the Sovereign Privacy Framework"
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
