import type { DateRange } from 'react-day-picker';

export type LogLevel = 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR' | 'DEBUG';

export type Log = {
  id: string;
  timestamp: Date;
  level: LogLevel;
  bot: string;
  job: string;
  message: string;
  details: Record<string, any>;
};
export type DatePickerWithRangeProps = {
  onDateChange: (dateRange?: DateRange) => void;
} & React.HTMLAttributes<HTMLDivElement>;
