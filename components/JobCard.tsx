import type { Job } from "@/types/Jobs";

type JobCardProps = {
  job: Job;
};

export default function JobCard({ job }: JobCardProps) {
  return (
    // Displays the most important details for one job opportunity.
    // This component will later include actions such as Apply, Save, and View Details.
    <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{job.title}</h3>

          <p className="mt-1 text-zinc-400">{job.company}</p>

          <p className="mt-2 text-sm text-zinc-500">{job.location}</p>
        </div>

        <div className="sm:text-right">
          <p className="text-sm text-zinc-500">Match Score</p>

          <p className="text-2xl font-bold text-white">{job.matchScore}%</p>

          <p className="mt-2 text-sm text-zinc-400">{job.status}</p>
        </div>
      </div>
    </article>
  );
}
