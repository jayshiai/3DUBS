import LogoText from "./LogoText";
import { motion } from "framer-motion";
import RotatingGrid from "./RotatingGrid";
import ZenEvents from "./ZenEvents";
const HomePage = () => {
  return (
    <>
      <LogoText />

      <div className="w-screen h-screen grid place-content-center">
        <ZenEvents />
      </div>
    </>
  );
};

export default HomePage;
