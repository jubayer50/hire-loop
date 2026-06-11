import { getApplicationByApplicantId } from "@/lib/api/application";
import { getUserSession } from "@/lib/core/session";

const ApplicationsPage = async () => {
  const user = await getUserSession();

  const jobs = await getApplicationByApplicantId(user?.id);

  return (
    <div className="mt-5">
      <h2>Applications: {jobs.length}</h2>
    </div>
  );
};

export default ApplicationsPage;
