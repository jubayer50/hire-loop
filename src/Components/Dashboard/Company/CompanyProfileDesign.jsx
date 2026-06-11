import Image from "next/image";
import CompanyEditModal from "./CompanyEditModal";

const CompanyProfileDesign = ({ company }) => {
  /*
{
    "_id": "6a2561672efc0246a9ffe4f0",
    "company_name": "Adobe",
    "category": "technology",
    "company_website": "adobe.com",
    "company_location": "International",
    "company_employee": "200-1200",
    "company_description": "Adobe is a design-based software company",
    "company_logo": "https://i.ibb.co/SXTQ3nfc/adobe.png",
    "company_status": "Pending",
    "recruiterId": "6a25612ea8e14ca4e4eb6799",
    "createAt": "2026-06-07T12:17:43.398Z"
}
*/

  let statusClass = "";

  switch (company?.company_status) {
    case "Pending":
      statusClass = "border-yellow-500 text-yellow-500";
      break;

    case "Active":
      statusClass = "border-green-500 text-green-500";
      break;
  }

  return (
    <div className="relative border border-[#] p-5 rounded-md">
      <div className="flex flex-col md:flex-row items-center gap-5">
        <div className="w-30 h-30 rounded-full">
          <Image
            src={company?.company_logo}
            width={500}
            height={500}
            alt="company logo"
            className="rounded-full object-cover border"
          ></Image>
        </div>

        <div>
          <h2 className="font-bold text-2xl">{company?.company_name}</h2>
          <p
            className={`border rounded-full w-fit px-2 py-.5 text-sm mt-1 ${statusClass}`}
          >
            {company?.company_status}
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-3 border text-center rounded-md">
          <p>Industry Category</p>
          <h2 className="font-bold text-lg">{company?.category}</h2>
        </div>

        <div className="p-3 border text-center rounded-md">
          <p>Location</p>
          <h2 className="font-bold text-lg">{company?.company_location}</h2>
        </div>

        <div className="p-3 border text-center rounded-md">
          <p>Employee</p>
          <h2 className="font-bold text-lg">{company?.company_employee}</h2>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-bold text-lg">About our Vision and Culture</h2>
        <p className="mt-2 border rounded-md p-3">
          {company?.company_description}
        </p>
      </div>

      <div className="absolute top-4 right-4">
        <CompanyEditModal></CompanyEditModal>
      </div>
    </div>
  );
};

export default CompanyProfileDesign;
