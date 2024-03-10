"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 },
];
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const ZenEvents = () => {
  const wrapperRef = useRef();
  const [text, setText] = useState("The Three Dubs");
  useEffect(() => {
    const interval = setInterval(() => {
      const index = rand(0, combinations.length - 1),
        combination = combinations[index];

      if (wrapperRef.current) {
        wrapperRef.current.dataset.configuration = combination.configuration;
        wrapperRef.current.dataset.roundness = combination.roundness;
      }
    }, 3000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const shapeVariant = {
    initial: {
      height: "0%",
      width: "0%",
    },
    animate: {
      height: "100%",
      width: "100%",
      transition: {
        delay: 0.5,
        duration: 1,
        ease: [1, 0.1, 0.25, 1.5],
      },
    },
  };

  const textVariant = {
    initial: {
      y: "100%",
    },
    animate: {
      y: "0%",
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [1, 0.1, 0.25, 1.5],
      },
    },
  };
  return (
    <>
      <motion.div
        ref={wrapperRef}
        id="wrapper"
        data-configuration="1"
        data-roundness="1"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        onMouseLeave={() => setText("The Three Dubs")}
      >
        <Link onClick={(el) => {
          el.target.style.transition = "0.5s"

          el.target.style.zIndex = 99999
          el.target.style.scale = 100

        }} onMouseEnter={() => setText("Our Crew")} href={"/crew"} className="shape hover:scale-110   flex justify-center items-center">
          <motion.div
            variants={shapeVariant}
            className="h-full w-full bg-[#b0bec5] rounded-[inherit]"
          ></motion.div>
        </Link>
        <Link
          onClick={(el) => {
            el.target.style.transition = "0.5s"

            el.target.style.zIndex = 99999
            el.target.style.scale = 100

          }}
          onMouseEnter={() => setText("About Us")} href={"/about"} className="shape hover:scale-110  flex justify-center items-center">
          <motion.div
            variants={shapeVariant}
            className="h-full w-full bg-[#f5f5f5] rounded-[inherit]"
          ></motion.div>
        </Link>
        <Link
          onClick={(el) => {
            el.target.style.transition = "0.5s"

            el.target.style.zIndex = 99999
            el.target.style.scale = 100

          }}
          onMouseEnter={() => setText("Jayvardhan Patil")} href={"/jayvardhan"} className="shape hover:scale-110  flex justify-center items-center">
          <motion.div
            variants={shapeVariant}
            className="h-full w-full bg-[#9b5de5] rounded-[inherit]"
          ></motion.div>
        </Link>
        <Link
          onClick={(el) => {
            el.target.style.transition = "0.5s"

            el.target.style.zIndex = 99999
            el.target.style.scale = 100

          }}
          onMouseEnter={() => setText("Contact Us")} href={"/contactus"} className="shape hover:scale-110  flex justify-center items-center">
          <motion.div
            variants={shapeVariant}
            className="h-full w-full bg-[#f15bb5] rounded-[inherit]"
          ></motion.div>
        </Link>
        <Link
          onClick={(el) => {
            el.target.style.transition = "0.5s"

            el.target.style.zIndex = 99999
            el.target.style.scale = 100

          }}
          onMouseEnter={() => setText("Projects")} href={"/projects"} className="shape hover:scale-110  flex justify-center items-center">
          <motion.div
            variants={shapeVariant}
            className="h-full w-full bg-[#fee440] rounded-[inherit]"
          ></motion.div>
        </Link>
        <Link
          onClick={(el) => {
            el.target.style.transition = "0.5s"

            el.target.style.zIndex = 99999
            el.target.style.scale = 100

          }}
          onMouseEnter={() => setText("Kunal Sharma")} href={"/kunal"} className="shape hover:scale-110  flex justify-center items-center">
          <motion.div
            variants={shapeVariant}
            className="h-full w-full bg-[#00bbf9] rounded-[inherit]"
          ></motion.div>
        </Link>
        <Link
          onClick={(el) => {
            el.target.style.transition = "0.5s"

            el.target.style.zIndex = 99999
            el.target.style.scale = 100

          }}
          onMouseEnter={() => setText("Aryan Singh")} href={"/aryan"} className="shape hover:scale-110  flex justify-center items-center">
          <motion.div
            variants={shapeVariant}
            className="h-full w-full bg-[#00f5d4] rounded-[inherit]"
          ></motion.div>
        </Link>
      </motion.div>

      <div className="h-fit overflow-hidden absolute text-[20vmin] cursor-default ave pointer-events-none   w-screen text-center">
        <motion.p
          className="p-0 m-0"
          variants={textVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >{text}
        </motion.p>
      </div>

      <div className="h-fit overflow-hidden absolute text-[20vmin] cursor-default ave z-10 pointer-events-none mix-blend-difference text-stroke   w-screen text-center">
        <motion.p
          className="p-0 m-0"
          variants={textVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >{text}
        </motion.p>
      </div>
    </>
  );
};

export default ZenEvents;


