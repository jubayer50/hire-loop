import { getJobsById } from "@/lib/api/jobs";
import { Briefcase, LocationArrow } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const JobDetailPage = async ({ params }) => {
  const { id } = await params;

  const job = await getJobsById(id);

  return (
    <div className="mt-36 mb-20 max-w-330 mx-auto px-3">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-[65%]">
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 rounded-md p-1 border">
              <Image
                src={job.companyLogo}
                alt="company logo"
                width={100}
                height={100}
                className="w-full object-cover rounded-md"
              ></Image>
            </div>

            <div>
              <h2 className="font-bold text-lg">{job.companyName}</h2>
              <p className="mt-1 text-white/80 text-sm">
                {job.jobCategory.toUpperCase()}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-bold text-3xl">{job.jobTitle}</h2>

            <div className="mt-5">
              <h2 className="font-bold text-lg">Responsibilities</h2>
              <p className="mt-.5">{job.responsibilities}</p>
            </div>

            <div className="mt-5">
              <h2 className="font-bold text-lg">Requirements</h2>
              <p className="mt-1.5 border p-3 rounded-md">
                {job.responsibilities}
              </p>
            </div>
          </div>
        </div>

        <div className="border p-5 rounded-md space-y-6 flex-1">
          <h3 className="font-semibold text-lg">Job overview</h3>

          <div className="flex gap-3">
            <div className="mt-2">
              <LocationArrow className="w-5 h-5 text-[#5C53FE]"></LocationArrow>
            </div>

            <div>
              <p className="text-white/60 text-sm">Location</p>
              <p>{job.location}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="mt-2">
              <Briefcase className="w-5 h-5 text-[#5C53FE]"></Briefcase>
            </div>

            <div>
              <p className="text-white/60 text-sm">Job type</p>
              <p>{job.jobType}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="mt-2">
              <Briefcase className="w-5 h-5 text-[#5C53FE]"></Briefcase>
            </div>

            <div>
              <p className="text-white/60 text-sm">Salary range</p>
              <p>
                $ {job.minSalary} - {job.maxSalary}
              </p>
            </div>
          </div>

          <div className="mt-2 flex-1">
            <Link href={`/jobs/${job._id}/apply`}>
              <Button className={"bg-[#5C53FE] w-full rounded-md"}>
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
