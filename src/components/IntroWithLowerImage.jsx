import React from "react";
import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
const IntroWithLowerImage = () => {
  // Create motion values to store the mouse position
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
    <div className="w-screen h-screen">
      <div className="w-full h-[55vh] flex items-end px-[7.5vw]">
        <div className=" overflow-hidden">
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "0%",
            }}
            transition={{
              duration: 1,
              delay: 2,
              ease: [1, 0.1, 0.25, 1.5],
            }}
            className=" ave text-mono text-[10vw]"
          >
            The
          </motion.div>
          <motion.div
            initial={{
              y: "200%",
            }}
            animate={{
              y: "0%",
            }}
            transition={{
              duration: 1,
              delay: 1,
              ease: [1, 0.1, 0.25, 1.5],
            }}
            className=" ave text-mono text-[max(125px,10vw)]  leading-[max(125px,10vw)]"
          >
            Three Dubs
          </motion.div>
        </div>
      </div>
      <div className="w-full h-[40vh]  flex justify-center items-center">
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
          className="w-[85vw] h-[40vh] relative overflow-hidden rounded-3xl"
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
        </motion.div>
      </div>
    </div>
  );
};

export default IntroWithLowerImage;
