"use client";
import { motion, stagger } from "framer-motion";

const SideNav = () => {
  const text = {
    invisible: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const dot = {
    invisible: {
      width: ["0%", "100%", "0%"],
      skew: ["0deg", "24deg", "0deg"],
      translateY: "-50%",
      transition: {
        translateY: { duration: 0 },
        duration: 0.4,
      },
    },
    visible: {
      width: ["0%", "100%", "0%"],
      skew: ["0deg", "24deg", "0deg"],
      translateY: "-50%",
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <motion.div
      animate="invisible"
      whileHover="visible"
      exit="invisible"
      transition={{ staggerChildren: 0.025 }}
      className=" absolute flex flex-col items-end text-base font-mono font-bold tracking-widest opacity-50   top-1/2 mr-6 right-0 text-right w-auto translate-y-[-50%] cursor-default uppercase"
    >
      <div className="relative whitespace-nowrap py-2 pr-10 will-change-transform">
        <motion.div variants={text} className="  ">
          <h1>Fun</h1>
        </motion.div>
        <motion.div
          variants={dot}
          className="absolute  top-1/2 right-3 bg-white min-w-[8px] h-4 translate-y-[-50%] rounded"
        ></motion.div>
      </div>
      <div className="relative whitespace-nowrap py-2 pr-10 will-change-transform">
        <motion.div variants={text} className="  ">
          <h1>Exciting</h1>
        </motion.div>
        <motion.div
          variants={dot}
          className="absolute  top-1/2 right-3 bg-white min-w-[8px] h-4 translate-y-[-50%] rounded"
        ></motion.div>
      </div>
      <div className="relative whitespace-nowrap py-2 pr-10 will-change-transform">
        <motion.div variants={text} className="  ">
          <h1>Thrilling</h1>
        </motion.div>
        <motion.div
          variants={dot}
          className="absolute  top-1/2 right-3 bg-white min-w-[8px] h-4 translate-y-[-50%] rounded"
        ></motion.div>
      </div>
      <div className="relative whitespace-nowrap py-2 pr-10 will-change-transform">
        <motion.div variants={text} className="  ">
          <h1>Mind Boggling</h1>
        </motion.div>
        <motion.div
          variants={dot}
          className="absolute  top-1/2 right-3 bg-white min-w-[8px] h-4 translate-y-[-50%] rounded"
        ></motion.div>
      </div>
      <div className="relative whitespace-nowrap py-2 pr-10 will-change-transform">
        <motion.div variants={text} className="  ">
          <h1>Shocking</h1>
        </motion.div>
        <motion.div
          variants={dot}
          className="absolute  top-1/2 right-3 bg-white min-w-[8px] h-4 translate-y-[-50%] rounded"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default SideNav;
