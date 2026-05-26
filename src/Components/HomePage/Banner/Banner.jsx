import { Magnifier, LocationArrow, Briefcase } from "@gravity-ui/icons";
import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div className="py-60 max-w-330 mx-auto px-4">
      <div className="text-center">
        {/* position */}
        <div className="p-px rounded-full bg-linear-to-b from-[#A8A8A8] to-[#ffffff00] w-fit mx-auto">
          <div className="px-6 py-2 rounded-full bg-linear-to-b from-[#3a3a3a] to-[#101010] flex items-center gap-4">
            <Briefcase className="w-6 h-6"></Briefcase>
            <p className="text-[16px] md:text-xl">
              50,000+{" "}
              <span className="text-[#FFFFFF70] ml-2">NEW JOBS THIS MONTH</span>
            </p>
          </div>
        </div>

        {/* title and other content */}
        <div className="mt-8">
          <h2 className="text-white font-bold text-4xl md:text-[56px]">
            Find Your Dream Job Today
          </h2>
          <p className="max-w-187 mx-auto mt-4 text-lg md:text-xl">
            HireLoop connects top talent with world-class companies. Browse
            thousands of curated opportunities and land your next role — faster.
          </p>

          <div className="max-w-196 mx-auto bg-[#101010] border border-[#FFFFFF20] rounded-2xl p-2 mt-12 flex flex-col md:flex-row gap-3 items-center justify-between ">
            <div className="flex items-center gap-2 ml-4">
              <Magnifier className="w-6 h-6 "></Magnifier>{" "}
              <p>Job title, skill or company</p>
            </div>

            <Separator
              orientation="vertical"
              className="hidden md:block bg-white/40 my-3"
            />

            <div className="flex items-center gap-2">
              <LocationArrow className="w-6 h-6 "></LocationArrow>{" "}
              <p>Job title, skill or company</p>
            </div>

            <Separator
              orientation="vertical"
              className="hidden md:block bg-white/40 my-3"
            />

            <div className="h-12 w-12 bg-[#5C53FE] rounded-lg flex items-center justify-center">
              <Magnifier className="w-6 h-6 "></Magnifier>
            </div>
          </div>

          <div className="text-white flex flex-wrap items-center justify-center gap-5 mt-6">
            <p>Trending Position</p>

            <p className="py-1.5 px-3 rounded-full border border-[#FFFFFF10] text-[14px] bg-[#1A1A1B]">
              Product Designer
            </p>

            <p className="py-1.5 px-3 rounded-full border border-[#FFFFFF10] text-[14px] bg-[#1A1A1B]">
              AI Engineering
            </p>

            <p className="py-1.5 px-3 rounded-full border border-[#FFFFFF10] text-[14px] bg-[#1A1A1B]">
              Dev-ops Engineer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
