import type { Job } from '#/types/jobs';
import React from 'react';
import { JobCard } from './Job-card';

export function JobsList({ jobs }: { jobs: Job[] }) {
  return (
    <div className="space-y-4">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
