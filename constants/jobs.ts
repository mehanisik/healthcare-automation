import { AlertCircle, CheckCircle2, Clock, PlayCircle } from 'lucide-react';

export const statusConfig = {
  running: { icon: PlayCircle, variant: 'default', text: 'Running' },
  completed: { icon: CheckCircle2, variant: 'secondary', text: 'Completed' },
  scheduled: { icon: Clock, variant: 'outline', text: 'Scheduled' },
  failed: { icon: AlertCircle, variant: 'destructive', text: 'Failed' },
} as const;

export const triggerConfig = {
  manual: { badge: 'bg-muted text-muted-foreground', text: 'Manual' },
  scheduled: { badge: 'bg-primary/10 text-primary-foreground', text: 'Scheduled' },
  event: { badge: 'bg-accent/10 text-accent-foreground', text: 'Event' },
};
