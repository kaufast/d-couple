/**
 * Server Actions for Voting
 */

'use server';

import { revalidatePath } from 'next/cache';
import { createClient } from '@/lib/supabase/server';

export async function voteOnReport(reportId: string, voteWeight: 1 | -1) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'You must be logged in to vote' };
  }

  // Check if report exists and get entity_id
  const { data: report } = await supabase
    .from('reports')
    .select('id, entity_id')
    .eq('id', reportId)
    .single();

  if (!report) {
    return { error: 'Report not found' };
  }

  // Upsert vote (insert if new, update if exists)
  const { error: voteError } = await supabase.from('impact_votes').upsert(
    {
      user_id: user.id,
      report_id: reportId,
      vote_weight: voteWeight,
    },
    {
      onConflict: 'user_id,report_id',
    }
  );

  if (voteError) {
    return { error: voteError.message };
  }

  // The trigger in the database will automatically update the impact_rating
  // We just need to revalidate the paths

  revalidatePath(`/reports/${reportId}`);
  revalidatePath(`/directory/*`);

  return {
    success: true,
  };
}

export async function removeVote(reportId: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'Unauthorized' };
  }

  const { error } = await supabase
    .from('impact_votes')
    .delete()
    .eq('user_id', user.id)
    .eq('report_id', reportId);

  if (error) {
    return { error: error.message };
  }

  revalidatePath(`/reports/${reportId}`);
  revalidatePath(`/directory/*`);

  return {
    success: true,
  };
}

export async function getUserVote(reportId: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data } = await supabase
    .from('impact_votes')
    .select('vote_weight')
    .eq('user_id', user.id)
    .eq('report_id', reportId)
    .single();

  return data?.vote_weight || null;
}
