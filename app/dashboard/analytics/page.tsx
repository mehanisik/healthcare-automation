import { getBotActivityFn } from '#/actions/get-bot-activity';
import { getKpiDataFn } from '#/actions/get-kpi-data';
import { getProcessPerformanceFn } from '#/actions/get-process-performance';
import { DashboardAnalytics } from '#/components/features/dashboard/analytics';

export default async function AnalyticsPage() {
  const kpiData = await getKpiDataFn();
  const processPerformanceData = await getProcessPerformanceFn();
  const botActivityData = await getBotActivityFn();
  return <DashboardAnalytics kpiData={kpiData} processPerformanceData={processPerformanceData} botActivityData={botActivityData} />;
}
