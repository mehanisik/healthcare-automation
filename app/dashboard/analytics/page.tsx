import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
import { ArrowDown, ArrowUp, Bot, Clock, Zap } from 'lucide-react';

// Fake data for analytics
const metrics = [
  {
    title: 'Total Automations',
    value: '12,345',
    change: '+12.3%',
    trend: 'up',
    icon: Bot,
  },
  {
    title: 'Success Rate',
    value: '99.8%',
    change: '+0.2%',
    trend: 'up',
    icon: Zap,
  },
  {
    title: 'Avg. Processing Time',
    value: '45s',
    change: '-5.2%',
    trend: 'down',
    icon: Clock,
  },
];

const automationStats = [
  { name: 'Claims Processing', value: 45 },
  { name: 'Data Sync', value: 25 },
  { name: 'Report Generation', value: 20 },
  { name: 'Insurance Verification', value: 10 },
];

/**
 * Renders the analytics dashboard page with metrics overview, automation distribution, and analytics chart placeholders.
 *
 * Displays key performance indicators, a breakdown of automation categories with progress bars, and sections reserved for future analytics charts.
 */
export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Analytics</h1>
      </div>

      {/* Metrics Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric) => {
          const MetricIcon = metric.icon;
          const TrendIcon = metric.trend === 'up' ? ArrowUp : ArrowDown;
          const trendColor = metric.trend === 'up' ? 'text-green-500' : 'text-red-500';

          return (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <MetricIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendIcon className={`mr-1 h-3 w-3 ${trendColor}`} />
                  {metric.change}
                  {' '}
                  from last month
                </div>
              </CardContent>
            </Card>
          );
        })}
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

      {/* Additional Analytics Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Peak Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              Peak Hours Chart Placeholder
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Error Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              Error Distribution Chart Placeholder
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
