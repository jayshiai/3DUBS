import React from "react";
import { motion } from "framer-motion";
const VerticalDivider = () => {
  return (
    <motion.div
      initial={{
        y: "-100%",
      }}
      animate={{
        y: "0%",
      }}
      transition={{
        delay: 0.4,
        duration: 0.5,
        ease: "linear",
      }}
      exit={{
        y: "100%",
      }}
      className="h-full w-1 bg-black"
    ></motion.div>
  );
};

export default VerticalDivider;
