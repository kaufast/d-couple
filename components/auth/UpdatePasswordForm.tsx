'use client';

import { useState, useEffect } from 'react';
import { updatePassword } from '@/app/actions/auth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function UpdatePasswordForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  // Check if passwords match
  const passwordsMatch = password === confirmPassword && password.length >= 8;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (!passwordsMatch) {
      setError('Passwords must match and be at least 8 characters long.');
      return;
    }

    setIsPending(true);

    const formData = new FormData(event.currentTarget);

    try {
      const result = await updatePassword(formData);

      if (result?.error) {
        setError(result.error);
      } else if (result?.success) {
        setSuccess('Password updated successfully! Redirecting to login...');
        setTimeout(() => {
          router.push('/page-login');
        }, 2000);
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
          <h1 className="mb-2 h3">Update Password</h1>
          <p className="mb-4 text-700 fw-medium">
            Enter your new password below.
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
              <label htmlFor="password" className="form-label text-700 fs-7">
                New Password
              </label>
              <div className="input-group bg-white border-400 rounded-6 d-flex align-items-center mt-2">
                <div className="icon-input ps-3 pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_5844_8088)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.5 5.5C6.5 3.29086 8.29086 1.5 10.5 1.5C12.7091 1.5 14.5 3.29086 14.5 5.5C14.5 7.70914 12.7091 9.5 10.5 9.5C10.0496 9.5 9.61798 9.42583 9.21589 9.28964L9.09885 9.25H8.97528H8H7.25V10V12.25H5.75H5V13V14.5H1.5V11.5818L6.38022 7.14521L6.70674 6.84837L6.60585 6.41878C6.53673 6.12449 6.5 5.81702 6.5 5.5ZM10.5 0C7.46243 0 5 2.46243 5 5.5C5 5.77753 5.02062 6.05064 5.06048 6.31778L0.245495 10.695L0 10.9182V11.25V15.25V16H0.75H5.75H6.5V15.25V13.75H8H8.75V13V10.75H8.85639C9.37626 10.9126 9.92859 11 10.5 11C13.5376 11 16 8.53757 16 5.5C16 2.46243 13.5376 0 10.5 0ZM10.5 6.5C11.0523 6.5 11.5 6.05228 11.5 5.5C11.5 4.94772 11.0523 4.5 10.5 4.5C9.94771 4.5 9.5 4.94772 9.5 5.5C9.5 6.05228 9.94771 6.5 10.5 6.5Z"
                        fill="#171717"
                      />
                    </g>
                  </svg>
                </div>
                <input
                  type="password"
                  className="form-control border-0 ms-0"
                  name="password"
                  placeholder="Enter new password"
                  id="password"
                  aria-label="password"
                  required
                  autoComplete="new-password"
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <small className="text-muted">At least 8 characters</small>
            </div>

            <div className="col-12 mt-3">
              <label htmlFor="confirmPassword" className="form-label text-700 fs-7">
                Confirm New Password
              </label>
              <div className="input-group bg-white border-400 rounded-6 d-flex align-items-center mt-2">
                <div className="icon-input ps-3 pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_5844_8088)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.5 5.5C6.5 3.29086 8.29086 1.5 10.5 1.5C12.7091 1.5 14.5 3.29086 14.5 5.5C14.5 7.70914 12.7091 9.5 10.5 9.5C10.0496 9.5 9.61798 9.42583 9.21589 9.28964L9.09885 9.25H8.97528H8H7.25V10V12.25H5.75H5V13V14.5H1.5V11.5818L6.38022 7.14521L6.70674 6.84837L6.60585 6.41878C6.53673 6.12449 6.5 5.81702 6.5 5.5ZM10.5 0C7.46243 0 5 2.46243 5 5.5C5 5.77753 5.02062 6.05064 5.06048 6.31778L0.245495 10.695L0 10.9182V11.25V15.25V16H0.75H5.75H6.5V15.25V13.75H8H8.75V13V10.75H8.85639C9.37626 10.9126 9.92859 11 10.5 11C13.5376 11 16 8.53757 16 5.5C16 2.46243 13.5376 0 10.5 0ZM10.5 6.5C11.0523 6.5 11.5 6.05228 11.5 5.5C11.5 4.94772 11.0523 4.5 10.5 4.5C9.94771 4.5 9.5 4.94772 9.5 5.5C9.5 6.05228 9.94771 6.5 10.5 6.5Z"
                        fill="#171717"
                      />
                    </g>
                  </svg>
                </div>
                <input
                  type="password"
                  className="form-control border-0 ms-0"
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  id="confirmPassword"
                  aria-label="confirmPassword"
                  required
                  autoComplete="new-password"
                  minLength={8}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {confirmPassword && !passwordsMatch && (
                <small className="text-danger">Passwords do not match</small>
              )}
              {confirmPassword && passwordsMatch && (
                <small className="text-success">Passwords match</small>
              )}
            </div>

            <div className="col-12 mt-5">
              <button
                type="submit"
                className="btn btn-dark btn-medium w-100"
                disabled={isPending || !passwordsMatch || !!success}
              >
                <span>{isPending ? 'Updating...' : 'Update Password'}</span>
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
            alt="Update Password"
            width={1920}
            height={1080}
            style={{ objectFit: 'cover', height: '100vh' }}
          />
        </div>
      </div>
    </div>
  );
}
