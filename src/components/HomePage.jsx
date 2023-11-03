import LogoText from "./LogoText";
import { motion } from "framer-motion";
import RotatingGrid from "./RotatingGrid";
import ZenEvents from "./ZenEvents";
import Image from "next/image";
const HomePage = () => {
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
                The{" "}
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
                className=" ave text-[max(150px,15vw)] leading-[max(150px,10vw)]"
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
              className="w-[85vw] h-[40vh] relative"
            >
              <Image
                src="/img/beach.jpg"
                fill={true}
                className="rounded-3xl object-cover"
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
