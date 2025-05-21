'use client';

import type { DashboardAnalyticsProps } from '#/types/analytics';
import type { DateRange } from 'react-day-picker';
import { Button } from '#/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '#/components/ui/select';
import { ArrowDown, ArrowUp, BarChart2, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { DatePickerWithRange } from '../logs/date-picker';

export function DashboardAnalytics(props: DashboardAnalyticsProps) {
  const [, setDateRange] = useState<DateRange | undefined>();
  const [selectedProcess, setSelectedProcess] = useState<string>('all');
  const [selectedBot, setSelectedBot] = useState<string>('all');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Analytics & Reporting</h1>
        <div className="flex flex-wrap items-center gap-2">
          <DatePickerWithRange onDateChange={setDateRange} />
          <Button>Apply Filters</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {props.kpiData.map((kpi) => {
          const TrendIcon = kpi.trend === 'up' ? ArrowUp : ArrowDown;
          const trendColor = kpi.trend === 'up' ? 'text-green-500' : 'text-red-500';
          return (
            <Card key={kpi.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                <BarChart2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
                <div className={`text-xs text-muted-foreground flex items-center ${trendColor}`}>
                  <TrendIcon className="mr-1 h-3 w-3" />
                  {kpi.change}
                  {' '}
                  vs last period
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Detailed View Filters</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Select value={selectedProcess} onValueChange={setSelectedProcess}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Filter by Process" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Processes</SelectItem>
              {props.processPerformanceData.map(p => <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={selectedBot} onValueChange={setSelectedBot}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Filter by Bot" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Bots</SelectItem>
              {props.botActivityData.map(b => <SelectItem key={b.id} value={b.id}>{b.name}</SelectItem>)}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Automation Volume Over Time</CardTitle>
            <TrendingUp className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-muted/50 rounded-md">
              <p className="text-muted-foreground">Automation Volume Chart Placeholder</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Success Rate Trend</CardTitle>
            <BarChart2 className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-muted/50 rounded-md">
              <p className="text-muted-foreground">Success Rate Chart Placeholder</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Process Performance Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {props.processPerformanceData.map(process => (
              <div key={process.id} className="p-3 border rounded-md bg-card hover:bg-accent/50 transition-colors">
                <h4 className="font-semibold">{process.name}</h4>
                <div className="text-sm text-muted-foreground grid grid-cols-2 gap-x-4">
                  <span>
                    Success Rate:
                    <span className="text-foreground font-medium">
                      {process.successRate}
                      %
                    </span>
                  </span>
                  <span>
                    Avg. Time:
                    <span className="text-foreground font-medium">{process.avgTime}</span>
                  </span>
                  <span>
                    Executions:
                    <span className="text-foreground font-medium">{process.executions.toLocaleString()}</span>
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bot Activity Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {props.botActivityData.map(bot => (
              <div key={bot.id} className="p-3 border rounded-md bg-card hover:bg-accent/50 transition-colors">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">{bot.name}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${bot.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-700/30 dark:text-green-300' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-700/30 dark:text-yellow-300'}`}>
                    {bot.status}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground grid grid-cols-2 gap-x-4">
                  <span>
                    Tasks:
                    <span className="text-foreground font-medium">{bot.tasksCompleted.toLocaleString()}</span>
                  </span>
                  <span>
                    Error Rate:
                    <span className="text-foreground font-medium">
                      {bot.errorRate}
                      %
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
