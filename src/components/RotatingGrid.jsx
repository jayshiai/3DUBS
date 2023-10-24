"use client";
import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
const pics = ["1", "2", "3", "4", "5", "6", "7", "8"];
const GRID_AREAS = "abcdefgh";

const MotionImage = motion(Image);
const RotatingGrid = () => {
  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, { mass: 0.1, restDelta: 0.0001 });

  const rotate = useTransform(spring, (progress) => progress * 270 + "deg");
  const inverseRotate = useTransform(
    spring,
    (progress) => -progress * 270 + "deg"
  );
  const scale = useTransform(spring, (progress) => 1 + progress * 2);

  return (
    <div className="sticky top-0 h-screen w-screen bg-red-600  flex justify-center items-center overflow-hidden">
      <motion.div
        className=" h-fit  grid  grid-cols-[repeat(9,min(6vw,6vh))] grid-rows-[repeat(10,min(6vw,6vh))] gap-2 origin-[50%_45%]"
        style={{
          rotate,
          scale,
          gridTemplateAreas: `
            ". a a a a . . . ."
            ". a a a a b b . ."
            ". a a a a b b . ."
            "c c c d d d e e ."
            "c c c d d d e e ."
            "c c c d d d f f f"
            ". g g h h h f f f"
            ". g g h h h f f f"
            ". . . h h h . . ."
            ". . . h h h . . ."
        `,
        }}
      >
        {pics.map((pic, index) => (
          <div
            key={index}
            className="rounded-xl relative overflow-hidden"
            style={{
              gridArea: `${GRID_AREAS[index]}`,
            }}
          >
            <MotionImage
              src={"/img/" + pic + ".jpg"}
              fill={true}
              className="object-cover"
              style={{ rotate: inverseRotate, scale: 1.725 }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RotatingGrid;
