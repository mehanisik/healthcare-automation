export type KPI = {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
};

export type ProcessPerformance = {
  id: string;
  name: string;
  successRate: number;
  avgTime: string;
  executions: number;
};

export type BotActivity = {
  id: string;
  name: string;
  tasksCompleted: number;
  errorRate: number;
  status: string;
};

export type DashboardAnalyticsProps = {
  kpiData: KPI[];
  processPerformanceData: ProcessPerformance[];
  botActivityData: BotActivity[];
};
