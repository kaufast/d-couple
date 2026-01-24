'use client';

import { useState, useEffect } from 'react';
import { startRegistration } from '@simplewebauthn/browser';
import { generatePasskeyRegistrationOptions, verifyPasskeyRegistration } from '@/lib/webauthn/server';

interface Passkey {
  id: string;
  device_name: string;
  created_at: string;
  last_used_at: string;
}

export function PasskeyManager() {
  const [passkeys, setPasskeys] = useState<Passkey[]>([]);
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Check if WebAuthn is supported
    if (window.PublicKeyCredential) {
      setIsSupported(true);
    }

    // Load existing passkeys (you'll need to create an API endpoint for this)
    loadPasskeys();
  }, []);

  async function loadPasskeys() {
    // TODO: Implement API endpoint to fetch user's passkeys
    // For now, this is a placeholder
  }

  async function handleRegisterPasskey() {
    if (!isSupported) {
      setError('Passkeys are not supported in your browser');
      return;
    }

    setIsRegistering(true);
    setError(null);
    setSuccess(null);

    try {
      // Step 1: Get registration options from server
      const optionsResult = await generatePasskeyRegistrationOptions();

      if (optionsResult.error || !optionsResult.options) {
        throw new Error(optionsResult.error || 'Failed to get registration options');
      }

      // Step 2: Prompt user to create passkey
      const registrationResponse = await startRegistration({ optionsJSON: optionsResult.options });

      // Step 3: Send response to server for verification
      const verificationResult = await verifyPasskeyRegistration(
        registrationResponse,
        optionsResult.options.challenge
      );

      if (verificationResult.error) {
        throw new Error(verificationResult.error);
      }

      setSuccess('Passkey registered successfully!');
      loadPasskeys(); // Reload the list
    } catch (err) {
      console.error('Registration error:', err);
      setError(err instanceof Error ? err.message : 'Failed to register passkey');
    } finally {
      setIsRegistering(false);
    }
  }

  if (!isSupported) {
    return (
      <div className="card border-warning">
        <div className="card-body">
          <h5 className="card-title">
            <i className="bi bi-shield-lock me-2"></i>
            Passkey Authentication
          </h5>
          <p className="text-muted">
            Passkeys are not supported in your current browser. Please use a modern browser that
            supports WebAuthn (Chrome, Safari, Edge, Firefox).
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          <i className="bi bi-shield-lock me-2"></i>
          Passkey Authentication
        </h5>
        <p className="text-muted">
          Passkeys allow you to sign in using your fingerprint, face, or device PIN instead of a
          password. They're more secure and convenient than traditional passwords.
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

        <div className="mb-3">
          <h6>Your Passkeys</h6>
          {passkeys.length === 0 ? (
            <p className="text-muted small">No passkeys registered yet.</p>
          ) : (
            <ul className="list-group">
              {passkeys.map((passkey) => (
                <li key={passkey.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{passkey.device_name}</strong>
                    <br />
                    <small className="text-muted">
                      Created: {new Date(passkey.created_at).toLocaleDateString()}
                      {passkey.last_used_at && (
                        <>
                          {' '}
                          | Last used: {new Date(passkey.last_used_at).toLocaleDateString()}
                        </>
                      )}
                    </small>
                  </div>
                  <button className="btn btn-sm btn-outline-danger">Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          onClick={handleRegisterPasskey}
          className="btn btn-primary"
          disabled={isRegistering}
        >
          {isRegistering ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Registering...
            </>
          ) : (
            <>
              <i className="bi bi-plus-circle me-2"></i>
              Add New Passkey
            </>
          )}
        </button>

        <div className="mt-3">
          <small className="text-muted">
            <strong>Note:</strong> This feature is currently in beta. Full passkey authentication
            including sign-in will be available soon. For now, you can register passkeys that will
            be used once the feature is fully enabled.
          </small>
        </div>
      </div>
    </div>
  );
}
