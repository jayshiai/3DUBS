"use client";
import ImageColumn from "@/components/ImageColumn";
import ImageColumnContainer from "@/components/ImageColumnContainer";
import ImageColumnInverse from "@/components/ImageColumnInverse";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Home() {
  const [clicked, setClicked] = useState(false);
  const abhivyakti = Array.from("Abhivyakti");
  return (
    <div className="h-screen w-screen flex justify-around items-center relative overflow-hidden">
      <ImageColumnContainer clicked={clicked}>
        <ImageColumnInverse clicked={clicked} />
        <ImageColumn clicked={clicked} />
        <ImageColumnInverse clicked={clicked} />
        <ImageColumn clicked={clicked} />
        <ImageColumnInverse clicked={clicked} />
      </ImageColumnContainer>
      <div
        onClick={() => setClicked(true)}
        className=" whitespace-nowrap font-mono cursor-pointer z-[100] text-7xl md:text-9xl"
      >
        <div className="overflow-hidden">
          {abhivyakti.map((letter, index) => (
            <motion.div
              key={letter}
              initial={{
                y: `${index % 2 == 0 ? "150%" : "-150%"}`,
                opacity: 0.4,
              }}
              animate={{
                y: "0%",
                opacity: 1,
              }}
              transition={{
                duration: `${index % 2 == 0 ? 1.5 : 3.5}`,
                opacity: {
                  delay: 3,
                  duration: 1,
                },
                ease: [1, 0.1, 0.25, 1.5],
              }}
              className=" inline-block"
            >
              {letter}
            </motion.div>
          ))}
        </div>
        <div className="overflow-hidden">
          <motion.div
            initial={{
              y: "-150%",
              opacity: 0.4,
            }}
            animate={{
              y: "0%",
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              opacity: {
                delay: 3,
                duration: 1,
              },
              ease: [1, 0.1, 0.25, 1.5],
            }}
            className=" inline-block"
          >
            20
          </motion.div>
          <motion.div
            initial={{
              y: "150%",
              opacity: 0.4,
            }}
            animate={{
              y: "0%",
              opacity: 1,
            }}
            transition={{
              duration: 3.5,
              opacity: {
                delay: 3,
                duration: 1,
              },
              ease: [1, 0.1, 0.25, 1.5],
            }}
            className=" inline-block"
          >
            23
          </motion.div>
        </div>
      </div>
    </div>
  );
}
