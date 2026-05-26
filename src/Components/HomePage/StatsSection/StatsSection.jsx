"use client";

import { motion } from "motion/react";
import { Briefcase, Star, PersonMagnifier, Factory } from "@gravity-ui/icons";

const StatsSection = () => {
  return (
    <div className="mt-80 max-w-330 mx-auto px-4 pt-16">
      <div>
        <h2 className="max-w-155 mx-auto font-medium text-3xl md:text-[40px] text-center">
          Assisting over 15,000 job seekers find their dream positions.
        </h2>

        {/* try to implement motion animation */}
        <div className="mt-12 grid md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-78 h-63.5 bg-linear-to-b from-[#010102] to-[#313131] border border-[#FFFFFF10] rounded-2xl p-6 flex flex-col justify-between"
          >
            <Briefcase className="h-8 w-8"></Briefcase>

            <div>
              <h3 className="text-4xl md:text-5xl font-semibold">50K</h3>
              <p className="mt-4">Active Jobs</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-78 h-63.5 bg-linear-to-b from-[#010102] to-[#313131] border border-[#FFFFFF10] rounded-2xl p-6 flex flex-col justify-between"
          >
            <Factory className="h-8 w-8"></Factory>

            <div>
              <h3 className="text-4xl md:text-5xl font-semibold">12K</h3>
              <p className="mt-4">Companies</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="w-78 h-63.5 bg-linear-to-b from-[#010102] to-[#313131] border border-[#FFFFFF10] rounded-2xl p-6 flex flex-col justify-between"
          >
            <PersonMagnifier className="h-8 w-8"></PersonMagnifier>

            <div>
              <h3 className="text-4xl md:text-5xl font-semibold">2M </h3>
              <p className="mt-4">Job Seekers</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="w-78 h-63.5 bg-linear-to-b from-[#010102] to-[#313131] border border-[#FFFFFF10] rounded-2xl p-6 flex flex-col justify-between"
          >
            <Star className="h-8 w-8"></Star>

            <div>
              <h3 className="text-4xl md:text-5xl font-semibold">97%</h3>
              <p className="mt-4">Satisfication Rate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
