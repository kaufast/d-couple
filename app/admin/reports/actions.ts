'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function approveReport(reportId: string) {
  try {
    const supabase = await createClient();

    // Verify admin access
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return { success: false, error: 'Not authenticated' };
    }

    const { data: profile } = await supabase
      .from('user_profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (profile?.role !== 'admin') {
      return { success: false, error: 'Unauthorized' };
    }

    // Update report status to published
    const { error } = await supabase
      .from('reports')
      .update({
        status: 'published',
        reviewed_by: user.id,
        reviewed_at: new Date().toISOString(),
      })
      .eq('id', reportId);

    if (error) {
      console.error('Error approving report:', error);
      return { success: false, error: error.message };
    }

    // Revalidate homepage and directory to show new report
    revalidatePath('/');
    revalidatePath('/directory');
    revalidatePath('/admin/reports');

    return { success: true };
  } catch (error) {
    console.error('Error in approveReport:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}

export async function rejectReport(reportId: string, reason: string) {
  try {
    const supabase = await createClient();

    // Verify admin access
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return { success: false, error: 'Not authenticated' };
    }

    const { data: profile } = await supabase
      .from('user_profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (profile?.role !== 'admin') {
      return { success: false, error: 'Unauthorized' };
    }

    // Update report status to rejected
    const { error } = await supabase
      .from('reports')
      .update({
        status: 'rejected',
        rejection_reason: reason,
        reviewed_by: user.id,
        reviewed_at: new Date().toISOString(),
      })
      .eq('id', reportId);

    if (error) {
      console.error('Error rejecting report:', error);
      return { success: false, error: error.message };
    }

    // TODO: Send notification email to contributor
    // Include rejection reason and guidance for improvement

    revalidatePath('/admin/reports');

    return { success: true };
  } catch (error) {
    console.error('Error in rejectReport:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}

export async function returnForSanitization(reportId: string, feedback: string) {
  try {
    const supabase = await createClient();

    // Verify admin access
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return { success: false, error: 'Not authenticated' };
    }

    const { data: profile } = await supabase
      .from('user_profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (profile?.role !== 'admin') {
      return { success: false, error: 'Unauthorized' };
    }

    // Update report status back to draft with feedback
    const { error } = await supabase
      .from('reports')
      .update({
        status: 'draft',
        sanitization_feedback: feedback,
        reviewed_by: user.id,
        reviewed_at: new Date().toISOString(),
      })
      .eq('id', reportId);

    if (error) {
      console.error('Error returning report for sanitization:', error);
      return { success: false, error: error.message };
    }

    // TODO: Send notification email to contributor
    // Include sanitization feedback and Data Handling Protocol reminders

    revalidatePath('/admin/reports');

    return { success: true };
  } catch (error) {
    console.error('Error in returnForSanitization:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}

export async function bulkApprove(reportIds: string[]) {
  try {
    const supabase = await createClient();

    // Verify admin access
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return { success: false, error: 'Not authenticated' };
    }

    const { data: profile } = await supabase
      .from('user_profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (profile?.role !== 'admin') {
      return { success: false, error: 'Unauthorized' };
    }

    // Bulk update reports to published
    const { error } = await supabase
      .from('reports')
      .update({
        status: 'published',
        reviewed_by: user.id,
        reviewed_at: new Date().toISOString(),
      })
      .in('id', reportIds);

    if (error) {
      console.error('Error bulk approving reports:', error);
      return { success: false, error: error.message };
    }

    // Revalidate relevant pages
    revalidatePath('/');
    revalidatePath('/directory');
    revalidatePath('/admin/reports');

    return { success: true, count: reportIds.length };
  } catch (error) {
    console.error('Error in bulkApprove:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}
