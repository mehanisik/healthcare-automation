import { getJobFn } from '#/actions/jobs/get-job';
import { DashboardJob } from '#/components/features/dashboard/jobs/job';

export default async function JobDetailPage({ params }: { params: { jobId: string } }) {
  const job = await getJobFn(Number(params.jobId));

  return <DashboardJob job={job} />;
}
