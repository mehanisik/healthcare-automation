'use client';
import type { Job } from '#/types/jobs';
import { Badge } from '#/components/ui/badge';
import { Button } from '#/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '#/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '#/components/ui/tooltip';
import { jobStatusIconColor } from '#/components/utilities/statusColors';
import { statusConfig, triggerConfig } from '#/constants/jobs';
import { CalendarClock, FileText, Info, MoreVertical, PlayCircle, Plus, RefreshCw, Repeat, Trash2 } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { JobDialog } from './Job-dialog';

function CreateJobDialog({ open, onClose, onCreate }: { open: boolean; onClose: () => void; onCreate: (job: Job) => void }) {
  const [name, setName] = useState('');
  const [bot, setBot] = useState('');
  const [trigger, setTrigger] = useState<'manual' | 'scheduled' | 'event'>('manual');
  const [startTime, setStartTime] = useState('');
  const [estimatedEnd, setEstimatedEnd] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const job: Job = {
      id: Date.now(),
      name,
      status: 'scheduled',
      progress: 0,
      startTime,
      estimatedEnd,
      bot,
      lastRun: '-',
      nextRun: startTime,
      trigger,
      duration: '-',
      history: [],
    };
    onCreate(job);
    onClose();
  }

  if (!open) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <form onSubmit={handleSubmit} className="bg-card p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <div className="text-lg font-bold mb-2">Create Job</div>
        <div>
          <label htmlFor="job-name" className="block text-sm mb-1">Name</label>
          <input id="job-name" className="w-full border rounded px-2 py-1" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="job-bot" className="block text-sm mb-1">Bot</label>
          <input id="job-bot" className="w-full border rounded px-2 py-1" value={bot} onChange={e => setBot(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="job-trigger" className="block text-sm mb-1">Trigger</label>
          <select id="job-trigger" className="w-full border rounded px-2 py-1" value={trigger} onChange={e => setTrigger(e.target.value as any)}>
            <option value="manual">Manual</option>
            <option value="scheduled">Scheduled</option>
            <option value="event">Event</option>
          </select>
        </div>
        <div>
          <label htmlFor="job-start-time" className="block text-sm mb-1">Start Time</label>
          <input id="job-start-time" className="w-full border rounded px-2 py-1" value={startTime} onChange={e => setStartTime(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="job-estimated-end" className="block text-sm mb-1">Estimated End</label>
          <input id="job-estimated-end" className="w-full border rounded px-2 py-1" value={estimatedEnd} onChange={e => setEstimatedEnd(e.target.value)} required />
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="default">Create</Button>
        </div>
      </form>
    </div>
  );
}

function RescheduleDialog({ open, onClose, onReschedule }: { open: boolean; onClose: () => void; onReschedule: (newTime: string) => void }) {
  const [newTime, setNewTime] = useState('');
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onReschedule(newTime);
    onClose();
  }
  if (!open) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <form onSubmit={handleSubmit} className="bg-card p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <div className="text-lg font-bold mb-2">Reschedule Job</div>
        <div>
          <label htmlFor="reschedule-time" className="block text-sm mb-1">New Start Time</label>
          <input id="reschedule-time" className="w-full border rounded px-2 py-1" value={newTime} onChange={e => setNewTime(e.target.value)} required />
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="default">Reschedule</Button>
        </div>
      </form>
    </div>
  );
}

