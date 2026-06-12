import CompaniesTable from "@/Components/Dashboard/Admin/CompaniesTable/CompaniesTable";
import { getCompanies } from "@/lib/api/company";

const AdminCompaniesPage = async () => {
  const companies = await getCompanies();

  return (
    <div className="p-6 bg-[#121212] min-h-screen">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white">Company Approvals</h2>
        <p className="text-gray-400 text-sm mt-1">
          Review and manage {companies.length} pending requests.
        </p>
      </div>

      {/* Render the extracted client component */}
      <CompaniesTable companies={companies} />
    </div>
  );
};

export default AdminCompaniesPage;
