import { getJobsFn } from '#/actions/get-jobs';
import { DashboardJobs } from '#/components/features/dashboard/jobs';

export default async function JobsPage() {
  const jobs = await getJobsFn();
  return <DashboardJobs jobs={jobs} />;
}
