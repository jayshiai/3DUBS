import { motion } from "framer-motion";
import RotatingGrid from "@/components/RotatingGrid";

const page = () => {
  return (
    <>
      <div className="h-[300vh] w-screen ">
        <RotatingGrid />
      </div>
    </>
  );
};

export default page;
