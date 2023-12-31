import React from "react";
import AnimatedTextReveal from "@/components/AnimatedTextReveal";
import { motion } from "framer-motion";
import HorizontalDivider from "./HorizontalDivider";
import VerticalDivider from "./VerticalDivider";
const AboutIntro = ({ fontFamily, theme, placeholderText }) => {
  const vertVariants = {
    initial: {
      y: "100%",
    },
    animate: {
      y: "0%",
      transition: {
        delay: 1,
        duration: 0.5,
        ease: "linear",
      },
    },
    exit: {
      y: "100%",
      transition: {
        delay: 0,
        duration: 0.5,
        ease: "linear",
      },
    },
  };

  const horVariants = {
    initial: {
      x: "-100%",
    },
    animate: {
      x: "0%",
      transition: {
        delay: 1,
        duration: 0.5,
        ease: "linear",
      },
    },

    exit: {
      x: "105%",
      transition: {
        delay: 0,
        duration: 0.5,
        ease: "linear",
      },
    },
  };
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`overflow-hidden text-5xl h-[12.5%] p-5 ${fontFamily}`}
      >
        <AnimatedTextReveal
          type="paragraph"
          overflow="visible"
          text="About"
          key="about"
        />
      </motion.div>
      <HorizontalDivider />
      <div className="overflow-hidden w-full h-[40%] flex">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          className="h-full w-4/5 p-4 text-black flex flex-col gap-2  montserrat "
        >
          {placeholderText.map((item, index) => {
            return <AnimatedTextReveal {...item} key={index} />;
          })}
        </motion.div>
        <VerticalDivider />
        <div className="overflow-hidden w-1/5 h-full ">
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={vertVariants}
            style={{
              backgroundColor: `${theme}`,
            }}
            className="w-full h-full"
          ></motion.div>
        </div>
      </div>
      <HorizontalDivider />
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`overflow-hidden text-5xl h-[12.5%] p-5 ${fontFamily}`}
      >
        <AnimatedTextReveal
          type="paragraph"
          overflow="visible"
          text="Skills"
          key="skills"
        />
      </motion.div>
      <HorizontalDivider />
      <div className="overflow-hidden w-full h-[35%] flex justify-end">
        <div className="overflow-hidden w-1/5 h-full ">
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={horVariants}
            style={{
              backgroundColor: `${theme}`,
            }}
            className="w-full h-full"
          ></motion.div>
        </div>
        <VerticalDivider />
        <div className="w-[80%]"></div>
      </div>
    </>
  );
};

export default AboutIntro;
