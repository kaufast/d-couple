/**
 * Server Actions for Admin Operations
 */

'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function updateSubmissionStatus(
  submissionId: string,
  status: 'new' | 'in_progress' | 'resolved' | 'spam'
) {
  const supabase = await createClient();

  // Check if user is admin
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'Unauthorized' };
  }

  const { data: profile } = await supabase
    .from('user_profiles')
    .select('role')
    .eq('id', user.id)
    .single();

  if (profile?.role !== 'admin') {
    return { error: 'Forbidden: Admin access required' };
  }

  // Update submission status
  const { error } = await supabase
    .from('contact_submissions')
    .update({ status })
    .eq('id', submissionId);

  if (error) {
    console.error('Error updating submission status:', error);
    return { error: 'Failed to update status' };
  }

  revalidatePath('/admin/contact-submissions');

  return { success: true };
}

export async function updateUserRole(userId: string, role: 'user' | 'verified_analyst' | 'admin') {
  const supabase = await createClient();

  // Check if user is admin
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'Unauthorized' };
  }

  const { data: profile } = await supabase
    .from('user_profiles')
    .select('role')
    .eq('id', user.id)
    .single();

  if (profile?.role !== 'admin') {
    return { error: 'Forbidden: Admin access required' };
  }

  // Update user role
  const { error } = await supabase
    .from('user_profiles')
    .update({ role })
    .eq('id', userId);

  if (error) {
    console.error('Error updating user role:', error);
    return { error: 'Failed to update role' };
  }

  revalidatePath('/admin/users');

  return { success: true };
}

export async function updateReportStatus(
  reportId: string,
  status: 'pending' | 'under_review' | 'approved' | 'rejected' | 'flagged'
) {
  const supabase = await createClient();

  // Check if user is admin
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'Unauthorized' };
  }

  const { data: profile } = await supabase
    .from('user_profiles')
    .select('role')
    .eq('id', user.id)
    .single();

  if (profile?.role !== 'admin') {
    return { error: 'Forbidden: Admin access required' };
  }

  // Update report status
  const { error } = await supabase.from('reports').update({ status }).eq('id', reportId);

  if (error) {
    console.error('Error updating report status:', error);
    return { error: 'Failed to update status' };
  }

  revalidatePath('/admin/reports');

  return { success: true };
}
