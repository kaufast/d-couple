/**
 * WebAuthn Server Utilities
 * Handles passkey registration and authentication on the server side
 */

'use server';

import {
  generateRegistrationOptions,
  verifyRegistrationResponse,
  generateAuthenticationOptions,
  verifyAuthenticationResponse,
} from '@simplewebauthn/server';
import type {
  GenerateRegistrationOptionsOpts,
  GenerateAuthenticationOptionsOpts,
  VerifyRegistrationResponseOpts,
  VerifyAuthenticationResponseOpts,
} from '@simplewebauthn/server';
import { createClient } from '@/lib/supabase/server';

// WebAuthn configuration
const RP_NAME = 'Strategic Accountability Hub';
const RP_ID = process.env.NEXT_PUBLIC_WEBAUTHN_RP_ID || 'localhost';
const ORIGIN = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

/**
 * Generate registration options for a new passkey
 */
export async function generatePasskeyRegistrationOptions() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'Not authenticated' };
  }

  // Get existing credentials for this user
  const { data: existingCredentials } = await supabase
    .from('webauthn_credentials')
    .select('credential_id')
    .eq('user_id', user.id);

  const excludeCredentials =
    existingCredentials?.map((cred) => ({
      id: cred.credential_id,
    })) || [];

  const options = await generateRegistrationOptions({
    rpName: RP_NAME,
    rpID: RP_ID,
    userID: new TextEncoder().encode(user.id),
    userName: user.email || 'user',
    userDisplayName: user.email || 'User',
    attestationType: 'none',
    excludeCredentials,
    authenticatorSelection: {
      residentKey: 'preferred',
      userVerification: 'preferred',
      authenticatorAttachment: 'platform',
    },
  });

  // Store challenge in session or database for verification
  // For now, we'll return it and expect it back with the response

  return { success: true, options };
}

/**
 * Verify passkey registration response
 */
export async function verifyPasskeyRegistration(response: any, challenge: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'Not authenticated' };
  }

  try {
    const verification = await verifyRegistrationResponse({
      response,
      expectedChallenge: challenge,
      expectedOrigin: ORIGIN,
      expectedRPID: RP_ID,
    });

    if (!verification.verified || !verification.registrationInfo) {
      return { error: 'Verification failed' };
    }

    const { credential } = verification.registrationInfo;

    // Store credential in database
    const { error } = await supabase.from('webauthn_credentials').insert({
      user_id: user.id,
      credential_id: Buffer.from(credential.id).toString('base64'),
      public_key: Buffer.from(credential.publicKey).toString('base64'),
      counter: credential.counter || 0,
      device_name: 'Passkey', // Can be customized by user
      last_used_at: new Date().toISOString(),
    });

    if (error) {
      console.error('Error storing credential:', error);
      return { error: 'Failed to store credential' };
    }

    return { success: true, verified: true };
  } catch (error) {
    console.error('Verification error:', error);
    return { error: 'Verification failed' };
  }
}

/**
 * Generate authentication options for passkey sign-in
 */
export async function generatePasskeyAuthenticationOptions(email?: string) {
  // For discoverable credentials, we don't need to know the user in advance
  const options = await generateAuthenticationOptions({
    rpID: RP_ID,
    userVerification: 'preferred',
  });

  return { success: true, options };
}

/**
 * Verify passkey authentication response
 */
export async function verifyPasskeyAuthentication(response: any, challenge: string) {
  const supabase = await createClient();

  try {
    const credentialID = response.id;

    // Look up the credential
    const { data: credential } = await supabase
      .from('webauthn_credentials')
      .select('*')
      .eq('credential_id', credentialID)
      .single();

    if (!credential) {
      return { error: 'Credential not found' };
    }

    const verification = await verifyAuthenticationResponse({
      response,
      expectedChallenge: challenge,
      expectedOrigin: ORIGIN,
      expectedRPID: RP_ID,
      credential: {
        id: credential.credential_id,
        publicKey: Buffer.from(credential.public_key, 'base64'),
        counter: credential.counter,
      },
    });

    if (!verification.verified) {
      return { error: 'Verification failed' };
    }

    // Update counter and last used timestamp
    await supabase
      .from('webauthn_credentials')
      .update({
        counter: verification.authenticationInfo.newCounter,
        last_used_at: new Date().toISOString(),
      })
      .eq('credential_id', credentialID);

    // Sign in the user (you'll need to implement this with Supabase auth)
    // For now, return the user_id so you can create a session
    return {
      success: true,
      verified: true,
      userId: credential.user_id,
    };
  } catch (error) {
    console.error('Authentication error:', error);
    return { error: 'Authentication failed' };
  }
}
