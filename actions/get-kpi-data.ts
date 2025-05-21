'use server';

import { kpiData } from '#/constants/analytics';
import { createClient } from '#/lib/supabase/server';

export async function getKpiDataFn() {
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('kpi_data').select('*');
    return data || kpiData;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'An error occurred during get kpi data');
  }
}
