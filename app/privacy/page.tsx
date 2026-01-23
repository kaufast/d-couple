import Layout from '@/components/layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Strategic Accountability Hub',
  description: 'Privacy policy and data protection information.',
};

export default function PrivacyPage() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="mb-4">Privacy Policy</h1>
            <p className="lead">
              Last updated: January 23, 2026
            </p>

            <hr className="my-4" />

            <h2 className="h4 mb-3">1. Introduction</h2>
            <p>
              Strategic Accountability Hub ("we", "our", or "us") is committed to
              protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our
              platform.
            </p>

            <h2 className="h4 mb-3 mt-4">2. Information We Collect</h2>
            <h3 className="h5 mb-2">Account Information</h3>
            <ul>
              <li>Email address</li>
              <li>Display name (optional)</li>
              <li>Password (encrypted)</li>
              <li>Institutional affiliation (optional)</li>
              <li>Areas of expertise (optional)</li>
            </ul>

            <h3 className="h5 mb-2 mt-3">Content You Provide</h3>
            <ul>
              <li>Reports and submissions</li>
              <li>Comments and votes</li>
              <li>Tags and metadata</li>
            </ul>

            <h3 className="h5 mb-2 mt-3">Automatically Collected Information</h3>
            <ul>
              <li>IP address (for security purposes)</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Usage data and analytics</li>
              <li>Session information</li>
            </ul>

            <h2 className="h4 mb-3 mt-4">3. How We Use Your Information</h2>
            <ul>
              <li>To provide and maintain our service</li>
              <li>To authenticate your identity</li>
              <li>To enable report submission and voting</li>
              <li>To improve user experience</li>
              <li>To detect and prevent fraud or abuse</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="h4 mb-3 mt-4">4. Data Sharing</h2>
            <p>We do not sell your personal data. We may share data in these cases:</p>
            <ul>
              <li>
                <strong>Public Content:</strong> Reports marked as "unclassified" are
                publicly visible
              </li>
              <li>
                <strong>With Your Consent:</strong> When you explicitly agree to
                share data
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect rights and safety
              </li>
              <li>
                <strong>Service Providers:</strong> With trusted third parties who
                help operate our service (Supabase, Vercel)
              </li>
            </ul>

            <h2 className="h4 mb-3 mt-4">5. Data Security</h2>
            <p>We implement security measures including:</p>
            <ul>
              <li>End-to-end encryption for sensitive data</li>
              <li>Row-Level Security (RLS) in our database</li>
              <li>HTTPS/TLS for all connections</li>
              <li>Regular security audits</li>
              <li>Access logging and monitoring</li>
            </ul>

            <h2 className="h4 mb-3 mt-4">6. Your Rights (GDPR)</h2>
            <p>You have the right to:</p>
            <ul>
              <li>
                <strong>Access:</strong> Request a copy of your personal data
              </li>
              <li>
                <strong>Rectification:</strong> Correct inaccurate data
              </li>
              <li>
                <strong>Erasure:</strong> Request deletion of your data ("right to be
                forgotten")
              </li>
              <li>
                <strong>Portability:</strong> Receive your data in a portable format
              </li>
              <li>
                <strong>Restriction:</strong> Limit how we use your data
              </li>
              <li>
                <strong>Objection:</strong> Object to data processing
              </li>
            </ul>

            <p className="mt-3">
              To exercise these rights, contact us at{' '}
              <a href="mailto:privacy@strategic-accountability-hub.com">
                privacy@strategic-accountability-hub.com
              </a>
            </p>

            <h2 className="h4 mb-3 mt-4">7. Cookies</h2>
            <h3 className="h5 mb-2">Essential Cookies</h3>
            <p>
              Required for authentication and session management. Cannot be disabled.
            </p>

            <h3 className="h5 mb-2 mt-3">Analytics Cookies</h3>
            <p>
              Used to understand how users interact with our platform. Can be
              rejected via the cookie consent banner.
            </p>

            <h2 className="h4 mb-3 mt-4">8. Data Retention</h2>
            <ul>
              <li>
                <strong>Account Data:</strong> Retained while your account is active
              </li>
              <li>
                <strong>Reports:</strong> Retained indefinitely unless you request
                deletion
              </li>
              <li>
                <strong>Activity Logs:</strong> Retained for 90 days for security
                purposes
              </li>
            </ul>

            <h2 className="h4 mb-3 mt-4">9. Children's Privacy</h2>
            <p>
              Our service is not intended for users under 18 years of age. We do
              not knowingly collect information from children.
            </p>

            <h2 className="h4 mb-3 mt-4">10. International Data Transfers</h2>
            <p>
              Your data may be transferred to and processed in countries outside
              your jurisdiction. We ensure appropriate safeguards are in place for
              such transfers.
            </p>

            <h2 className="h4 mb-3 mt-4">11. Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul>
              <li>
                <strong>Supabase:</strong> Database and authentication (
                <a
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                )
              </li>
              <li>
                <strong>Vercel:</strong> Hosting and analytics (
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                )
              </li>
            </ul>

            <h2 className="h4 mb-3 mt-4">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be
              posted on this page with an updated "Last updated" date.
            </p>

            <h2 className="h4 mb-3 mt-4">13. Contact Us</h2>
            <p>For privacy-related questions or requests:</p>
            <ul>
              <li>
                Email:{' '}
                <a href="mailto:privacy@strategic-accountability-hub.com">
                  privacy@strategic-accountability-hub.com
                </a>
              </li>
              <li>
                Data Protection Officer:{' '}
                <a href="mailto:dpo@strategic-accountability-hub.com">
                  dpo@strategic-accountability-hub.com
                </a>
              </li>
            </ul>

            <hr className="my-4" />

            <div className="alert alert-info">
              <strong>Note:</strong> This is a template privacy policy. Please
              customize it to match your specific data processing activities and
              legal requirements.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
