import { motion, useMotionValue, useTransform } from "framer-motion";
import ZenEvents from "./ZenEvents";
import Image from "next/image";

const MotionImage = motion(Image);
const HomePage = () => {
  // Create motion values to store the mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Create transform values to move the image based on the mouse position
  const translateX = useTransform(x, [-200, 200], [-50, 50]);
  const translateY = useTransform(y, [-200, 200], [-50, 50]);

  // Create a function to handle the mouse move event
  const handleMouseMove = (event) => {
    // Get the bounding rectangle of the image container
    const rect = event.currentTarget.getBoundingClientRect();
    // Set the motion values to the mouse position relative to the container
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  return (
    <>
      {/* <LogoText /> */}
      <div>
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
                className=" ave text-[7.5vw]"
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
                className=" ave text-[max(150px,10vw)] tracking-widest leading-[max(150px,10vw)]"
              >
                Three Dubs
              </motion.div>
            </div>
          </div>
          <div className="w-full h-[40vh]  flex justify-center items-center">
            <motion.div
              initial={{
                width: "0vw",
                scale: 1,
              }}
              animate={{
                width: "85vw",
              }}
              transition={{
                duration: 1,
                ease: [1, 0.1, 0.25, 1.5],
              }}
              whileHover={{
                scale: 1.1,
              }}
              className="w-[85vw] h-[40vh] relative overflow-hidden rounded-3xl"
              // Add the mouse move event handler to the image container
              onMouseMove={handleMouseMove}
            >
              <MotionImage
                src="/img/beach.jpg"
                fill={true}
                className=" object-cover object-[50%_50%] "
                // Add the transform values to the image style
                style={{ x: translateX, y: translateY }}
              />
            </motion.div>
          </div>
        </div>
        <div className="w-screen h-screen flex justify-center items-center">
          <ZenEvents />
        </div>
      </div>
    </>
  );
};

export default HomePage;
