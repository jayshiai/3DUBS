import React from "react";

const AboutNav = () => {
  return (
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
  );
};

export default AboutNav;
