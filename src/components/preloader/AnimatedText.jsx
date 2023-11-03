"use client";

import { motion, AnimatePresence } from "framer-motion";
const AnimatedText = ({ clicked, setTextAnimated, loaded }) => {
  const abhivyakti = Array.from("TheThreeDubs");

  const textVariant = {
    exit: {
      scale: [1, 0.75, 200],
      x: ["0%", "0%", "100%"],
      y: ["0%", "0%", "5000%"],
      transition: {
        delay: 2.5,
        duration: 1,
        ease: [0.5, 0, 0.15, 0.85],
      },
    },
  };

  const animatedTextOne = {
    initial: {
      y: "150%",
      opacity: 0.4,
    },
    animate: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1.5,
        opacity: {
          delay: 3,
          duration: 1,
        },
        ease: [1, 0.1, 0.25, 1.5],
      },
    },
    exit: {
      y: ["0%", "-50%", "0%"],
      transition: {
        duration: 1,
        ease: [1, 0.1, 0.25, 1.5],
      },
    },
  };
  const animatedTextTwo = {
    initial: {
      y: "-150%",
      opacity: 0.4,
    },
    animate: {
      y: "0%",
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1.5,
        opacity: {
          delay: 3,
          duration: 1,
        },
        ease: [1, 0.1, 0.25, 1.5],
      },
    },
    exit: {
      y: ["0%", "50%", "0%"],
      transition: {
        duration: 1,
        ease: [1, 0.1, 0.25, 1.5],
      },
    },
  };
  return (
    <AnimatePresence>
      {!clicked && (
        <motion.div
          variants={textVariant}
          exit="exit"
          onAnimationComplete={() => setTextAnimated(true)}
          className=" whitespace-nowrap text-white font-mono ave cursor-pointer z-[100] text-7xl md:text-9xl"
        >
          <div className="overflow-hidden ">
            {abhivyakti.map((letter, index) => (
              <motion.div
                key={index}
                variants={index % 2 == 0 ? animatedTextOne : animatedTextTwo}
                initial="initial"
                animate={loaded ? "animate" : "initial"}
                exit="exit"
                className=" inline-block"
              >
                {letter}
              </motion.div>
            ))}
          </div>

          <div className="overflow-hidden text-end">
            <motion.div
              variants={animatedTextTwo}
              initial="initial"
              animate={loaded ? "animate" : "initial"}
              transition={{
                delay: 0,
              }}
              className=" inline-block"
            >
              20
            </motion.div>
            <motion.div
              variants={animatedTextOne}
              initial="initial"
              animate={loaded ? "animate" : "initial"}
              transition={{
                delay: 1,
              }}
              className=" inline-block"
            >
              23
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedText;
