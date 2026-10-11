import StatCard from "@/components/StatCard";
import JobCard from "@/components/JobCard";
import { jobs } from "@/data/Jobs";

export default function Home() {
  // Dashboard metrics are derived from the jobs array instead of being
  // manually hardcoded. As job data changes, these values update automatically.
  const savedJobs = jobs.filter((job) => job.status === "Saved").length;

  const highMatches = jobs.filter((job) => job.matchScore >= 85).length;

  const applications = jobs.filter(
    (job) =>
      job.status === "Applied" ||
      job.status === "Interview" ||
      job.status === "Rejected",
  ).length;

  const interviews = jobs.filter((job) => job.status === "Interview").length;

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <header className="mb-12">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-zinc-500">
            Job Search Command Center
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            LaunchPath
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            Track opportunities, measure job matches, manage applications, and
            build a smarter path into your next technology role.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Saved Jobs" value={savedJobs} />
          <StatCard title="High Matches" value={highMatches} />
          <StatCard title="Applications" value={applications} />
          <StatCard title="Interviews" value={interviews} />
        </section>

        <section className="mt-10">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Recent Opportunities</h2>

            <p className="mt-1 text-sm text-zinc-500">
              Jobs currently being tracked by LaunchPath.
            </p>
          </div>

          {/* Render one JobCard for every job in our sample jobs array. */}
          <div className="space-y-4">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
