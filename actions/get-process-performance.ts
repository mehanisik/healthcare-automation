'use server';

import { processPerformanceData } from '#/constants/analytics';
import { createClient } from '#/lib/supabase/server';

export async function getProcessPerformanceFn() {
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('process_performance').select('*');

    return data || processPerformanceData;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'An error occurred during get process performance');
  }
}
