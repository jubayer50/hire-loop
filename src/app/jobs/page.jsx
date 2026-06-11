import JobsCard from "@/Components/Jobs/JobsCard";
import { getJobs } from "@/lib/api/jobs";

const JobsPage = async () => {
  const jobs = await getJobs();

  return (
    <div className="my-26 max-w-7xl mx-auto px-3">
      <div className=" mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Open Positions</h1>
        <p className="text-zinc-400 mt-2">
          Discover your next engineering challenge.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {jobs.map((job) => (
          <JobsCard key={job._id} job={job}></JobsCard>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
