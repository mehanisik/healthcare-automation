export type BotStatus = 'active' | 'idle' | 'error' | 'maintenance' | 'scheduled' | 'paused';
export type BotCategory = 'claims' | 'data-sync' | 'report' | 'records' | 'billing' | 'compliance';
export type BotPriority = 'high' | 'medium' | 'low';

export type Bot = {
  id: string;
  name: string;
  status: BotStatus;
  category: BotCategory;
  priority: BotPriority;
  lastActive: string;
  tasksCompleted: number;
  uptime: string;
  performance: {
    successRate: number;
    errorRate: number;
    executionTime: string;
  };
  schedule: {
    frequency: string;
    nextRun: string;
    timeZone: string;
  };
  resources: {
    cpu: string;
    memory: string;
    storage: string;
  };
  automation: {
    type: string;
    complexity: string;
    integrations: string[];
    lastUpdated: string;
  };
};
