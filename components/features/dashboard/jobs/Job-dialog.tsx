import type { Job } from '#/types/jobs';
import { Badge } from '#/components/ui/badge';
import { Button } from '#/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '#/components/ui/dialog';
import { jobStatusIconColor } from '#/components/utilities/statusColors';
import { statusConfig, triggerConfig } from '#/constants/jobs';
import React from 'react';

export function JobDialog({ job, onClose }: { job: Job; onClose: () => void }) {
  const status = statusConfig[job.status];
  const StatusIcon = status.icon;
  const trigger = triggerConfig[job.trigger];

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {job.name}
            <Badge variant="outline" className={`flex items-center gap-1 w-fit ${status.variant}`}>
              <StatusIcon className={`h-3 w-3 ${status.variant}`} />
              {status.text}
            </Badge>
            <span className={`px-2 py-0.5 rounded text-xs font-semibold ${trigger.badge}`}>{trigger.text}</span>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-2 mt-2">
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
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Last Run</span>
            <span>{job.lastRun}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Next Run</span>
            <span>{job.nextRun}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Duration</span>
            <span>{job.duration}</span>
          </div>
          {job.status === 'failed' && job.errorMessage && (
            <div className="text-destructive text-xs mt-2 flex items-center gap-1">
              {job.errorMessage}
            </div>
          )}
        </div>
        <div className="mt-4">
          <div className="text-xs text-muted-foreground mb-1">Full Run History</div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs border">
              <thead>
                <tr className="bg-muted">
                  <th className="px-2 py-1 text-left">Status</th>
                  <th className="px-2 py-1 text-left">Time</th>
                  <th className="px-2 py-1 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                {job.history.map((run) => {
                  const runStatus = statusConfig[run.status];
                  const RunIcon = runStatus.icon;
                  return (
                    <tr key={crypto.randomUUID()}>
                      <td className="px-2 py-1">
                        <Badge variant={runStatus.variant} className="flex items-center gap-1">
                          <RunIcon className={`h-3 w-3 ${jobStatusIconColor[run.status]}`} />
                          {run.status.charAt(0).toUpperCase() + run.status.slice(1)}
                        </Badge>
                      </td>
                      <td className="px-2 py-1">{run.time}</td>
                      <td className="px-2 py-1">{run.duration}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
