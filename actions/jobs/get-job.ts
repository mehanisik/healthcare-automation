'use server';

import { createClient } from '#/db/supabase/server';

export async function getJobFn(jobId: number) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from('jobs').select('*').eq('id', jobId).single();
    if (!data) {
      return {
        id: 1,
        name: 'Daily Claims Processing',
        status: 'running',
        progress: 75,
        startTime: '08:00 AM',
        estimatedEnd: '09:30 AM',
        bot: 'Claims Processor Bot',
        lastRun: 'Today, 08:00 AM',
        nextRun: 'Tomorrow, 08:00 AM',
        trigger: 'scheduled',
        duration: '1h 30m',
        history: [
          { status: 'completed', time: 'Yesterday, 08:00 AM', duration: '1h 28m' },
          { status: 'completed', time: '2 days ago, 08:00 AM', duration: '1h 31m' },
          { status: 'failed', time: '3 days ago, 08:00 AM', duration: '0h 45m' },
        ],
      };
    }
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'An error occurred during getJobFn');
  }
}
