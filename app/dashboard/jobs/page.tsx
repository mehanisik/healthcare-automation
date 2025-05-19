import { Badge } from '#/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
import { AlertCircle, CheckCircle2, Clock, PlayCircle } from 'lucide-react';

// Fake data for jobs
const jobs = [
  {
    id: 1,
    name: 'Daily Claims Processing',
    status: 'running',
    progress: 75,
    startTime: '08:00 AM',
    estimatedEnd: '09:30 AM',
    bot: 'Claims Processor Bot',
  },
  {
    id: 2,
    name: 'Patient Records Update',
    status: 'completed',
    progress: 100,
    startTime: '07:00 AM',
    estimatedEnd: '07:45 AM',
    bot: 'Data Sync Bot',
  },
  {
    id: 3,
    name: 'Monthly Report Generation',
    status: 'scheduled',
    progress: 0,
    startTime: '10:00 AM',
    estimatedEnd: '11:00 AM',
    bot: 'Report Generator Bot',
  },
  {
    id: 4,
    name: 'Insurance Verification',
    status: 'failed',
    progress: 45,
    startTime: '09:00 AM',
    estimatedEnd: '09:30 AM',
    bot: 'Claims Processor Bot',
  },
];

const statusConfig = {
  running: { icon: PlayCircle, color: 'text-blue-500', text: 'Running' },
  completed: { icon: CheckCircle2, color: 'text-green-500', text: 'Completed' },
  scheduled: { icon: Clock, color: 'text-yellow-500', text: 'Scheduled' },
  failed: { icon: AlertCircle, color: 'text-red-500', text: 'Failed' },
};

export default function JobsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Jobs</h1>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => {
          const status = statusConfig[job.status as keyof typeof statusConfig];
          const StatusIcon = status.icon;

          return (
            <Card key={job.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{job.name}</CardTitle>
                <Badge variant="outline" className="flex items-center gap-1">
                  <StatusIcon className={`h-3 w-3 ${status.color}`} />
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
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${job.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
