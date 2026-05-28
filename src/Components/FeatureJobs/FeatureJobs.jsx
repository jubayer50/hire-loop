import { AiOutlineLineChart } from "react-icons/ai";
import { BiBarChartAlt2 } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuHexagon } from "react-icons/lu";
import { RxIdCard } from "react-icons/rx";
import { TbClick } from "react-icons/tb";

const FeatureJobs = () => {
  return (
    <div className="max-w-330 mx-auto px-3 py-30">
      <div>
        <div>
          <div className="flex items-center justify-center gap-4">
            <div className="h-2 w-2 bg-[#5C53FE]"></div>
            <p className="text-lg ">FEATURES JOB</p>
            <div className="h-2 w-2 bg-[#5C53FE]"></div>
          </div>

          <h2 className="mt-4 text-center max-w-122 mx-auto text-3xl md:leading-15 md:text-5xl font-semibold">
            Everything you need to succeed
          </h2>
        </div>

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-y-10 gap-x-4">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-md border border-[#FFFFFF10] bg-linear-to-b from-[#010102] to-[#313131] flex items-center justify-center">
              <CiSearch className="text-[#F7C2FF] text-[32px] font-bold" />
            </div>

            <div className="text-white">
              <h3 className="font-medium text-lg">Smart Search</h3>
              <p className="max-w-56 mt-2">
                Find your ideal job with advanced filters.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-md border border-[#FFFFFF10] bg-linear-to-b from-[#010102] to-[#313131] flex items-center justify-center">
              <AiOutlineLineChart className="text-[#F7C2FF] text-[32px] font-bold" />
            </div>

            <div className="text-white">
              <h3 className="font-medium text-lg">Salary Insights</h3>
              <p className="max-w-56 mt-2">
                Get real salary data to negotiate confidently.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-md border border-[#FFFFFF10] bg-linear-to-b from-[#010102] to-[#313131] flex items-center justify-center">
              <BiBarChartAlt2 className="text-[#F7C2FF] text-[32px] font-bold" />
            </div>

            <div className="text-white">
              <h3 className="font-medium text-lg">Top Companies</h3>
              <p className="max-w-56 mt-2">
                Apply to vetted companies that are hiring.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-md border border-[#FFFFFF10] bg-linear-to-b from-[#010102] to-[#313131] flex items-center justify-center">
              <FaRegBookmark className="text-[#F7C2FF] text-[32px] font-bold" />
            </div>

            <div className="text-white">
              <h3 className="font-medium text-lg">Saved Jobs</h3>
              <p className="max-w-56 mt-2">
                Manage apps & favorites on your dashboard.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-md border border-[#FFFFFF10] bg-linear-to-b from-[#010102] to-[#313131] flex items-center justify-center">
              <TbClick className="text-[#F7C2FF] text-[32px] font-bold" />
            </div>

            <div className="text-white">
              <h3 className="font-medium text-lg">One-Click Apply</h3>
              <p className="max-w-56 mt-2">
                Simplify your job applications for an easier process!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-md border border-[#FFFFFF10] bg-linear-to-b from-[#010102] to-[#313131] flex items-center justify-center">
              <RxIdCard className="text-[#F7C2FF] text-[32px] font-bold" />
            </div>

            <div className="text-white">
              <h3 className="font-medium text-lg">Resume Builder</h3>
              <p className="max-w-56 mt-2">
                Create professional resumes with modern templates.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-md border border-[#FFFFFF10] bg-linear-to-b from-[#010102] to-[#313131] flex items-center justify-center">
              <LuHexagon className="text-[#F7C2FF] text-[32px] font-bold" />
            </div>

            <div className="text-white">
              <h3 className="font-medium text-lg">Skill-Based Matching</h3>
              <p className="max-w-56 mt-2">
                Discover jobs that match your skills and experience.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-md border border-[#FFFFFF10] bg-linear-to-b from-[#010102] to-[#313131] flex items-center justify-center">
              <FaArrowTrendUp className="text-[#F7C2FF] text-[32px] font-bold" />
            </div>

            <div className="text-white">
              <h3 className="font-medium text-lg">Career Growth Resources</h3>
              <p className="max-w-56 mt-2">
                Boost your career with quick interview tips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureJobs;
