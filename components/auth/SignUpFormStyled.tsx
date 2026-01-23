'use client';

import { useState } from 'react';
import { signUp } from '@/app/actions/auth';
import Image from 'next/image';
import Link from 'next/link';

export function SignUpFormStyled() {
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
      console.log('Submitting signup form...');
      const result = await signUp(formData);
      console.log('Signup result:', result);

      if (result?.error) {
        setError(result.error);
        console.error('Signup error:', result.error);
      } else if (result?.success) {
        setSuccess(result.message || 'Account created! Please check your email to confirm.');
        (event.target as HTMLFormElement).reset();
        console.log('Signup successful');
      } else {
        setError('No response from server. Please try again.');
        console.error('Unexpected result:', result);
      }
    } catch (err) {
      console.error('Signup exception:', err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-6 text-center pt-120 pb-100 px-lg-5">
          <h1 className="mb-2 h3">Create Account</h1>
          <p className="mb-4 text-700 fw-medium">Join Strategic Accountability Hub</p>

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

          <div className="d-flex flex-column gap-3">
            <div className="w-100 d-flex align-items-center justify-content-center gap-2 py-2 border-400 bg-white rounded-8 text-muted">
              <Image
                src="/assets/imgs/template/icons/google.svg"
                alt="Google"
                width={24}
                height={24}
              />
              <span className="fw-semi-bold fs-7">Google OAuth Coming Soon</span>
            </div>
          </div>

          <div className="border-top mt-5 mb-2 position-relative">
            <p className="position-absolute top-50 start-50 translate-middle bg-50 px-2 m-0 text-uppercase">
              sign up by email
            </p>
          </div>

          <form onSubmit={handleSubmit} className="text-start mt-5">
            <div className="col-12">
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
                      className="stroke-dark"
                      d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="stroke-dark"
                      d="M6.84723 19.25H17.1522C18.2941 19.25 19.1737 18.2681 18.6405 17.2584C17.856 15.7731 16.0677 14 11.9997 14C7.93174 14 6.1434 15.7731 5.35897 17.2584C4.8257 18.2681 5.70531 19.25 6.84723 19.25Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  className="form-control border-0 ms-0"
                  name="display_name"
                  placeholder="Display Name (optional)"
                  id="display_name"
                  aria-label="display_name"
                  autoComplete="name"
                />
              </div>
            </div>

            <div className="col-12 mt-3">
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
                  placeholder="Email"
                  id="email"
                  aria-label="email"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="col-12 text-start mt-3">
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
                    <defs>
                      <clipPath id="clip0_5844_8088">
                        <rect width={16} height={16} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <input
                  type="password"
                  className="form-control border-0 ms-0"
                  name="password"
                  placeholder="Password"
                  id="password"
                  aria-label="password"
                  required
                  autoComplete="new-password"
                  minLength={8}
                />
              </div>
              <small className="text-muted d-block mt-1">At least 8 characters</small>
            </div>

            <div className="col-12 mt-5">
              <button
                type="submit"
                className="btn btn-dark btn-medium w-100"
                disabled={isPending || !!success}
              >
                <span>{isPending ? 'Creating Account...' : 'Create Account'}</span>
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
            Already have an account?{' '}
            <Link href="/page-login" className="text-900 text-decoration-underline fs-7">
              Sign in
            </Link>
          </p>
        </div>

        <div className="col-lg-9 col-md-6 d-none d-md-block">
          <Image
            className="img-fluid cover-image"
            src="/assets/imgs/page/img-121.webp"
            alt="Sign Up"
            width={1920}
            height={1080}
            style={{ objectFit: 'cover', height: '100vh' }}
          />
        </div>
      </div>
    </div>
  );
}
