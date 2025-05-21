import type { LucideIcon } from 'lucide-react';

export type OverviewStat = {
  id: string;
  title: string;
  value: string;
  total?: number;
  icon: LucideIcon;
  href?: string;
  statusColor?: string;
};

export type RecentActivity = {
  id: string;
  type: string;
  description: string;
  timestamp: string;
  icon: LucideIcon;
  iconColor: string;
  href?: string;
};

export type QuickLink = {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
};

export type CriticalAlert = {
  id: string;
  message: string;
  severity: string;
  bot?: string;
  job?: string;
  timestamp: string;
};

export type DashboardOverviewProps = {
  overviewStats: OverviewStat[];
  recentActivity: RecentActivity[];
  quickLinks: QuickLink[];
  criticalAlerts: CriticalAlert[];
};
