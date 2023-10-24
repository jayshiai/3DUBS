"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";

const pics = ["11", "12", "13", "14"];
const ImageColumn = () => {
  const [scope, animate] = useAnimate();
  const [scopeDup, animateDup] = useAnimate();
  useEffect(() => {
    const animation = async () => {
      animate(
        scope.current,
        { y: ["-100vh", "0vh"], height: ["300vh", "100vh"], opacity: 1 },
        {
          duration: 1.5,
          opacity: {
            duration: 0,
          },
          ease: [0.91, 0.13, 0.4, 0.77],
        }
      );
      animateDup(
        scopeDup.current,
        { y: ["0vh", "100vh"] },
        {
          delay: 1.2,
          duration: 3,

          ease: "linear",
          repeat: "Infinity",
          repeatType: "loop",
        }
      );
    };

    animation();
  }, []);

  return (
    <div
      ref={scopeDup}
      className="w-1/5  absolute bottom-0 flex flex-col gap-3"
    >
      <div className="h-[100vh]   w-full flex flex-col justify-between items-center">
        {pics.map((pic, index) => (
          <div className="w-full h-[24vh] relative">
            <Image src={`/img/${pic}.jpg`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <div
        layout
        ref={scope}
        className="h-[300vh] opacity-0 w-full flex flex-col justify-between items-center"
      >
        {pics.map((pic, index) => (
          <div className="w-full h-[24vh] relative">
            <Image src={`/img/${pic}.jpg`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageColumn;
