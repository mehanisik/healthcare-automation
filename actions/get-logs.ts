'use server';

import { createClient } from '#/lib/supabase/server';

export async function getLogsFn() {
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('logs').select('*');

    return data || [
      { id: 'log1', timestamp: new Date(2024, 6, 20, 10, 30, 15), level: 'INFO', bot: 'Bot-Alpha-001', job: 'Invoice Processing - Batch 123', message: 'Started processing batch of 50 invoices.', details: { batchId: '123', count: 50 } },
      { id: 'log2', timestamp: new Date(2024, 6, 20, 10, 32, 45), level: 'SUCCESS', bot: 'Bot-Alpha-001', job: 'Invoice Processing - Batch 123', message: 'Invoice INV001 processed successfully.', details: { invoiceId: 'INV001', amount: 1250.75 } },
      { id: 'log3', timestamp: new Date(2024, 6, 20, 10, 33, 5), level: 'WARNING', bot: 'Bot-Beta-007', job: 'User Onboarding - User JaneDoe', message: 'Optional field "Department" not found for user JaneDoe.', details: { userId: 'JaneDoe', field: 'Department' } },
      { id: 'log4', timestamp: new Date(2024, 6, 20, 10, 35, 20), level: 'ERROR', bot: 'Bot-Alpha-001', job: 'Invoice Processing - Batch 123', message: 'Failed to connect to payment gateway for invoice INV002.', details: { invoiceId: 'INV002', errorCode: 'GW_TIMEOUT' } },
      { id: 'log5', timestamp: new Date(2024, 6, 20, 10, 38, 0), level: 'INFO', bot: 'Bot-Gamma-003', job: 'Data Reconciliation - Daily Sync', message: 'Data reconciliation started.', details: {} },
      { id: 'log6', timestamp: new Date(2024, 6, 20, 10, 45, 10), level: 'DEBUG', bot: 'Bot-Alpha-001', job: 'Invoice Processing - Batch 123', message: 'Retrying connection to payment gateway, attempt 2/3.', details: { retryCount: 2 } },
    ];
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'An error occurred during getLogsFn');
  }
}
