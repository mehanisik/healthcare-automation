import { getJobFn } from '#/actions/get-job';
import { DashboardJob } from '#/components/features/dashboard/jobs/job';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function JobPage({ params }: Props) {
  const { id } = await params;
  const job = await getJobFn(Number(id));
  return <DashboardJob job={job} />;
}
