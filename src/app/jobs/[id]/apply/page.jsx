import { getJobsById } from "@/lib/api/jobs";
import { getUserSession } from "@/lib/core/session";

import { redirect } from "next/navigation";
import JobApply from "./JobApply";
import { getApplicationByApplicantId } from "@/lib/api/application";
import Link from "next/link";
import { getPlanById } from "@/lib/api/plans";

const ApplyPage = async ({ params }) => {
  const { id } = await params;

  const user = await getUserSession();

  if (!user) {
    redirect(`/login?redirect=/jobs/${id}/apply`);
  }

  if (user.role !== "seeker") {
    return (
      <div className="flex items-center justify-center mt-60 mb-38">
        <p>
          Job seeker can apply only job .Please open account with job seeker
          role to continue proceed.
        </p>
      </div>
    );
  }

  const applications = await getApplicationByApplicantId(user.id);

  const plan = await getPlanById(user?.plan || "seeker_free");

  const job = await getJobsById(id);

  return (
    <div className="mt-36 mb-10 max-w-330 mx-auto px-3">
      <h2>
        You can apply so far: {applications.length} out of{" "}
        {plan.maxApplicationPerMonth}.
        <p>
          Purchase plane for more application{" "}
          <Link href={"/plans"} className="border-b text-blue-500">
            View Plan
          </Link>
        </p>
      </h2>

      {applications.length < plan.maxApplicationPerMonth && (
        <JobApply job={job} applicant={user}></JobApply>
      )}
    </div>
  );
};

export default ApplyPage;
