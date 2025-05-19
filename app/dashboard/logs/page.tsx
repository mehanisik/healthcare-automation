import { Badge } from '#/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
import { AlertCircle, CheckCircle2, Clock, Info } from 'lucide-react';

// Fake data for logs
const logs = [
  {
    id: 1,
    timestamp: '2024-03-20 09:15:23',
    level: 'info',
    message: 'Claims Processing Bot started',
    bot: 'Claims Processor Bot',
    details: 'Initializing data connection...',
  },
  {
    id: 2,
    timestamp: '2024-03-20 09:15:45',
    level: 'success',
    message: 'Data sync completed successfully',
    bot: 'Data Sync Bot',
    details: 'Processed 1,234 records',
  },
  {
    id: 3,
    timestamp: '2024-03-20 09:16:12',
    level: 'warning',
    message: 'High memory usage detected',
    bot: 'Report Generator Bot',
    details: 'Memory usage at 85%',
  },
  {
    id: 4,
    timestamp: '2024-03-20 09:16:30',
    level: 'error',
    message: 'Failed to connect to database',
    bot: 'Patient Records Bot',
    details: 'Connection timeout after 30 seconds',
  },
];

const levelConfig = {
  info: { icon: Info, color: 'text-blue-500', bg: 'bg-blue-100', text: 'Info' },
  success: { icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-100', text: 'Success' },
  warning: { icon: Clock, color: 'text-yellow-500', bg: 'bg-yellow-100', text: 'Warning' },
  error: { icon: AlertCircle, color: 'text-red-500', bg: 'bg-red-100', text: 'Error' },
};

export default function LogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Logs</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {logs.map((log) => {
              const level = levelConfig[log.level as keyof typeof levelConfig];
              const LevelIcon = level.icon;

              return (
                <div
                  key={log.id}
                  className="flex items-start space-x-4 border-b pb-4 last:border-0"
                >
                  <div className="mt-1">
                    <LevelIcon className={`h-4 w-4 ${level.color}`} />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{log.message}</span>
                        <Badge
                          variant="outline"
                          className={`${level.bg} ${level.color} border-0`}
                        >
                          {level.text}
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {log.timestamp}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Bot:
                      {' '}
                      {log.bot}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {log.details}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
