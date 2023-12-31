import { motion } from "framer-motion";
import RotatingGrid from "@/components/RotatingGrid";
import ZenEvents from "@/components/ZenEvents";

const page = () => {
  return (
    <>
      <div className="w-screen h-screen grid place-content-center overflow-hidden">
        <ZenEvents />
      </div>
    </>
  );
};

export default page;
