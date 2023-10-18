"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
const page = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div className="h-screen w-screen bg-red-600 flex justify-center items-center">
        <motion.div
          className="absolute top-0 left-0 h-screen w-screen bg-black origin-right"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [1, 0] }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>

        <Link href="/" className="text-white text-xl">
          Home
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default page;
