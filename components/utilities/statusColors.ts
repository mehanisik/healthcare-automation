export const jobStatusIconColor = {
  running: 'text-blue-600',
  completed: 'text-green-600',
  scheduled: 'text-yellow-500',
  failed: 'text-red-600',
} as const;

export const botStatusColor = {
  active: 'bg-green-500',
  idle: 'bg-yellow-500',
  error: 'bg-red-500',
  maintenance: 'bg-blue-500',
  scheduled: 'bg-purple-500',
  paused: 'bg-orange-500',
} as const;

export const categoryColor = {
  'claims': 'bg-blue-500',
  'data-sync': 'bg-green-500',
  'report': 'bg-purple-500',
  'records': 'bg-yellow-500',
  'billing': 'bg-red-500',
  'compliance': 'bg-indigo-500',
} as const;

export const priorityColor = {
  high: 'bg-red-500',
  medium: 'bg-yellow-500',
  low: 'bg-green-500',
} as const;
