'use server';

import { createClient } from '#/lib/supabase/server';

export async function getBotsFn() {
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('bots').select('*');

    return data || [
      {
        id: '1',
        name: 'Claims Processor Bot',
        status: 'active',
        category: 'claims',
        priority: 'high',
        lastActive: '2024-02-20T10:30:00Z',
        tasksCompleted: 150,
        uptime: '99.9%',
        performance: {
          successRate: 98.5,
          errorRate: 1.5,
          executionTime: '2.5s',
        },
        schedule: {
          frequency: 'Every 15 minutes',
          nextRun: '2024-02-20T10:45:00Z',
          timeZone: 'UTC',
        },
        resources: {
          cpu: '25%',
          memory: '512MB',
          storage: '1GB',
        },
        automation: {
          type: 'Claims Processing',
          complexity: 'High',
          integrations: ['EMR', 'Billing System', 'Insurance Portal'],
          lastUpdated: '2024-02-19T15:00:00Z',
        },
      },
      {
        id: '2',
        name: 'Data Sync Bot',
        status: 'idle',
        category: 'data-sync',
        priority: 'medium',
        lastActive: '2024-02-20T09:15:00Z',
        tasksCompleted: 75,
        uptime: '99.5%',
        performance: {
          successRate: 99.0,
          errorRate: 1.0,
          executionTime: '1.8s',
        },
        schedule: {
          frequency: 'Hourly',
          nextRun: '2024-02-20T10:00:00Z',
          timeZone: 'UTC',
        },
        resources: {
          cpu: '15%',
          memory: '256MB',
          storage: '500MB',
        },
        automation: {
          type: 'Data Synchronization',
          complexity: 'Medium',
          integrations: ['Database', 'API Gateway'],
          lastUpdated: '2024-02-18T10:00:00Z',
        },
      },
      {
        id: '3',
        name: 'Report Generator Bot',
        status: 'scheduled',
        category: 'report',
        priority: 'low',
        lastActive: '2024-02-20T08:00:00Z',
        tasksCompleted: 30,
        uptime: '100%',
        performance: {
          successRate: 100,
          errorRate: 0,
          executionTime: '5.2s',
        },
        schedule: {
          frequency: 'Daily',
          nextRun: '2024-02-21T00:00:00Z',
          timeZone: 'UTC',
        },
        resources: {
          cpu: '35%',
          memory: '1GB',
          storage: '2GB',
        },
        automation: {
          type: 'Report Generation',
          complexity: 'Medium',
          integrations: ['Analytics Platform', 'Email System'],
          lastUpdated: '2024-02-17T14:30:00Z',
        },
      },
      {
        id: '4',
        name: 'Patient Records Bot',
        status: 'maintenance',
        category: 'records',
        priority: 'high',
        lastActive: '2024-02-20T07:45:00Z',
        tasksCompleted: 200,
        uptime: '99.7%',
        performance: {
          successRate: 99.5,
          errorRate: 0.5,
          executionTime: '3.1s',
        },
        schedule: {
          frequency: 'Every 30 minutes',
          nextRun: '2024-02-20T10:30:00Z',
          timeZone: 'UTC',
        },
        resources: {
          cpu: '20%',
          memory: '768MB',
          storage: '1.5GB',
        },
        automation: {
          type: 'Patient Records Management',
          complexity: 'High',
          integrations: ['EMR', 'Patient Portal', 'Archive System'],
          lastUpdated: '2024-02-20T08:00:00Z',
        },
      },
    ];
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'An error occurred during getBotsFn');
  }
}
