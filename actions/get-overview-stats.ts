'use server';
import { overviewStats } from '#/constants/overview';
import { createClient } from '#/lib/supabase/server';

export async function getOverviewStatsFn() {
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('overview_stats').select('*');
    return data || overviewStats;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'An error occurred during get overview stats');
  }
}
