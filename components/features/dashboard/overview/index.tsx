import type { DashboardOverviewProps } from '#/types/overview';
import { Badge } from '#/components/ui/badge';
import { Button } from '#/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#/components/ui/card';
import { quickLinks } from '#/constants/overview';
import {
  AlertTriangle,
  Plus,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardOverview(props: DashboardOverviewProps) {
  return (
    <div className="space-y-6">
      <div className="pb-4 border-b">
        <h1 className="text-3xl font-bold">Welcome, [User Name]!</h1>
        <p className="text-muted-foreground">Here's a summary of your RPA operations.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {props.overviewStats.map(stat => (
          <Card key={stat.id} className="hover:shadow-lg transition-shadow">
            <Link href={stat.href || '#'}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.statusColor || 'text-muted-foreground'}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {stat.value}
                  {stat.total && (
                    <span className="text-sm text-muted-foreground">
                      {' '}
                      /
                      {stat.total}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground pt-1">Click to view details</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest events from your automation system.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {props.recentActivity.length > 0
              ? props.recentActivity.map(activity => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 border rounded-md hover:bg-accent/50 transition-colors">
                    <activity.icon className={`h-5 w-5 mt-1 shrink-0 ${activity.iconColor}`} />
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <Link href={activity.href || '#'} className="font-medium text-sm hover:underline">{activity.type}</Link>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.timestamp}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                    </div>
                  </div>
                ))
              : (
                  <p className="text-muted-foreground text-center py-4">No recent activity.</p>
                )}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickLinks.map(link => (
                <Button key={link.id} variant="ghost" className="w-full justify-start" asChild>
                  <Link href={link.href}>
                    <link.icon className="mr-2 h-4 w-4" />
                    {link.label}
                  </Link>
                </Button>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                {' '}
                New Automation Job
              </Button>
              <Button variant="outline" className="w-full">
                <Zap className="mr-2 h-4 w-4" />
                {' '}
                Trigger Ad-hoc Task
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {props.criticalAlerts.length > 0 && (
        <Card className="border-red-500/50 dark:border-red-400/40 bg-red-50 dark:bg-red-900/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-red-500 dark:text-red-400" />
              <CardTitle className="text-red-700 dark:text-red-300">Critical Alerts</CardTitle>
            </div>
            <CardDescription className="text-red-600 dark:text-red-400">
              Immediate attention required for the following issues.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {props.criticalAlerts.map(alert => (
              <div key={alert.id} className="p-3 border border-red-500/30 dark:border-red-400/30 rounded-md bg-background/50">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold text-red-700 dark:text-red-300">{alert.message}</p>
                  <Badge variant="destructive" className="whitespace-nowrap">{alert.severity}</Badge>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {alert.bot && (
                    <span>
                      Bot:
                      {alert.bot}
                      {' '}
                      |
                      {' '}
                    </span>
                  )}
                  {alert.job && (
                    <span>
                      Job:
                      {alert.job}
                      {' '}
                      |
                      {' '}
                    </span>
                  )}
                  <span>{alert.timestamp}</span>
                </div>
                <div className="mt-2">
                  <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-100 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-900/50">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Automation Performance Snapshot</CardTitle>
          <CardDescription>Key metrics over the last 7 days.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[250px] flex items-center justify-center bg-muted/50 rounded-md">
            <p className="text-muted-foreground">Summary Chart Placeholder (e.g., Daily Executions & Success Rate)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
