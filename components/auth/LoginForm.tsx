'use client';

import { useState } from 'react';
import { signIn } from '@/app/actions/auth';
import Link from 'next/link';

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsPending(true);

    const formData = new FormData(event.currentTarget);

    try {
      const result = await signIn(formData);

      if (result?.error) {
        setError(result.error);
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
              <h2 className="card-title mb-4">Sign In</h2>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
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
                    autoComplete="current-password"
                    minLength={8}
                  />
                </div>

                <div className="mb-3">
                  <Link
                    href="/auth/reset-password"
                    className="text-decoration-none"
                  >
                    Forgot your password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={isPending}
                >
                  {isPending ? 'Signing in...' : 'Sign In'}
                </button>
              </form>

              <div className="mt-4 text-center">
                <p className="mb-0">
                  Don't have an account?{' '}
                  <Link href="/auth/signup" className="text-decoration-none">
                    Sign up
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
