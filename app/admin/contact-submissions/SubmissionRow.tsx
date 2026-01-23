'use client';

import { useState } from 'react';
import { updateSubmissionStatus } from '@/app/actions/admin';
import { getPublicUrl } from '@/lib/utils/storage';

interface Submission {
  id: string;
  name: string;
  email: string;
  message: string;
  attachments: string[] | null;
  status: 'new' | 'in_progress' | 'resolved' | 'spam';
  created_at: string;
  ip_address: string;
  user_agent: string;
}

interface SubmissionRowProps {
  submission: Submission;
}

export function SubmissionRow({ submission }: SubmissionRowProps) {
  const [status, setStatus] = useState(submission.status);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  async function handleStatusChange(newStatus: Submission['status']) {
    setIsUpdating(true);
    try {
      const result = await updateSubmissionStatus(submission.id, newStatus);
      if (result.success) {
        setStatus(newStatus);
      } else {
        alert('Failed to update status: ' + result.error);
      }
    } catch (error) {
      alert('Failed to update status');
    } finally {
      setIsUpdating(false);
    }
  }

  function getStatusBadgeClass(status: string) {
    switch (status) {
      case 'new':
        return 'bg-warning text-dark';
      case 'in_progress':
        return 'bg-info text-white';
      case 'resolved':
        return 'bg-success text-white';
      case 'spam':
        return 'bg-danger text-white';
      default:
        return 'bg-secondary text-white';
    }
  }

  const formattedDate = new Date(submission.created_at).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <>
      <tr>
        <td className="small">{formattedDate}</td>
        <td>{submission.name}</td>
        <td>
          <a href={`mailto:${submission.email}`} className="text-decoration-none">
            {submission.email}
          </a>
        </td>
        <td>
          <div
            className="text-truncate"
            style={{ maxWidth: '300px', cursor: 'pointer' }}
            onClick={() => setIsExpanded(!isExpanded)}
            title="Click to expand"
          >
            {submission.message}
          </div>
        </td>
        <td>
          {submission.attachments && submission.attachments.length > 0 ? (
            <span className="badge bg-secondary">{submission.attachments.length} file(s)</span>
          ) : (
            <span className="text-muted small">None</span>
          )}
        </td>
        <td>
          <span className={`badge ${getStatusBadgeClass(status)}`}>
            {status.replace('_', ' ')}
          </span>
        </td>
        <td>
          <div className="btn-group btn-group-sm">
            <button
              type="button"
              className="btn btn-outline-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              disabled={isUpdating}
            >
              {isUpdating ? 'Updating...' : 'Change Status'}
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleStatusChange('new')}
                  disabled={status === 'new'}
                >
                  New
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleStatusChange('in_progress')}
                  disabled={status === 'in_progress'}
                >
                  In Progress
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleStatusChange('resolved')}
                  disabled={status === 'resolved'}
                >
                  Resolved
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button
                  className="dropdown-item text-danger"
                  onClick={() => handleStatusChange('spam')}
                  disabled={status === 'spam'}
                >
                  Mark as Spam
                </button>
              </li>
            </ul>
          </div>
        </td>
      </tr>
      {isExpanded && (
        <tr>
          <td colSpan={7} className="bg-light">
            <div className="p-3">
              <h6>Full Message:</h6>
              <p className="mb-3">{submission.message}</p>

              {submission.attachments && submission.attachments.length > 0 && (
                <>
                  <h6>Attachments:</h6>
                  <ul className="list-unstyled">
                    {submission.attachments.map((path, index) => (
                      <li key={index} className="mb-1">
                        <a
                          href={getPublicUrl(path)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-decoration-none"
                        >
                          <i className="bi bi-paperclip me-1"></i>
                          {path.split('/').pop()}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div className="mt-3 small text-muted">
                <strong>IP Address:</strong> {submission.ip_address} <br />
                <strong>User Agent:</strong> {submission.user_agent}
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
