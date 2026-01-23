/**
 * Server Actions for Reports
 */

'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/redirect';
import { createClient } from '@/lib/supabase/server';
import { reportSchema, reportUpdateSchema, reportModerationSchema } from '@/lib/validations/report';
import { sanitizeHTML, sanitizePlainText } from '@/lib/utils/sanitize';

export async function submitReport(formData: FormData) {
  const supabase = await createClient();

  // Get authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'You must be logged in to submit a report' };
  }

  // Check if user is verified
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('role, is_verified')
    .eq('id', user.id)
    .single();

  if (!profile?.is_verified && profile?.role === 'contributor') {
    return {
      error: 'Your account must be verified to submit reports. Please contact an administrator.',
    };
  }

  // Validate input
  const rawData = {
    entity_id: formData.get('entity_id') as string,
    category: formData.get('category') as string,
    classification: formData.get('classification') as string,
    title: formData.get('title') as string,
    content: formData.get('content') as string,
    sources: formData.get('sources')
      ? (formData.get('sources') as string).split('\n').filter(Boolean)
      : [],
    tags: formData.get('tags')
      ? (formData.get('tags') as string).split(',').map((t) => t.trim()).filter(Boolean)
      : [],
  };

  const validation = reportSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      error: 'Validation failed',
      details: validation.error.errors[0].message,
    };
  }

  const { entity_id, category, classification, title, content, sources, tags } = validation.data;

  // Sanitize content
  const sanitizedTitle = sanitizePlainText(title);
  const sanitizedContent = sanitizeHTML(content);

  // Determine initial status based on user role
  const status =
    profile.role === 'verified_analyst' || profile.role === 'admin'
      ? 'approved'
      : 'under_review';

  // Insert report
  const { data, error } = await supabase
    .from('reports')
    .insert({
      author_id: user.id,
      entity_id,
      category,
      classification,
      title: sanitizedTitle,
      content: sanitizedContent,
      sources,
      tags,
      status,
    })
    .select()
    .single();

  if (error) {
    return { error: error.message };
  }

  // Revalidate entity page
  revalidatePath(`/directory/${entity_id}`);
  revalidatePath('/directory');

  return {
    success: true,
    report: data,
    message: status === 'approved' ? 'Report published successfully!' : 'Report submitted for review.',
  };
}

export async function updateReport(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'Unauthorized' };
  }

  const reportId = formData.get('id') as string;

  // Check if user owns the report
  const { data: report } = await supabase
    .from('reports')
    .select('author_id, status, entity_id')
    .eq('id', reportId)
    .single();

  if (!report) {
    return { error: 'Report not found' };
  }

  if (report.author_id !== user.id) {
    return { error: 'You can only edit your own reports' };
  }

  if (report.status !== 'under_review') {
    return { error: 'You can only edit reports that are under review' };
  }

  // Validate and sanitize input
  const rawData = {
    id: reportId,
    title: formData.get('title') as string,
    content: formData.get('content') as string,
    category: formData.get('category') as string,
    classification: formData.get('classification') as string,
    sources: formData.get('sources')
      ? (formData.get('sources') as string).split('\n').filter(Boolean)
      : undefined,
    tags: formData.get('tags')
      ? (formData.get('tags') as string).split(',').map((t) => t.trim()).filter(Boolean)
      : undefined,
  };

  const validation = reportUpdateSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      error: 'Validation failed',
      details: validation.error.errors[0].message,
    };
  }

  const updateData: any = { ...validation.data };
  delete updateData.id;

  if (updateData.title) {
    updateData.title = sanitizePlainText(updateData.title);
  }

  if (updateData.content) {
    updateData.content = sanitizeHTML(updateData.content);
  }

  const { error } = await supabase
    .from('reports')
    .update(updateData)
    .eq('id', reportId);

  if (error) {
    return { error: error.message };
  }

  revalidatePath(`/reports/${reportId}`);
  revalidatePath(`/directory/${report.entity_id}`);

  return {
    success: true,
    message: 'Report updated successfully',
  };
}

export async function deleteReport(reportId: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'Unauthorized' };
  }

  // Check if user owns the report
  const { data: report } = await supabase
    .from('reports')
    .select('author_id, status, entity_id')
    .eq('id', reportId)
    .single();

  if (!report) {
    return { error: 'Report not found' };
  }

  if (report.author_id !== user.id) {
    // Check if user is admin
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (profile?.role !== 'admin') {
      return { error: 'You can only delete your own reports' };
    }
  }

  const { error } = await supabase.from('reports').delete().eq('id', reportId);

  if (error) {
    return { error: error.message };
  }

  revalidatePath(`/directory/${report.entity_id}`);
  revalidatePath('/directory');

  return {
    success: true,
    message: 'Report deleted successfully',
  };
}

export async function moderateReport(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'Unauthorized' };
  }

  // Check if user is admin
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('role')
    .eq('id', user.id)
    .single();

  if (profile?.role !== 'admin') {
    return { error: 'Only admins can moderate reports' };
  }

  const rawData = {
    id: formData.get('id') as string,
    status: formData.get('status') as string,
    moderation_note: formData.get('moderation_note') as string,
  };

  const validation = reportModerationSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      error: 'Validation failed',
      details: validation.error.errors[0].message,
    };
  }

  const { id, status } = validation.data;

  const { data: report, error } = await supabase
    .from('reports')
    .update({ status })
    .eq('id', id)
    .select('entity_id')
    .single();

  if (error) {
    return { error: error.message };
  }

  revalidatePath(`/reports/${id}`);
  revalidatePath(`/directory/${report.entity_id}`);

  return {
    success: true,
    message: 'Report moderation updated',
  };
}
