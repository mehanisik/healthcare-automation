import type { CriticalAlert, OverviewStat, QuickLink, RecentActivity } from '#/types/overview';
import { Activity, AlertTriangle, Bot, CheckCircle2, Clock, ListChecks, PlayCircle, TrendingUp } from 'lucide-react';

export const overviewStats: OverviewStat[] = [
  { id: 'activeBots', title: 'Active Bots', value: '8', total: 12, icon: Bot, href: '/dashboard/bots', statusColor: 'text-green-500' },
  { id: 'runningJobs', title: 'Jobs Running', value: '15', total: 50, icon: PlayCircle, href: '/dashboard/jobs', statusColor: 'text-blue-500' },
  { id: 'completedToday', title: 'Tasks Completed Today', value: '1,234', icon: CheckCircle2, href: '/dashboard/analytics', statusColor: 'text-green-500' },
  { id: 'errorsToday', title: 'Errors Today', value: '7', icon: AlertTriangle, href: '/dashboard/logs?level=error', statusColor: 'text-red-500' },
];

export const recentActivity: RecentActivity[] = [
  { id: 'act1', type: 'Job Completed', description: 'Invoice Processing - Batch #456 finished successfully.', timestamp: '5 minutes ago', icon: CheckCircle2, iconColor: 'text-green-500', href: '/dashboard/jobs/job456' },
  { id: 'act2', type: 'Bot Alert', description: 'Bot-Gamma-003 reported high memory usage.', timestamp: '15 minutes ago', icon: AlertTriangle, iconColor: 'text-yellow-500', href: '/dashboard/bots/bot-gamma-003' },
  { id: 'act3', type: 'New Job Scheduled', description: 'Monthly Report Generation scheduled for 02:00 AM.', timestamp: '1 hour ago', icon: Clock, iconColor: 'text-blue-500', href: '/dashboard/jobs/job789' },
  { id: 'act4', type: 'Bot Started', description: 'Bot-Alpha-001 was started manually.', timestamp: '2 hours ago', icon: PlayCircle, iconColor: 'text-green-500', href: '/dashboard/bots/bot-alpha-001' },
];

export const quickLinks: QuickLink[] = [
  { id: 'ql1', label: 'Manage Bots', href: '/dashboard/bots', icon: Bot },
  { id: 'ql2', label: 'View Active Jobs', href: '/dashboard/jobs', icon: ListChecks },
  { id: 'ql3', label: 'Check System Logs', href: '/dashboard/logs', icon: Activity },
  { id: 'ql4', label: 'Automation Analytics', href: '/dashboard/analytics', icon: TrendingUp },
];

export const criticalAlerts: CriticalAlert[] = [
  { id: 'alert1', message: 'Payment Gateway API is unresponsive. Bot-Delta-002 paused.', severity: 'High', bot: 'Bot-Delta-002', timestamp: '10 mins ago' },
  { id: 'alert2', message: 'Critical Process "User De-provisioning" failed 3 times.', severity: 'Critical', job: 'User De-provisioning', timestamp: '45 mins ago' },
];
