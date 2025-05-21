import { getCriticalAlertsFn } from '#/actions/get-critical-alerts';
import { getOverviewStatsFn } from '#/actions/get-overview-stats';
import { getQuickLinksFn } from '#/actions/get-quick-links';
import { getRecentActivityFn } from '#/actions/get-recent-activity';
import DashboardOverview from '#/components/features/dashboard/overview/index';

export default async function DashboardPage() {
  const overviewStats = await getOverviewStatsFn();
  const recentActivity = await getRecentActivityFn();
  const quickLinks = await getQuickLinksFn();
  const criticalAlerts = await getCriticalAlertsFn();

  return <DashboardOverview overviewStats={overviewStats} recentActivity={recentActivity} quickLinks={quickLinks} criticalAlerts={criticalAlerts} />;
}
