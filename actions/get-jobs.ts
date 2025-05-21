'use server';

import { createClient } from '#/lib/supabase/server';

export async function getJobsFn() {
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('jobs').select('*');

    return data || [{
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
    }, {
      id: 2,
      name: 'Patient Records Update',
      status: 'completed',
      progress: 100,
      startTime: '07:00 AM',
      estimatedEnd: '07:45 AM',
      bot: 'Data Sync Bot',
      lastRun: 'Today, 07:00 AM',
      nextRun: 'Tomorrow, 07:00 AM',
      trigger: 'scheduled',
      duration: '45m',
      history: [
        { status: 'completed', time: 'Yesterday, 07:00 AM', duration: '44m' },
        { status: 'completed', time: '2 days ago, 07:00 AM', duration: '45m' },
        { status: 'completed', time: '3 days ago, 07:00 AM', duration: '46m' },
      ],
    }, {
      id: 3,
      name: 'Monthly Report Generation',
      status: 'scheduled',
      progress: 0,
      startTime: '10:00 AM',
      estimatedEnd: '11:00 AM',
      bot: 'Report Generator Bot',
      lastRun: 'Last month, 10:00 AM',
      nextRun: 'Next month, 10:00 AM',
      trigger: 'manual',
      duration: '-',
      history: [
        { status: 'completed', time: 'Last month, 10:00 AM', duration: '1h' },
        { status: 'completed', time: '2 months ago, 10:00 AM', duration: '1h 2m' },
        { status: 'completed', time: '3 months ago, 10:00 AM', duration: '1h 1m' },
      ],
    }, {
      id: 4,
      name: 'Insurance Verification',
      status: 'failed',
      progress: 45,
      startTime: '09:00 AM',
      estimatedEnd: '09:30 AM',
      bot: 'Claims Processor Bot',
      lastRun: 'Today, 09:00 AM',
      nextRun: 'Tomorrow, 09:00 AM',
      trigger: 'event',
      duration: '30m',
      errorMessage: 'Connection to insurance API failed',
      history: [
        { status: 'failed', time: 'Today, 09:00 AM', duration: '30m' },
        { status: 'completed', time: 'Yesterday, 09:00 AM', duration: '29m' },
        { status: 'completed', time: '2 days ago, 09:00 AM', duration: '30m' },
      ],
    }];
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'An error occurred during getJobFn');
  }
}
