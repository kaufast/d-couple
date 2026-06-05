'use client';

import { useState, useEffect } from 'react';

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay showing banner slightly for better UX
      setTimeout(() => setShow(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShow(false);
  };

  const rejectNonEssential = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="position-fixed bottom-0 start-0 end-0 bg-dark text-white p-4 shadow-lg"
      style={{ zIndex: 9999 }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 mb-3 mb-lg-0">
            <p className="h5 mb-2 text-white">Cookie Consent</p>
            <p className="mb-0 text-white" style={{ opacity: 0.9 }}>
              This site uses essential cookies for authentication and session
              management. We also use analytics cookies to improve our service.{' '}
              <a
                href="/privacy"
                className="text-white text-decoration-underline"
                target="_blank"
              >
                Learn more in our Privacy Policy
              </a>
              .
            </p>
          </div>
          <div className="col-lg-4">
            <div className="d-flex gap-2 justify-content-lg-end">
              <button
                onClick={acceptCookies}
                className="btn btn-light"
                aria-label="Accept all cookies"
              >
                Accept All
              </button>
              <button
                onClick={rejectNonEssential}
                className="btn btn-outline-light"
                aria-label="Accept essential cookies only"
              >
                Essential Only
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
