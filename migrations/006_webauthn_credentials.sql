/**
 * WebAuthn/Passkey Credentials Table
 * Stores public key credentials for passwordless authentication
 */

-- Create webauthn_credentials table
CREATE TABLE IF NOT EXISTS webauthn_credentials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,

  -- WebAuthn credential data
  credential_id TEXT NOT NULL UNIQUE,
  public_key TEXT NOT NULL,
  counter BIGINT NOT NULL DEFAULT 0,

  -- Device information
  device_name TEXT,
  transports TEXT[], -- e.g., ['usb', 'nfc', 'ble', 'internal']

  -- Metadata
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_used_at TIMESTAMPTZ,

  CONSTRAINT webauthn_credentials_user_id_fkey
    FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_webauthn_credentials_user_id ON webauthn_credentials(user_id);
CREATE INDEX IF NOT EXISTS idx_webauthn_credentials_credential_id ON webauthn_credentials(credential_id);

-- Enable Row-Level Security
ALTER TABLE webauthn_credentials ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Users can view their own credentials
CREATE POLICY "Users can view own webauthn credentials"
ON webauthn_credentials
FOR SELECT
USING (auth.uid() = user_id);

-- Users can insert their own credentials
CREATE POLICY "Users can insert own webauthn credentials"
ON webauthn_credentials
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can delete their own credentials
CREATE POLICY "Users can delete own webauthn credentials"
ON webauthn_credentials
FOR DELETE
USING (auth.uid() = user_id);

-- Users can update their own credentials (for counter and last_used_at)
CREATE POLICY "Users can update own webauthn credentials"
ON webauthn_credentials
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

COMMENT ON TABLE webauthn_credentials IS 'Stores WebAuthn public key credentials for passwordless authentication (passkeys)';
COMMENT ON COLUMN webauthn_credentials.credential_id IS 'Base64-encoded credential ID from the authenticator';
COMMENT ON COLUMN webauthn_credentials.public_key IS 'Base64-encoded public key';
COMMENT ON COLUMN webauthn_credentials.counter IS 'Signature counter for replay attack prevention';
COMMENT ON COLUMN webauthn_credentials.transports IS 'Authenticator transport types (usb, nfc, ble, internal)';
