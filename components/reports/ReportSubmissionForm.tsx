'use client';

import { useState } from 'react';
import { submitReport } from '@/app/actions/reports';
import { useRouter } from 'next/navigation';

export function ReportSubmissionForm({ entityId }: { entityId: string }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setIsPending(true);

    const formData = new FormData(event.currentTarget);

    try {
      const result = await submitReport(formData);

      if (result?.error) {
        setError(result.details || result.error);
      } else if (result?.success) {
        setSuccess(result.message || 'Report submitted successfully!');
        (event.target as HTMLFormElement).reset();

        // Redirect to entity page after 2 seconds
        setTimeout(() => {
          router.push(`/directory/${entityId}`);
        }, 2000);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="entity_id" value={entityId} />

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {success && (
        <div className="alert alert-success" role="alert">
          {success}
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Report Category <span className="text-danger">*</span>
        </label>
        <select name="category" id="category" className="form-select" required>
          <option value="">Select a category</option>
          <option value="compliance">Corporate Compliance</option>
          <option value="policy_strategy">Policy Strategy</option>
          <option value="asset_preservation">Asset Preservation</option>
          <option value="relocation">Logistics & Relocation</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="classification" className="form-label">
          Classification Level <span className="text-danger">*</span>
        </label>
        <select
          name="classification"
          id="classification"
          className="form-select"
          required
        >
          <option value="unclassified">Public (Unclassified)</option>
          <option value="restricted">Restricted (Verified Only)</option>
          <option value="confidential_internal">Confidential (Private)</option>
        </select>
        <small className="form-text text-muted">
          Public reports are visible to everyone. Restricted reports are visible to
          verified analysts. Confidential reports are only visible to you and admins.
        </small>
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Report Title <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="form-control"
          required
          minLength={10}
          maxLength={200}
          placeholder="e.g., Q4 2024 Governance Compliance Review"
        />
        <small className="form-text text-muted">
          10-200 characters. Be specific and descriptive.
        </small>
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Report Content <span className="text-danger">*</span>
        </label>
        <textarea
          name="content"
          id="content"
          className="form-control"
          rows={10}
          required
          minLength={100}
          maxLength={10000}
          placeholder="Provide detailed analysis, findings, and recommendations..."
        />
        <small className="form-text text-muted">
          100-10,000 characters. Support for basic HTML formatting (bold, italic,
          links).
        </small>
      </div>

      <div className="mb-3">
        <label htmlFor="sources" className="form-label">
          Sources (Optional)
        </label>
        <textarea
          name="sources"
          id="sources"
          className="form-control"
          rows={3}
          placeholder="https://example.com/source1&#10;https://example.com/source2"
        />
        <small className="form-text text-muted">
          One URL per line. Maximum 10 sources.
        </small>
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags (Optional)
        </label>
        <input
          type="text"
          name="tags"
          id="tags"
          className="form-control"
          placeholder="governance, transparency, audit, compliance"
        />
        <small className="form-text text-muted">
          Comma-separated tags. Maximum 10 tags.
        </small>
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary" disabled={isPending}>
          {isPending ? 'Submitting...' : 'Submit Report'}
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => router.back()}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