function ConfirmDeleteDialog({ open, onClose, onDelete }: { open: boolean; onClose: () => void; onDelete: () => void }) {
  if (!open) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-card p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <div className="text-lg font-bold mb-2">Delete Job</div>
        <div>Are you sure you want to delete this job? This action cannot be undone.</div>
        <div className="flex justify-end gap-2 mt-4">
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button
            type="button"
            variant="destructive"
            onClick={() => {
              onDelete();
              onClose();
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export function JobsTable({ jobs: initialJobs }: { jobs: Job[] }) {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showCreate, setShowCreate] = useState(false);
  const [rescheduleJobId, setRescheduleJobId] = useState<number | null>(null);
  const [deleteJobId, setDeleteJobId] = useState<number | null>(null);

  function handleCreate(job: Job) {
    setJobs(jobs => [job, ...jobs]);
  }

  function handleReschedule(id: number, newTime: string) {
    setJobs(jobs => jobs.map(j => j.id === id ? { ...j, startTime: newTime, nextRun: newTime } : j));
  }

  function handleRerun(id: number) {
    setJobs(jobs => jobs.map(j =>
      j.id === id
        ? {
            ...j,
            status: 'running',
            progress: 0,
            lastRun: 'Now',
            history: [
              { status: 'running', time: 'Now', duration: '-' },
              ...j.history,
            ],
          }
        : j,
    ));
  }

  function handleDelete(id: number) {
    setJobs(jobs => jobs.filter(j => j.id !== id));
  }

  return (
    <TooltipProvider>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Jobs</h2>
        <Button variant="default" onClick={() => setShowCreate(true)}>
          <Plus className="h-4 w-4 mr-1" />
          Create Job
        </Button>
      </div>
      <CreateJobDialog open={showCreate} onClose={() => setShowCreate(false)} onCreate={handleCreate} />
      <RescheduleDialog
        open={rescheduleJobId !== null}
        onClose={() => setRescheduleJobId(null)}
        onReschedule={(newTime) => {
          if (rescheduleJobId !== null) {
            handleReschedule(rescheduleJobId, newTime);
          }
        }}
      />
      <ConfirmDeleteDialog
        open={deleteJobId !== null}
        onClose={() => setDeleteJobId(null)}
        onDelete={() => {
          if (deleteJobId !== null) {
            handleDelete(deleteJobId);
          }
        }}
      />
      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-foreground">Status</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-foreground">Name</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-foreground">Trigger</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-foreground">Bot</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-foreground">Last Run</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-foreground">Next Run</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-foreground">Duration</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-foreground">Details</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-card divide-y divide-border">
            {jobs.map((job) => {
              const status = statusConfig[job.status];
              const StatusIcon = status.icon;
              const trigger = triggerConfig[job.trigger];
              return (
                <tr
                  key={job.id}
                  className="hover:bg-accent/30 cursor-pointer"
                  onClick={() => setSelectedJob(job)}
                >
                  <td className="px-4 py-2">
                    <Badge variant={status.variant} className="flex items-center gap-1 w-fit">
                      <StatusIcon className={`h-3 w-3 ${jobStatusIconColor[job.status]}`} />
                      {status.text}
                    </Badge>
                  </td>
                  <td className="px-4 py-2">
                    <Link
                      href={`/dashboard/jobs/${job.id}`}
                      className="hover:underline text-primary font-medium"
                      onClick={e => e.stopPropagation()}
                    >
                      {job.name}
                    </Link>
                  </td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${trigger.badge}`}>{trigger.text}</span>
                  </td>
                  <td className="px-4 py-2">{job.bot}</td>
                  <td className="px-4 py-2">{job.lastRun}</td>
                  <td className="px-4 py-2">{job.nextRun}</td>
                  <td className="px-4 py-2">{job.duration}</td>
                  <td className="px-4 py-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={`/dashboard/jobs/${job.id}`}
                          onClick={e => e.stopPropagation()}
                          className="inline-flex items-center justify-center rounded hover:bg-accent/50 p-1"
                          aria-label="View details"
                        >
                          <Info className="h-4 w-4 text-muted-foreground" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>View details</TooltipContent>
                    </Tooltip>
                  </td>
                  <td className="px-4 py-2" onClick={e => e.stopPropagation()}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="sm" variant="default" className="mr-1">
                          <PlayCircle className="h-4 w-4 mr-1 text-primary-foreground" />
                          Run
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Run this job now</TooltipContent>
                    </Tooltip>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost" className="ml-1">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setRescheduleJobId(job.id)}>
                          <CalendarClock className="h-4 w-4 mr-2 text-accent" />
                          Reschedule
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleRerun(job.id)}>
                          <Repeat className="h-4 w-4 mr-2 text-primary" />
                          Rerun
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                          View Logs
                        </DropdownMenuItem>
                        {job.status === 'failed' && (
                          <DropdownMenuItem onClick={() => handleRerun(job.id)}>
                            <RefreshCw className="h-4 w-4 mr-2 text-destructive" />
                            Retry
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem onClick={() => setDeleteJobId(job.id)}>
                          <Trash2 className="h-4 w-4 mr-2 text-destructive" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {selectedJob && (
        <JobDialog job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </TooltipProvider>
  );
}
