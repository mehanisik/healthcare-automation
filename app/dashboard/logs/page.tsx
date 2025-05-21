import { getLogsFn } from '#/actions/get-logs';
import { DashboardLogs } from '#/components/features/dashboard/logs';

export default async function LogsPage() {
  const logs = await getLogsFn();
  return <DashboardLogs logs={logs} />;
}
