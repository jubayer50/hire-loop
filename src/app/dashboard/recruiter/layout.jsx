import { roleRequire } from "@/lib/session";

const RecruiterLayout = async ({ children }) => {
  await roleRequire("recruiter");

  return children;
};

export default RecruiterLayout;
