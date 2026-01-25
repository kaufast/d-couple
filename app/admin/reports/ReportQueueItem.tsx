'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { approveReport, rejectReport, returnForSanitization } from './actions';

interface Report {
  id: string;
  title: string;
  description: string;
  entity_name: string;
  category: string;
  status: string;
  created_at: string;
  evidence_urls?: string[];
  user_profiles?: {
    email: string;
    display_name?: string;
  };
}

export default function ReportQueueItem({ report }: { report: Report }) {
  const router = useRouter();
  const [showDetails, setShowDetails] = useState(false);
  const [piiCheckResult, setPiiCheckResult] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Simple PII detection patterns
  const detectPII = (text: string): { found: boolean; issues: string[] } => {
    const issues: string[] = [];

    // Email detection
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    if (emailPattern.test(text)) {
      issues.push('Email addresses detected');
    }

    // Phone numbers (various formats)
    const phonePattern = /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
    if (phonePattern.test(text)) {
      issues.push('Phone numbers detected');
    }

    // IP addresses
    const ipPattern = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g;
    if (ipPattern.test(text)) {
      issues.push('IP addresses detected');
    }

    // Social Security / National ID patterns (basic)
    const ssnPattern = /\b\d{3}-\d{2}-\d{4}\b/g;
    if (ssnPattern.test(text)) {
      issues.push('Potential SSN/National ID detected');
    }

    // Exact monetary amounts (should be generalized)
    const exactMoneyPattern = /€\d{1,3}(,\d{3})*(\.\d{2})?/g;
    const matches = text.match(exactMoneyPattern);
    if (matches && matches.length > 3) {
      issues.push('Multiple exact monetary amounts (should use ranges)');
    }

    // GPS coordinates
    const gpsPattern = /[-+]?\d{1,2}\.\d+,\s*[-+]?\d{1,3}\.\d+/g;
    if (gpsPattern.test(text)) {
      issues.push('GPS coordinates detected');
    }

    return {
      found: issues.length > 0,
      issues,
    };
  };

  const handleCheckPII = () => {
    const combinedText = `${report.title} ${report.description} ${report.entity_name}`;
    const result = detectPII(combinedText);

    if (result.found) {
      setPiiCheckResult(`⚠️ PII Issues Found: ${result.issues.join(', ')}`);
    } else {
      setPiiCheckResult('✓ No obvious PII detected (Manual review still required)');
    }
  };

  const handleApprove = async () => {
    if (confirm('Approve and publish this Field Intel report?')) {
      setIsProcessing(true);
      try {
        const result = await approveReport(report.id);
        if (result.success) {
          router.refresh();
        } else {
          alert(result.error || 'Failed to approve report');
        }
      } catch (error) {
        alert('An error occurred');
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const handleReject = async () => {
    const reason = prompt('Reason for rejection (will be sent to contributor):');
    if (reason) {
      setIsProcessing(true);
      try {
        const result = await rejectReport(report.id, reason);
        if (result.success) {
          router.refresh();
        } else {
          alert(result.error || 'Failed to reject report');
        }
      } catch (error) {
        alert('An error occurred');
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const handleReturnForSanitization = async () => {
    const feedback = prompt('Feedback for contributor (what needs sanitization):');
    if (feedback) {
      setIsProcessing(true);
      try {
        const result = await returnForSanitization(report.id, feedback);
        if (result.success) {
          router.refresh();
        } else {
          alert(result.error || 'Failed to return report');
        }
      } catch (error) {
        alert('An error occurred');
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="border-bottom border-300">
      <div className="row align-items-center p-3 hover-bg-light">
        <div className="col-md-3">
          <p className="fs-8 text-dark mb-1">{formatDate(report.created_at)}</p>
          <p className="fs-9 text-600 mb-0">ID: {report.id.substring(0, 8)}</p>
        </div>
        <div className="col-md-2">
          <p className="fs-8 text-dark mb-0">
            {report.user_profiles?.display_name || report.user_profiles?.email || 'Anonymous'}
          </p>
        </div>
        <div className="col-md-3">
          <p className="fs-7 fw-bold text-dark mb-1">{report.entity_name}</p>
          <span className="badge bg-light text-dark fs-9 px-2 py-1">
            {report.category}
          </span>
        </div>
        <div className="col-md-2">
          <span
            className={`badge ${
              report.status === 'under_review'
                ? 'bg-warning text-dark'
                : 'bg-light text-dark border border-300'
            } fs-8 px-2 py-1`}
          >
            {report.status === 'under_review' ? 'Under Review' : 'Draft'}
          </span>
        </div>
        <div className="col-md-2 text-end">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="btn btn-sm btn-outline-dark rounded-pill px-3"
          >
            {showDetails ? 'Hide' : 'Review'}
          </button>
        </div>
      </div>

      {showDetails && (
        <div className="bg-light border-top border-300 p-4">
          <div className="row">
            {/* Left Column: Content */}
            <div className="col-md-8">
              <h5 className="fs-6 fw-bold text-dark mb-3">{report.title}</h5>

              <div className="mb-3">
                <p className="fs-8 fw-bold text-dark mb-2">Description:</p>
                <div className="card bg-white border-300 p-3">
                  <p className="fs-8 text-700 mb-0" style={{ whiteSpace: 'pre-wrap' }}>
                    {report.description}
                  </p>
                </div>
              </div>

              {report.evidence_urls && report.evidence_urls.length > 0 && (
                <div className="mb-3">
                  <p className="fs-8 fw-bold text-dark mb-2">Evidence URLs:</p>
                  <ul className="list-unstyled mb-0">
                    {report.evidence_urls.map((url, idx) => (
                      <li key={idx} className="mb-1">
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fs-8 text-decoration-underline"
                        >
                          {url}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column: Actions & Checks */}
            <div className="col-md-4">
              {/* PII Detection */}
              <div className="card border-dark mb-3">
                <div className="card-header bg-dark text-white py-2">
                  <span className="fs-8 fw-bold">Sanitization Check</span>
                </div>
                <div className="card-body p-3">
                  <button
                    onClick={handleCheckPII}
                    className="btn btn-sm btn-outline-dark w-100 mb-2"
                  >
                    🔍 Check for PII
                  </button>
                  {piiCheckResult && (
                    <div
                      className={`alert ${
                        piiCheckResult.includes('⚠️')
                          ? 'alert-warning border-warning'
                          : 'alert-success border-success'
                      } py-2 mb-0`}
                    >
                      <p className="fs-9 mb-0">{piiCheckResult}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Metadata Warnings */}
              <div className="card border-300 bg-card mb-3">
                <div className="card-body p-3">
                  <p className="fs-8 fw-bold text-dark mb-2">Metadata Status:</p>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="fs-9">📍 GPS Data:</span>
                    <span className="badge bg-success fs-9">Stripped</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="fs-9">🖥️ Device ID:</span>
                    <span className="badge bg-success fs-9">Stripped</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="fs-9">🌐 IP Geolocation:</span>
                    <span className="badge bg-success fs-9">Masked</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="card border-dark">
                <div className="card-header bg-dark text-white py-2">
                  <span className="fs-8 fw-bold">Review Actions</span>
                </div>
                <div className="card-body p-3">
                  <button
                    onClick={handleApprove}
                    disabled={isProcessing}
                    className="btn btn-success w-100 mb-2 fs-8"
                  >
                    ✓ Approve & Publish
                  </button>
                  <button
                    onClick={handleReturnForSanitization}
                    disabled={isProcessing}
                    className="btn btn-warning w-100 mb-2 fs-8"
                  >
                    ↩ Return for Sanitization
                  </button>
                  <button
                    onClick={handleReject}
                    disabled={isProcessing}
                    className="btn btn-outline-danger w-100 fs-8"
                  >
                    ✗ Reject
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Motivated Intruder Assessment */}
          <div className="row mt-3">
            <div className="col-12">
              <div className="alert alert-info border-dark">
                <p className="fs-8 fw-bold mb-2">✓ Motivated Intruder Test Checklist:</p>
                <ul className="fs-9 mb-0 ps-4">
                  <li>Can this data be combined with public sources to identify individuals?</li>
                  <li>Have exact values been generalized to ranges?</li>
                  <li>Are pseudonymization codes used for sensitive identifiers?</li>
                  <li>Would a well-resourced Big Actor be able to "single out" sources?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
