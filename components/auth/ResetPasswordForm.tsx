'use client';

import { useState } from 'react';
import { resetPassword } from '@/app/actions/auth';
import Image from 'next/image';
import Link from 'next/link';

export function ResetPasswordForm() {
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
      const result = await resetPassword(formData);

      if (result?.error) {
        setError(result.error);
      } else if (result?.success) {
        setSuccess(
          'Password reset link sent! Please check your email for instructions to reset your password.'
        );
        (event.target as HTMLFormElement).reset();
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-6 text-center pt-120 pb-100 px-lg-5">
          <h1 className="mb-2 h3">Reset Password</h1>
          <p className="mb-4 text-700 fw-medium">
            Enter your email address and we'll send you a link to reset your password.
          </p>

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

          <form onSubmit={handleSubmit} className="text-start mt-5">
            <div className="col-12">
              <label htmlFor="email" className="form-label text-700 fs-7">
                Email Address
              </label>
              <div className="input-group bg-white border-400 rounded-6 d-flex align-items-center mt-2">
                <div className="icon-input ps-3 pt-1">
                  <svg
                    className="dark-mode-invert"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                      stroke="#171717"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 6L12 13L2 6"
                      stroke="#171717"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  className="form-control border-0 ms-0"
                  name="email"
                  placeholder="your.email@example.com"
                  id="email"
                  aria-label="email"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="col-12 mt-5">
              <button
                type="submit"
                className="btn btn-dark btn-medium w-100"
                disabled={isPending || !!success}
              >
                <span>{isPending ? 'Sending...' : 'Send Reset Link'}</span>
                <span className="group-icon">
                  <span className="group-icon-inner dark-mode-invert">
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.5521 1.52598L6.1875 1.16138L5.4583 1.89058L5.8229 2.25518L8.55202 4.98433H1.20312H0.6875V6.01558H1.20312H8.55202L5.8229 8.74474L5.4583 9.10932L6.1875 9.83856L6.5521 9.47391L10.04 5.98609C10.3084 5.7176 10.3084 5.2823 10.04 5.01382L6.5521 1.52598Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.5521 1.52598L6.1875 1.16138L5.4583 1.89058L5.8229 2.25518L8.55202 4.98433H1.20312H0.6875V6.01558H1.20312H8.55202L5.8229 8.74474L5.4583 9.10932L6.1875 9.83856L6.5521 9.47391L10.04 5.98609C10.3084 5.7176 10.3084 5.2823 10.04 5.01382L6.5521 1.52598Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </form>

          <p className="text-700 fs-7 mt-5">
            Remember your password?{' '}
            <Link href="/page-login" className="text-900 text-decoration-underline fs-7">
              Back to Login
            </Link>
          </p>
        </div>

        <div className="col-lg-9 col-md-6 d-none d-md-block">
          <Image
            className="img-fluid cover-image"
            src="/assets/imgs/page/img-121.webp"
            alt="Reset Password"
            width={1920}
            height={1080}
            style={{ objectFit: 'cover', height: '100vh' }}
          />
        </div>
      </div>
    </div>
  );
}
