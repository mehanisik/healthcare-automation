import { AlertCircle, AlertTriangle, CheckCircle2, Clock, Settings } from 'lucide-react';

export const statusConfig = {
  active: { icon: CheckCircle2, text: 'Active' },
  idle: { icon: Clock, text: 'Idle' },
  error: { icon: AlertCircle, text: 'Error' },
  maintenance: { icon: Settings, text: 'Maintenance' },
  scheduled: { icon: Clock, text: 'Scheduled' },
  paused: { icon: AlertTriangle, text: 'Paused' },
};

export const categoryConfig = {
  'claims': { text: 'Claims Processing' },
  'data-sync': { text: 'Data Synchronization' },
  'report': { text: 'Report Generation' },
  'records': { text: 'Patient Records' },
  'billing': { text: 'Billing' },
  'compliance': { text: 'Compliance' },
};

export const priorityConfig = {
  high: { text: 'High' },
  medium: { text: 'Medium' },
  low: { text: 'Low' },
};
