"use client";
import React, { useEffect, useRef, useState } from "react";

import ReactCurvedText from "react-curved-text";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionImage = motion(Image);
const scaleImageVariant = {
  initial: {
    scale: 0,
  },
  scale: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
};
const images = [];
for (let i = 15; i < 26; i++) {
  images.push(
    <MotionImage
      key={i}
      variants={scaleImageVariant}
      src={`/img/${i}.jpg`}
      fill={true}
      alt="image"
      sizes="20vw"
      className="object-cover "
    />
  );
}
const RotatingIntro = () => {
  const [size, setSize] = useState(
    Math.min(window.innerHeight, window.innerWidth) * 0.9
  );

  const handleResize = () => {
    let minSize = Math.min(window.innerHeight, window.innerWidth);
    setSize(minSize * 0.9);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* <ReactCurvedText
        width={size}
        height={size}
        cx={size / 2}
        cy={size / 2}
        rx={size / 2}
        ry={size / 2}
        startOffset="0"
        reversed={false}
        text="AbhivYakti 2023 - AbhivYakti 2023 - AbhivYakti 2023 - AbhivYakti 2023 -"
        textProps={{
          style: {
            fontSize: `${size / 10.25}`,
            fontFamily: "Sedgwick Ave Display",
            fontWeight: 100,
          },
        }}
        textPathProps={null}
        tspanProps={{ dy: "0" }}
        ellipseProps={null}
        svgProps={{ className: "rotating-curved-text" }}
      /> */}
      <motion.div
        transition={{
          staggerChildren: 0.25,
        }}
        initial="initial"
        animate="scale"
        className="absolute h-[75vmin] w-[60vmin]  "
      >
        {images}
      </motion.div>
    </>
  );
};

export default RotatingIntro;
