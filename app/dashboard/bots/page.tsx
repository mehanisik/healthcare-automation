import { Badge } from '#/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
import { AlertCircle, Bot, CheckCircle2, Clock } from 'lucide-react';

// Fake data for bots
const bots = [
  {
    id: 1,
    name: 'Claims Processor Bot',
    status: 'active',
    lastActive: '2 minutes ago',
    tasksCompleted: 1234,
    uptime: '99.9%',
  },
  {
    id: 2,
    name: 'Data Sync Bot',
    status: 'idle',
    lastActive: '5 minutes ago',
    tasksCompleted: 856,
    uptime: '99.8%',
  },
  {
    id: 3,
    name: 'Report Generator Bot',
    status: 'error',
    lastActive: '1 hour ago',
    tasksCompleted: 432,
    uptime: '98.5%',
  },
  {
    id: 4,
    name: 'Patient Records Bot',
    status: 'maintenance',
    lastActive: '30 minutes ago',
    tasksCompleted: 2109,
    uptime: '99.7%',
  },
];

const statusConfig = {
  active: { icon: CheckCircle2, color: 'bg-green-500', text: 'Active' },
  idle: { icon: Clock, color: 'bg-yellow-500', text: 'Idle' },
  error: { icon: AlertCircle, color: 'bg-red-500', text: 'Error' },
  maintenance: { icon: Bot, color: 'bg-blue-500', text: 'Maintenance' },
};

/**
 * Displays a dashboard of bots with their statuses and key metrics in a card-based layout.
 *
 * Renders a responsive grid where each card shows a bot's name, status badge, last active time, tasks completed, and uptime percentage.
 */
export default function BotsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Bots</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {bots.map((bot) => {
          const status = statusConfig[bot.status as keyof typeof statusConfig];
          const StatusIcon = status.icon;

          return (
            <Card key={bot.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{bot.name}</CardTitle>
                <Badge variant="outline" className="flex items-center gap-1">
                  <StatusIcon className="h-3 w-3" />
                  {status.text}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last Active</span>
                    <span>{bot.lastActive}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tasks Completed</span>
                    <span>{bot.tasksCompleted.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Uptime</span>
                    <span>{bot.uptime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
