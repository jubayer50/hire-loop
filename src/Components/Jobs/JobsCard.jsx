import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const JobsCard = ({ job }) => {
  /*
  {
    "_id": "6a2565f91124387333dd974c",
    "jobTitle": "Machine Learning Engineer",
    "jobCategory": "technology",
    "jobType": "full-time",
    "minSalary": "2000",
    "maxSalary": "4500",
    "currency": "USD",
    "location": "USA",
    "deadline": "2026-11-20",
    "responsibilities": "Build predictive AI models.",
    "requirements": "TensorFlow and Python skills.",
    "benefits": "Research funding and bonuses.",
    "isRemote": true,
    "companyId": "6a2560162efc0246a9ffe4ed",
    "companyLogo": "https://i.ibb.co/mVTncY0k/tesla.jpg",
    "companyName": "Tesla",
    "status": "active",
    "isPubliclyVisible": true,
    "createAt": "2026-06-07T15:30:00.000Z"
}
  */

  return (
    <div className="border rounded-md p-4">
      <div className="flex items-center gap-4">
        <div className="h-8 w-8 rounded-full">
          <Image
            src={job.companyLogo}
            alt="company logo"
            width={100}
            height={100}
            className="w-full object-cover rounded-full"
          ></Image>
        </div>

        <h2 className="font-bold">{job.companyName}</h2>
      </div>

      <div className="mt-2">
        <h2 className="font-bold text-xl">{job.jobTitle}</h2>
        <p className="mt-1">{}</p>

        <div className="mt-2">
          <Link href={`/jobs/${job._id}`}>
            <Button className={"bg-transparent"}>Apply Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
