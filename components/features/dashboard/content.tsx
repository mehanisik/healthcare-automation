import { Button } from '#/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
import { Activity, Bot, Clock, Plus, Zap } from 'lucide-react';

// Fake data
const stats = [
  { title: 'Active Robots', value: '12', icon: Bot },
  { title: 'Automated Tasks Today', value: '1,234', icon: Zap },
  { title: 'Success Rate', value: '99.8%', icon: Activity },
  { title: 'Avg. Processing Time', value: '45s', icon: Clock },
];

const recentAutomations = [
  { id: 1, process: 'Claims Processing', status: 'Completed', time: '09:00 AM', duration: '2m 15s' },
  { id: 2, process: 'Patient Data Sync', status: 'Running', time: '10:30 AM', duration: '1m 45s' },
  { id: 3, process: 'Report Generation', status: 'Scheduled', time: '02:00 PM', duration: '3m 30s' },
];

const upcomingTasks = [
  { id: 1, title: 'Deploy New Automation Script', due: 'Today' },
  { id: 2, title: 'Update Robot Credentials', due: 'Tomorrow' },
  { id: 3, title: 'System Maintenance', due: 'In 2 days' },
];

const automationStats = [
  { name: 'Claims Processing', value: 45 },
  { name: 'Data Sync', value: 25 },
  { name: 'Report Generation', value: 20 },
  { name: 'Insurance Verification', value: 10 },
];

export function DashboardContent() {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map(stat => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Automations */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Automations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAutomations.map(automation => (
                <div
                  key={automation.id}
                  className="flex items-center justify-between border-b pb-2 last:border-0"
                >
                  <div>
                    <p className="font-medium">{automation.process}</p>
                    <p className="text-sm text-muted-foreground">
                      Status:
                      {' '}
                      {automation.status}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{automation.time}</p>
                    <p className="text-sm text-muted-foreground">
                      Duration:
                      {automation.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center justify-between border-b pb-2 last:border-0"
                >
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-muted-foreground">
                      Due:
                      {' '}
                      {task.due}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Automation Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Automation Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {automationStats.map(stat => (
              <div key={stat.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{stat.name}</span>
                  <span>
                    {stat.value}
                    %
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${stat.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Automation
            </Button>
            <Button variant="outline">
              <Bot className="mr-2 h-4 w-4" />
              Manage Robots
            </Button>
            <Button variant="outline">
              <Activity className="mr-2 h-4 w-4" />
              View Logs
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
