"use client";
import AboutNav from "@/components/AboutNav";
import AboutSection from "@/components/AboutSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const sections = [
  { name: "Aryan Chouhan", next: 1, fontFamily: "rockSalt", theme: "#EF4444" },
  { name: "Kunal Sharma", next: 0, fontFamily: "sacramento", theme: "#3399ff" },
];

const page = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="h-screen w-screen overflow-hidden bg-black py-1 px-2">
      <AboutNav />
      <div className="h-[92.5%] w-full grid grid-cols-10 grid-rows-1 p-1 gap-1">
        <div className=" col-span-7 h-full bg-white rounded-2xl px-16 overflow-hidden">
          <AnimatePresence mode="wait">
            <AboutSection
              key={sections[current].next}
              name={sections[current].name}
              setCurrent={setCurrent}
              next={sections[current].next}
              fontFamily={sections[current].fontFamily}
              theme={sections[current].theme}
            />
          </AnimatePresence>
        </div>
        <div className="overflow-hidden col-span-3 h-full bg-white rounded-2xl ">
          <div
            className={`text-5xl h-[12.5%] p-5 ${sections[current].fontFamily}`}
          >
            About
          </div>
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "0%",
            }}
            transition={{
              duration: 0.5,
              ease: "linear",
            }}
            className="w-full h-1  bg-black"
          ></motion.div>
          <div className="overflow-hidden w-full h-[40%] flex">
            <div className="h-full w-4/5"></div>
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
              className="h-full w-1 bg-black"
            ></motion.div>
            <div
              style={{
                backgroundColor: `${sections[current].theme}`,
              }}
              className="w-1/5 h-full "
            ></div>
          </div>
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "0%",
            }}
            transition={{
              duration: 0.5,
              ease: "linear",
            }}
            className="w-full h-1  bg-black"
          ></motion.div>
          <div
            className={`text-5xl h-[12.5%] p-5 ${sections[current].fontFamily}`}
          >
            Skills
          </div>
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "0%",
            }}
            transition={{
              duration: 0.5,
              ease: "linear",
            }}
            className="w-full h-1  bg-black"
          ></motion.div>
          <div className="overflow-hidden w-full h-[35%] flex justify-end">
            <div
              style={{
                backgroundColor: `${sections[current].theme}`,
              }}
              className="h-full w-[20%]"
            ></div>
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
              className="h-full w-1 bg-black"
            ></motion.div>
            <div className="w-[80%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
