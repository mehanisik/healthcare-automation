import type { Job } from './Job-card';
import React from 'react';
import { JobCard } from './Job-card';

type JobsListProps = {
  jobs: Job[];
};

export function JobsList({ jobs }: JobsListProps) {
  return (
    <div className="space-y-4">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
