"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
const page = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [cords, setCords] = useState({ x: 0, y: 0 });
  // Create a function to handle the mouse move event
  const handleMouseMove = (event) => {
    // Get the bounding rectangle of the image container
    const rect = event.currentTarget.getBoundingClientRect();
    // Set the motion values to the mouse position relative to the container
    let x_edit =
      ((event.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 50;
    let y_edit =
      ((event.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * 50;
    x.set(x_edit);
    y.set(y_edit);

    setCords({
      x: x.get(),
      y: y.get(),
    });

    console.log(rect.height);
  };
  return (
    <div className="h-screen w-screen overflow-hidden bg-black py-1 px-2">
      <div className="w-full h-[7.5%] grid grid-cols-10 grid-rows-1 gap-1 ">
        <div className=" col-span-5 h-full bg-white rounded-2xl  flex justify-between items-center pl-16 px-14">
          <p className="ave text-2xl cursor-pointer">TheThreeDubs</p>
          <div className="text-xl font-bold font-mono uppercase leading-4 opacity-50 cursor-crosshair">
            <p className="">Best</p>
            <p className="">Buds</p>
          </div>
        </div>
        <div className=" col-span-2 h-full bg-white rounded-2xl flex justify-between items-center  px-14">
          <p className="text-xl font-mono font-extrabold uppercase opacity-50">
            Menu
          </p>
          <div className=" h-3 w-3 rounded-full bg-black"></div>
        </div>
        <div className=" col-span-3 h-full bg-white rounded-2xl flex justify-between items-center px-14">
          <p className="text-xl font-mono font-extrabold uppercase opacity-50">
            Intro:
          </p>
          <div className="flex w-8 justify-around">
            <div className=" h-3 w-3 rounded-full bg-black"></div>
            <div className=" h-3 w-3 rounded-full bg-black"></div>
          </div>
        </div>
      </div>
      <div className="h-[92.5%] w-full grid grid-cols-10 grid-rows-1 p-1 gap-1">
        <div className=" col-span-7 h-full bg-white rounded-2xl px-16 ">
          <div className="h-[40%] w-full   flex flex-col justify-center font-mono ">
            <div className="text-[10vw] sacramento leading-[10vmin]">
              Kunal Shrama
            </div>
            <div className=" w-full flex">
              <div className="ml-auto md:ml-[47.5%] text-2xl h-0 uppercase font-mono tracking-widest font-black opacity-50">
                <p>Chill</p>
                <p>Sleepy</p>
                <p>Peace</p>
              </div>
            </div>
          </div>
          <div className="h-[47.5%] w-full ">
            <div className="h-[20%] flex items-center justify-between px-5">
              <div className="text-xl font-mono opacity-60">15 / 04</div>
              <div className=" w-[80%] h-[3px] bg-black/40"></div>
              <div className="text-xl font-mono opacity-60">60 / 77</div>
            </div>
            <div className="w-full h-[75%]  flex justify-center items-center">
              <motion.div
                initial={{
                  width: "0vw",
                }}
                animate={{
                  width: "85vw",
                }}
                transition={{
                  duration: 1,
                  ease: [1, 0.1, 0.25, 1.5],
                }}
                className="w-[85vw] h-full relative overflow-hidden rounded-3xl"
                // Add the mouse move event handler to the image container
                onMouseMove={handleMouseMove}
                onMouseLeave={() =>
                  setCords({
                    x: 0,
                    y: 0,
                  })
                }
              >
                <Image
                  src="/img/beach.jpg"
                  fill={true}
                  className=" object-cover ease-linear duration-1000"
                  // Add the object-position style based on the mouse position
                  style={{
                    objectPosition: `${50 + cords.x}% ${50 + cords.y}%`,
                  }}
                />
                <div className="z-10  text-white font-mono font-bold opacity-80 text-2xl absolute bottom-0 m-5 uppercase">
                  <div>Nationality: Indian</div>
                  <div>Hobbies: Eat, Sleep, Repeat</div>
                  <div>From: Indore, Madhya Pradesh</div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="h-[10%] w-full cursor-pointer  m-auto  bg-black rounded-3xl text-white flex items-center justify-end px-14 text-7xl">
            <div className="ave mt-3 mr-5 tracking-wider">Next Dub</div>

            <BsArrowRight />
          </div>
        </div>
        <div className=" col-span-3 h-full bg-white rounded-2xl"></div>
      </div>
    </div>
  );
};

export default page;
