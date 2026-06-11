import Image from "next/image";
import NoCompanyImg from "../../../../public/images/NoCompany.png";
import { Button } from "@heroui/react";

const NoCompanyUi = () => {
  return (
    <div className="text-center my-10 md:my-30">
      <div className="">
        <Image
          src={NoCompanyImg}
          alt="No company image."
          width={800}
          height={500}
          className="max-w-70 w-full mx-auto"
        ></Image>
      </div>

      <h2 className="text-2xl md:text-3xl font-medium ">
        Company not registered yet
      </h2>
      <p className="max-w-110 mx-auto mt-6">
        Set up your business profile to start posting high- performance job
        listings and manage your talent loop.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-12 text-white">
        <Button
          className={"rounded-md font-semibold text-black bg-white px-16 py-6"}
        >
          Register your company
        </Button>
        <Button
          className={
            "rounded-md font-semibold bg-[#201F20] border border-[#444748] px-16 py-6"
          }
        >
          View FAQ
        </Button>
      </div>
    </div>
  );
};

export default NoCompanyUi;
