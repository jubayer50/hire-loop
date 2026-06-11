import { roleRequire } from "@/lib/session";

const SeekerLayout = async ({ children }) => {
  await roleRequire("seeker");

  return children;
};

export default SeekerLayout;
