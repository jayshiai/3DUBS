"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const ImageColumnContainer = ({ children, clicked, loaded }) => {
  const imageColumnContainer = {
    exit: {
      scale: 6,
      transition: {
        delay: 0.75,
        duration: 2.5,
        ease: [0.79, 0, 0, 0.51],
      },
    },
  };
  return (
    <AnimatePresence>
      {!clicked && (
        <motion.div
          variants={imageColumnContainer}
          exit="exit"
          className="h-screen   bg-black  fixed flex justify-around top-0 overflow-hidden z-10"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageColumnContainer;
