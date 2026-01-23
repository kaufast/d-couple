/**
 * Auth Callback Route
 * Handles authentication callback from Supabase (email confirmation, OAuth, etc.)
 */

import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const next = requestUrl.searchParams.get('next') ?? '/directory';

  if (code) {
    const supabase = await createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  // Redirect to the next URL or default to directory
  return NextResponse.redirect(new URL(next, request.url));
}
