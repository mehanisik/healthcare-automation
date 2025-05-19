import { BarChart, Bot, Briefcase, LayoutDashboard, ScrollText } from 'lucide-react';

export const sidebarItems = [
  {
    id: 'main',
    label: 'Main',
    items: [
      {
        title: 'Dashboard',
        url: '/dashboard',
        icon: LayoutDashboard,
      },
      {
        title: 'Bots',
        url: '/dashboard/bots',
        icon: Bot,
      },
      {
        title: 'Jobs',
        url: '/dashboard/jobs',
        icon: Briefcase,
      },
    ],
  },
  {
    id: 'insights',
    label: 'Insights',
    items: [
      {
        title: 'Analytics',
        url: '/dashboard/analytics',
        icon: BarChart,
      },
      {
        title: 'Logs',
        url: '/dashboard/logs',
        icon: ScrollText,
      },
    ],
  },
];
