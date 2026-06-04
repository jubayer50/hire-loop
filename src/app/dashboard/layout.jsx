import { DashboardSideBar } from "@/Components/Dashboard/DashboardSideBar/DashboardSideBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="mt-19 flex min-h-screen gap-4">
      <DashboardSideBar></DashboardSideBar>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DashboardLayout;
