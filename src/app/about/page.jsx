"use client";
import AboutNav from "@/components/AboutNav";
import AboutSection from "@/components/AboutSection";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const page = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="h-screen w-screen overflow-hidden bg-black py-1 px-2">
      <AboutNav />
      <div className="h-[92.5%] w-full grid grid-cols-10 grid-rows-1 p-1 gap-1">
        <div className=" col-span-7 h-full bg-white rounded-2xl px-16 overflow-hidden">
          <AnimatePresence>
            {current == 0 && (
              <AboutSection
                name="Kunal Sharma"
                setCurrent={setCurrent}
                next={1}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {current == 1 && (
              <AboutSection
                name="Aryan Chouhan"
                setCurrent={setCurrent}
                next={0}
              />
            )}
          </AnimatePresence>
        </div>
        <div className=" col-span-3 h-full bg-white rounded-2xl"></div>
      </div>
    </div>
  );
};

export default page;
