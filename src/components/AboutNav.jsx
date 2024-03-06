import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { motion } from "framer-motion";
const AboutNav = () => {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  return (
    <div className="w-full h-[7.5%] grid grid-cols-10 grid-rows-1 gap-1 ">
      <motion.div drag dragSnapToOrigin={true} dragMomentum={false} className="z-50 col-span-5 h-full bg-white rounded-2xl  flex justify-between items-center pl-16 px-14 cursor-move hover:scale-110 hover:drop-shadow-xl active:scale-90 transition-all ease-linear">
        <p className="ave text-2xl cursor-pointer">TheThreeDubs</p>
        <div className="text-xl font-bold font-mono uppercase leading-4 opacity-50 cursor-crosshair">
          <p className="">Best</p>
          <p className="">Buds</p>
        </div>
        <div className="w-[95%] h-[500px] z-50 text-6xl text-black flex flex-col items-center justify-center bg-white border-x-4 py-10 border-b-4 rounded-b-2xl absolute left-[50%] -translate-x-[50%] top-[100%] drop-shadow-2xl">
          <Link href={"/jayvardhan"} className="h-1/3 w-full flex items-center justify-center ave border-y-2 hover:bg-black hover:text-white">Jayvardhan Patil</Link>
          <Link href={"/aryan"} className="h-1/3 w-full flex items-center justify-center rockSalt border-b-2 hover:bg-red-600 hover:text-blue-600">Aryan Singh</Link>
          <Link href={"/kunal"} className="h-1/3 w-full flex items-center justify-center sacramento border-b-2 hover:bg-blue-600 hover:text-yellow-300">Kunal Sharama</Link>
        </div>
      </motion.div>
      <div onClick={() => router.back()} className=" col-span-2 h-full bg-white rounded-2xl flex justify-between items-center  px-14 cursor-pointer hover:scale-110 hover:drop-shadow-xl active:scale-90 transition-all">
        <p className="text-xl font-mono font-extrabold uppercase opacity-50">
          Go Back
        </p>
        <div className=" h-3 w-3 rounded-full bg-black"></div>
      </div>
      <div onClick={() => { setClicked(prev => !prev) }} onMouseLeave={() => setClicked(false)} className="relative z-50 col-span-3 h-full bg-white rounded-2xl flex justify-between items-center px-14 cursor-pointer hover:scale-110 hover:drop-shadow-xl active:scale-90 transition-all">
        <p className="text-xl font-mono font-extrabold uppercase opacity-50">
          Menu:
        </p>
        <div className="flex w-8 justify-around">
          <div className=" h-3 w-3 rounded-full bg-black"></div>
          <div className=" h-3 w-3 rounded-full bg-black"></div>
        </div>
        {clicked && (
          <div className="w-[95%] h-[500px] z-50 text-6xl flex flex-col grotesk  font-extralight transition-all items-center justify-center bg-white border-x-4 py-10 border-b-4 rounded-b-2xl absolute left-[50%] -translate-x-[50%] top-[100%] drop-shadow-2xl">
            <Link className="h-[25%] flex justify-center items-center border-b hover:scale-105" href={"/"}>Home</Link>
            <Link className="h-[25%] flex justify-center items-center border-b hover:scale-105" href={"/contactus"}>Contact Us</Link>
            <Link className="h-[25%] flex justify-center items-center border-b hover:scale-105" href={"/crew"}>Our Crew</Link>
            <Link className="h-[25%] flex justify-center items-center border-b hover:scale-105" href={"/projects"}>Projects</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutNav;
