import React from "react";
import AboutTitle from "@/components/AboutTitle";
import HeroImage from "@/components/HeroImage";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const AboutSection = ({ name, setCurrent, next, fontFamily, theme }) => {
  return (
    <motion.div
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      animate={{
        x: "0%",
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeIn",
      }}
      exit={{
        x: "100%",
      }}
      className="h-full w-full"
    >
      <AboutTitle fontFamily={fontFamily} name={name} />
      <div className="h-[47.5%] w-full ">
        <div className="h-[20%] flex items-center justify-between px-5">
          <div className="text-xl font-mono opacity-60">15 / 04</div>
          <div className=" w-[80%] h-[3px] bg-black/40"></div>
          <div className="text-xl font-mono opacity-60">60 / 77</div>
        </div>
        <HeroImage />
      </div>

      <div
        onClick={() => setCurrent(next)}
        style={{
          backgroundColor: `${theme}`,
        }}
        className="h-[10%] w-full cursor-pointer  m-auto  rounded-3xl text-white flex items-center justify-end px-14 text-5xl"
      >
        <div className="ave mt-3 mr-5 tracking-wider">Next Dub</div>

        <BsArrowRight />
      </div>
    </motion.div>
  );
};

export default AboutSection;
