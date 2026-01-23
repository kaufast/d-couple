'use client';

import { useState } from 'react';
import { signUp } from '@/app/actions/auth';
import Link from 'next/link';

export function SignupForm() {
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
      const result = await signUp(formData);

      if (result?.error) {
        setError(result.error);
      } else if (result?.success) {
        setSuccess(result.message || 'Account created successfully!');
        (event.target as HTMLFormElement).reset();
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h2 className="card-title mb-4">Create Account</h2>

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

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="display_name" className="form-label">
                    Display Name (Optional)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="display_name"
                    name="display_name"
                    autoComplete="name"
                    placeholder="John Doe"
                  />
                  <small className="form-text text-muted">
                    This will be visible to other users
                  </small>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                    autoComplete="new-password"
                    minLength={8}
                  />
                  <small className="form-text text-muted">
                    Must be at least 8 characters with uppercase, lowercase, and a number
                  </small>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={isPending}
                >
                  {isPending ? 'Creating account...' : 'Sign Up'}
                </button>
              </form>

              <div className="mt-4 text-center">
                <p className="mb-0">
                  Already have an account?{' '}
                  <Link href="/auth/login" className="text-decoration-none">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
