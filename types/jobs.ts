export type JobRun = {
  status: 'running' | 'completed' | 'failed';
  time: string;
  duration: string;
};

export type Job = {
  id: number;
  name: string;
  status: 'running' | 'completed' | 'scheduled' | 'failed';
  progress: number;
  startTime: string;
  estimatedEnd: string;
  bot: string;
  lastRun: string;
  nextRun: string;
  trigger: 'manual' | 'scheduled' | 'event';
  duration: string;
  errorMessage?: string;
  history: JobRun[];
};
