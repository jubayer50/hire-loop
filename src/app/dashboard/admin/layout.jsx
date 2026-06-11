import { roleRequire } from "@/lib/session";

const AdminLayout = async ({ children }) => {
  await roleRequire("admin");
  return children;
};

export default AdminLayout;
