import type { BotActivity, KPI, ProcessPerformance } from '#/types/analytics';

export const kpiData: KPI[] = [
  { id: 'totalAutomations', title: 'Total Automations Executed', value: '12,345', change: '+5.2%', trend: 'up' },
  { id: 'successRate', title: 'Overall Success Rate', value: '98.7%', change: '+0.1%', trend: 'up' },
  { id: 'avgProcessingTime', title: 'Avg. Processing Time', value: '3m 15s', change: '-10s', trend: 'down' },
  { id: 'estimatedSavings', title: 'Estimated Savings', value: '$45,678', change: '+$1.2k', trend: 'up' },
];

export const processPerformanceData: ProcessPerformance[] = [
  { id: 'p1', name: 'Invoice Processing', successRate: 99.2, avgTime: '2m 30s', executions: 5230 },
  { id: 'p2', name: 'User Onboarding', successRate: 97.5, avgTime: '5m 10s', executions: 2100 },
  { id: 'p3', name: 'Data Reconciliation', successRate: 99.8, avgTime: '1m 45s', executions: 3500 },
];

export const botActivityData: BotActivity[] = [
  { id: 'b1', name: 'Bot-Alpha-001', tasksCompleted: 4820, errorRate: 0.8, status: 'Active' },
  { id: 'b2', name: 'Bot-Beta-007', tasksCompleted: 3950, errorRate: 1.2, status: 'Active' },
  { id: 'b3', name: 'Bot-Gamma-003', tasksCompleted: 3575, errorRate: 0.5, status: 'Idle' },
];
