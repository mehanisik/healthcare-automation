import { AlertCircle, CheckCircle2, Info, TriangleAlert } from 'lucide-react';

export const logLevelConfig = {
  INFO: { icon: Info, color: 'text-blue-500', badgeVariant: 'outline' },
  SUCCESS: { icon: CheckCircle2, color: 'text-green-500', badgeVariant: 'default' },
  WARNING: { icon: TriangleAlert, color: 'text-yellow-500', badgeVariant: 'secondary' },
  ERROR: { icon: AlertCircle, color: 'text-red-500', badgeVariant: 'destructive' },
  DEBUG: { icon: Info, color: 'text-gray-500', badgeVariant: 'outline' },
} as const;
