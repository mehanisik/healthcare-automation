import { randomUUID } from 'node:crypto';
import { Badge } from '#/components/ui/badge';
import { Button } from '#/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
import { jobStatusIconColor } from '#/components/utilities/statusColors';
import { AlertCircle, CheckCircle2, Clock, FileText, PlayCircle, RefreshCw } from 'lucide-react';
import React from 'react';

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

export const statusConfig = {
  running: { icon: PlayCircle, variant: 'default', text: 'Running' },
  completed: { icon: CheckCircle2, variant: 'secondary', text: 'Completed' },
  scheduled: { icon: Clock, variant: 'outline', text: 'Scheduled' },
  failed: { icon: AlertCircle, variant: 'destructive', text: 'Failed' },
} as const;

const triggerConfig = {
  manual: { badge: 'bg-muted text-muted-foreground', text: 'Manual' },
  scheduled: { badge: 'bg-primary/10 text-primary-foreground', text: 'Scheduled' },
  event: { badge: 'bg-accent/10 text-accent-foreground', text: 'Event' },
};

type JobCardProps = {
  job: Job;
};

export function JobCard({ job }: JobCardProps) {
  const status = statusConfig[job.status];
  const StatusIcon = status.icon;
  const trigger = triggerConfig[job.trigger];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex flex-col gap-1">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            {job.name}
            <span className={`px-2 py-0.5 rounded text-xs font-semibold ${trigger.badge}`}>{trigger.text}</span>
          </CardTitle>
          <div className="flex gap-2 text-xs text-muted-foreground">
            <span>
              Last run:
              {job.lastRun}
            </span>
            <span>
              Next:
              {job.nextRun}
            </span>
            <span>
              Duration:
              {job.duration}
            </span>
          </div>
        </div>
        <Badge variant={status.variant} className="flex items-center gap-1">
          <StatusIcon className={`h-3 w-3 ${jobStatusIconColor[job.status]}`} />
          {status.text}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Bot</span>
            <span>{job.bot}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Start Time</span>
            <span>{job.startTime}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Estimated End</span>
            <span>{job.estimatedEnd}</span>
          </div>
          {job.status === 'running' && (
            <div className="mt-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Progress</span>
                <span>
                  {job.progress}
                  %
                </span>
              </div>
              <div className="w-full bg-primary/10 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${job.progress}%` }}
                />
              </div>
            </div>
          )}
          {job.status === 'failed' && job.errorMessage && (
            <div className="text-destructive text-xs mt-2 flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              {job.errorMessage}
            </div>
          )}
          <div className="flex gap-2 mt-3">
            <Button size="sm" variant="outline">
              <PlayCircle className="h-4 w-4 mr-1" />
              Run Now
            </Button>
            <Button size="sm" variant="outline">
              <FileText className="h-4 w-4 mr-1" />
              View Logs
            </Button>
            {job.status === 'failed' && (
              <Button size="sm" variant="outline">
                <RefreshCw className="h-4 w-4 mr-1" />
                Retry
              </Button>
            )}
          </div>
          <div className="mt-4">
            <div className="text-xs text-muted-foreground mb-1">Recent Runs</div>
            <ul className="space-y-1">
              {job.history.slice(0, 3).map((run) => {
                const runStatus = statusConfig[run.status];
                const RunIcon = runStatus.icon;
                return (
                  <li key={randomUUID()} className="flex items-center gap-2 text-xs">
                    <Badge variant={runStatus.variant} className="flex items-center gap-1">
                      <RunIcon className={`h-3 w-3 ${jobStatusIconColor[run.status]}`} />
                      <span>{run.status.charAt(0).toUpperCase() + run.status.slice(1)}</span>
                    </Badge>
                    <span className="ml-2 text-muted-foreground">{run.time}</span>
                    <span className="ml-2">{run.duration}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
