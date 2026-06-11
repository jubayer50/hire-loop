import CompanyRegisterForm from "@/Components/Dashboard/Company/CompanyRegisterForm";

import { getRecruiterCompany } from "@/lib/api/company";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const CompanyProfile = async ({}) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const recruiterId = session?.user?.id;

  const company = await getRecruiterCompany(recruiterId);

  return (
    <div className="max-w-330 mx-auto">
      <CompanyRegisterForm
        company={company}
        session={session}
      ></CompanyRegisterForm>
    </div>
  );
};

export default CompanyProfile;
