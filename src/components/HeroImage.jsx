import React from "react";
import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
const HeroImage = ({ hobbies, location, fontFamily }) => {
  const image = {
    "ave": "/img/frieren.webp",
    "rockSalt": "/img/beach.jpg",
    "sacramento": "/img/frieren.png",
  }
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
    <div className="w-full h-[75%]  flex justify-center items-center">
      <motion.div
        // initial={{
        //   width: "0vw",
        // }}
        // animate={{
        //   width: "85vw",
        // }}
        // transition={{
        //   duration: 1,
        //   ease: [1, 0.1, 0.25, 1.5],
        // }}
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
          src={image[fontFamily]}
          fill={true}
          className=" object-cover ease-linear duration-1000"
          // Add the object-position style based on the mouse position
          style={{
            objectPosition: `${50 + cords.x}% ${50 + cords.y}%`,
          }}
        />
        <div className="z-10  text-white font-mono font-bold opacity-80 text-2xl absolute bottom-0 m-5 uppercase">
          <div>Nationality: Indian</div>
          <div>{hobbies}</div>
          <div>{location}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroImage;
