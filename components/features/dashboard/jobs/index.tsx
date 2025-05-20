import type { Job } from './Job-card';
import { JobsTable } from './Jobs-table';

export const DashboardJobs = async ({ jobs }: { jobs: Job[] }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Jobs</h1>
      </div>
      <JobsTable jobs={jobs} />
    </div>
  );
};
