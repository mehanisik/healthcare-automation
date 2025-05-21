'use server';

import { recentActivity } from '#/constants/overview';
import { createClient } from '#/lib/supabase/server';

export async function getRecentActivityFn() {
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('recent_activity').select('*');
    return data || recentActivity;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'An error occurred during get recent activity');
  }
}
