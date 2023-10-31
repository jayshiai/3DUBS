"use client";
import { motion } from "framer-motion";
const LogoText = () => {
  const abhivyakti = Array.from("AbhivYakti");

  const animationVariants = {
    initial: { opacity: 0, y: 150 },
    animate: { opacity: 1, y: [150, 0] },
    transition: {
      duration: 0.08,
    },
    animateOutline: { opacity: 1, y: [-25, 0] },
    transition: {
      duration: 0.08,
    },
    hoverEnter: { y: [0, -25] },
  };

  return (
    <div className="">
      <motion.div
        initial="initial"
        animate="animateOutline"
        whileHover="hoverEnter"
        className="fixed mix-blend-exclusion text-stroke   cursor-pointer z-[100]  rotate-90 top-0 left-0 -translate-x-[40%] translate-y-[100%]  ave  "
      >
        {abhivyakti.map((letter, index) => (
          <motion.div
            key={index}
            variants={animationVariants}
            transition={{
              ...animationVariants.transition,
              delay: index * 0.08,
              y: {
                delay: (index + 5) * 0.08,
              },
              opacity: {
                delay: (index + 5) * 0.08,
              },
            }}
            className=" inline-block    text-center text-[min(15vh,_15vw)] "
          >
            {letter}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="fixed mix-blend-difference  cursor-pointer -z-[50] text-white  rotate-90 top-0 left-0 -translate-x-[40%] translate-y-[100%]  ave  "
      >
        {abhivyakti.map((letter, index) => (
          <motion.div
            key={index}
            variants={animationVariants}
            transition={{
              ...animationVariants.transition,
              delay: index * 0.08,
              y: {
                delay: (index + 5) * 0.08,
              },
            }}
            className=" inline-block  text-center text-[min(15vh,_15vw)] "
          >
            {letter}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoText;
