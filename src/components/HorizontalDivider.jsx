import React from "react";
import { motion } from "framer-motion";
const HorizontalDivider = () => {
  return (
    <motion.div
      initial={{
        x: "-100%",
      }}
      animate={{
        x: "0%",
      }}
      exit={{
        x: "100%",
      }}
      transition={{
        duration: 0.5,
        ease: "linear",
      }}
      className="w-full h-1  bg-black"
    ></motion.div>
  );
};

export default HorizontalDivider;
