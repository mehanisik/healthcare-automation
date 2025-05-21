import type { Job } from '#/types/jobs';
import { Badge } from '#/components/ui/badge';
import { Button } from '#/components/ui/button';
import { jobStatusIconColor } from '#/components/utilities/statusColors';
import { statusConfig } from '#/constants/jobs';
import { CalendarClock, PlayCircle, Repeat, Trash2 } from 'lucide-react';

export const DashboardJob = ({ job }: { job: Job }) => {
  const status = statusConfig[job.status];
  const StatusIcon = status.icon;

  return (
    <div className="max-w-2xl mx-auto py-8 space-y-6">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">{job.name}</h1>
        <Badge variant={status.variant} className="flex items-center gap-1">
          <StatusIcon className={`h-4 w-4 ${jobStatusIconColor[job.status]}`} />
          {status.text}
        </Badge>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-sm text-muted-foreground">Bot</div>
          <div>{job.bot}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Trigger</div>
          <div>{job.trigger}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Start Time</div>
          <div>{job.startTime}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Estimated End</div>
          <div>{job.estimatedEnd}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Last Run</div>
          <div>{job.lastRun}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Next Run</div>
          <div>{job.nextRun}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Duration</div>
          <div>{job.duration}</div>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <Button size="sm" variant="default">
          <PlayCircle className="h-4 w-4 mr-1 text-primary-foreground" />
          Run
        </Button>
        <Button size="sm" variant="outline">
          <CalendarClock className="h-4 w-4 mr-1 text-accent" />
          Reschedule
        </Button>
        <Button size="sm" variant="outline">
          <Repeat className="h-4 w-4 mr-1 text-primary" />
          Rerun
        </Button>
        <Button size="sm" variant="destructive">
          <Trash2 className="h-4 w-4 mr-1" />
          Delete
        </Button>
      </div>
      <div className="mt-8">
        <div className="text-lg font-semibold mb-2">Run History</div>
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
                      <RunIcon className={`h-3 w-3 ${jobStatusIconColor ? jobStatusIconColor[run.status] : ''}`} />
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
      <div className="mt-8">
        <div className="text-lg font-semibold mb-2">Logs</div>
        <div className="bg-muted rounded p-4 text-xs text-muted-foreground">
          <pre>
            <code>
              {`
2024-06-10 08:00:01 [INFO]  Job started: Daily Claims Processing
2024-06-10 08:00:05 [INFO]  Fetching claims from database
2024-06-10 08:00:10 [INFO]  Processing claim #12345
2024-06-10 08:00:12 [INFO]  Processing claim #12346
2024-06-10 08:00:15 [WARN]  Slow response from insurance API
2024-06-10 08:00:20 [INFO]  Processing claim #12347
2024-06-10 08:01:00 [INFO]  All claims processed successfully
2024-06-10 08:01:01 [INFO]  Job completed in 1m 0s
`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};
