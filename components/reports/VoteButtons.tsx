'use client';

import { useState, useEffect } from 'react';
import { voteOnReport, removeVote } from '@/app/actions/votes';

export function VoteButtons({
  reportId,
  initialScore,
  initialUserVote,
}: {
  reportId: string;
  initialScore: number;
  initialUserVote?: 1 | -1 | null;
}) {
  const [score, setScore] = useState(initialScore);
  const [userVote, setUserVote] = useState<1 | -1 | null>(initialUserVote || null);
  const [isPending, setIsPending] = useState(false);

  async function handleVote(weight: 1 | -1) {
    setIsPending(true);

    try {
      // If clicking the same vote, remove it
      if (userVote === weight) {
        const result = await removeVote(reportId);

        if (result?.success) {
          setScore((prev) => prev - weight);
          setUserVote(null);
        }
      } else {
        // Otherwise, add or update vote
        const result = await voteOnReport(reportId, weight);

        if (result?.success) {
          // If changing vote, adjust score by 2 (remove old, add new)
          if (userVote !== null) {
            setScore((prev) => prev - userVote + weight);
          } else {
            setScore((prev) => prev + weight);
          }
          setUserVote(weight);
        }
      }
    } catch (error) {
      console.error('Vote error:', error);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="d-flex align-items-center gap-2">
      <button
        onClick={() => handleVote(1)}
        className={`btn btn-sm ${
          userVote === 1 ? 'btn-success' : 'btn-outline-success'
        }`}
        disabled={isPending}
        aria-label="Upvote"
        title="This report is impactful"
      >
        <i className="bi bi-arrow-up"></i>
      </button>

      <span className="fw-bold" style={{ minWidth: '30px', textAlign: 'center' }}>
        {score}
      </span>

      <button
        onClick={() => handleVote(-1)}
        className={`btn btn-sm ${
          userVote === -1 ? 'btn-danger' : 'btn-outline-danger'
        }`}
        disabled={isPending}
        aria-label="Downvote"
        title="This report needs improvement"
      >
        <i className="bi bi-arrow-down"></i>
      </button>
    </div>
  );
}
