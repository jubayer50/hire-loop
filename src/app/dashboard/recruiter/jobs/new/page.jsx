import { getRecruiterCompany } from "@/lib/api/company";
import PostJobForm from "./PostJobForm";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const JobPostPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const recruiterId = session?.user.id;

  const company = await getRecruiterCompany(recruiterId);

  return (
    <div>
      <PostJobForm company={company}></PostJobForm>
    </div>
  );
};

export default JobPostPage;
