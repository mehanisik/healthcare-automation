'use client';
import type { DateRange } from 'react-day-picker';
import { Badge } from '#/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
import { Input } from '#/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '#/components/ui/select';
import { format } from 'date-fns';
import { AlertCircle, CheckCircle2, Info, TriangleAlert } from 'lucide-react';
import { useState } from 'react';
import { DatePickerWithRange } from './date-picker';

const logLevelConfig = {
  INFO: { icon: Info, color: 'text-blue-500', badgeVariant: 'outline' },
  SUCCESS: { icon: CheckCircle2, color: 'text-green-500', badgeVariant: 'default' },
  WARNING: { icon: TriangleAlert, color: 'text-yellow-500', badgeVariant: 'secondary' },
  ERROR: { icon: AlertCircle, color: 'text-red-500', badgeVariant: 'destructive' },
  DEBUG: { icon: Info, color: 'text-gray-500', badgeVariant: 'outline' },
} as const;

type Log = {
  id: string;
  timestamp: Date;
  level: LogLevel;
  bot: string;
  job: string;
  message: string;
  details: Record<string, any>;
};

type LogLevel = keyof typeof logLevelConfig;

export function DashboardLogs(props: { logs: Log[] }) {
  const [logs] = useState(props.logs);
  const [searchTerm, setSearchTerm] = useState('');
  const [logLevelFilter, setLogLevelFilter] = useState<LogLevel | 'ALL'>('ALL');
  const [botFilter, setBotFilter] = useState('ALL');
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const filteredLogs = logs.filter((log) => {
    const matchesSearch = log.message.toLowerCase().includes(searchTerm.toLowerCase())
      || log.job.toLowerCase().includes(searchTerm.toLowerCase())
      || log.bot.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = logLevelFilter === 'ALL' || log.level === logLevelFilter;
    const matchesBot = botFilter === 'ALL' || log.bot === botFilter;
    const matchesDate = !dateRange?.from || (log.timestamp >= dateRange.from && (!dateRange.to || log.timestamp <= dateRange.to));
    return matchesSearch && matchesLevel && matchesBot && matchesDate;
  });

  const uniqueBots = Array.from(new Set(logs.map(log => log.bot)));

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">System Logs & Audit Trail</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Input
                placeholder="Search logs (message, job, bot)..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full"
              />
              <Select value={logLevelFilter} onValueChange={value => setLogLevelFilter(value as LogLevel | 'ALL')}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter by Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">All Levels</SelectItem>
                  {Object.keys(logLevelConfig).map(level => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={botFilter} onValueChange={setBotFilter}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter by Bot" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">All Bots</SelectItem>
                  {uniqueBots.map(bot => (
                    <SelectItem key={bot} value={bot}>{bot}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-auto">
              <DatePickerWithRange onDateChange={setDateRange} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            Log Entries (
            {filteredLogs.length}
            )
          </CardTitle>
        </CardHeader>
        <CardContent>
          {filteredLogs.length === 0
            ? (
                <div className="text-center py-10 text-muted-foreground">
                  <Info className="mx-auto h-12 w-12 opacity-50 mb-4" />
                  No logs found matching your criteria.
                </div>
              )
            : (
                <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                  {filteredLogs.map((log) => {
                    const config = logLevelConfig[log.level as LogLevel] || logLevelConfig.INFO;
                    const Icon = config.icon;
                    return (
                      <div key={log.id} className="p-4 border rounded-lg bg-card hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                          <Icon className={`mt-1 h-5 w-5 shrink-0 ${config.color}`} />
                          <div className="flex-grow">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
                              <div className="flex items-center gap-2">
                                <Badge variant={config.badgeVariant as any} className={config.badgeVariant === 'default' ? 'bg-green-100 text-green-700 dark:bg-green-700/30 dark:text-green-300' : ''}>
                                  {log.level}
                                </Badge>
                                <span className="font-semibold text-sm">{log.job}</span>
                              </div>
                              <span className="text-xs text-muted-foreground mt-1 sm:mt-0">
                                {format(log.timestamp, 'MMM dd, yyyy, hh:mm:ss a')}
                              </span>
                            </div>
                            <p className="text-sm text-foreground">{log.message}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Bot:
                              {log.bot}
                            </p>
                            {log.details && Object.keys(log.details).length > 0 && (
                              <details className="mt-2 text-xs">
                                <summary className="cursor-pointer text-muted-foreground hover:text-foreground">View Details</summary>
                                <pre className="mt-1 p-2 bg-muted/50 rounded-md overflow-x-auto">
                                  {JSON.stringify(log.details, null, 2)}
                                </pre>
                              </details>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
        </CardContent>
      </Card>
    </div>
  );
}
