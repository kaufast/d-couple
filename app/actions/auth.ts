/**
 * Server Actions for Authentication
 */

'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { signUpSchema, signInSchema } from '@/lib/validations/auth';

export async function signUp(formData: FormData) {
  const supabase = await createClient();

  // Validate input
  const rawData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    display_name: formData.get('display_name') as string,
  };

  const validation = signUpSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      error: validation.error.errors[0].message,
    };
  }

  const { email, password, display_name } = validation.data;

  // Sign up the user
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: display_name || email.split('@')[0],
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  revalidatePath('/', 'layout');

  return {
    success: true,
    message: 'Check your email to confirm your account.',
  };
}

export async function signIn(formData: FormData) {
  const supabase = await createClient();

  // Validate input
  const rawData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const validation = signInSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      error: validation.error.errors[0].message,
    };
  }

  const { email, password } = validation.data;

  // Sign in the user
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  revalidatePath('/', 'layout');

  // Check if user is admin and redirect accordingly
  if (data.user) {
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('role')
      .eq('id', data.user.id)
      .single();

    if (profile?.role === 'admin') {
      redirect('/admin');
    }
  }

  redirect('/directory');
}

export async function signOut() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    return {
      error: error.message,
    };
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function resetPassword(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get('email') as string;

  if (!email) {
    return {
      error: 'Email is required',
    };
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password/confirm`,
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  return {
    success: true,
    message: 'Check your email for the password reset link.',
  };
}

export async function updatePassword(formData: FormData) {
  const supabase = await createClient();

  const password = formData.get('password') as string;

  if (!password || password.length < 8) {
    return {
      error: 'Password must be at least 8 characters',
    };
  }

  const { error } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  revalidatePath('/', 'layout');

  return {
    success: true,
    message: 'Password updated successfully',
  };
}

export async function getUser() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function getUserProfile() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data: profile } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  return profile;
}
