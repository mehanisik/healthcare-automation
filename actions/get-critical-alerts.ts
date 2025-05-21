'use server';
import { criticalAlerts } from '#/constants/overview';
import { createClient } from '#/lib/supabase/server';

export async function getCriticalAlertsFn() {
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('critical_alerts').select('*');

    return data || criticalAlerts;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'An error occurred during get critical alerts');
  }
}
