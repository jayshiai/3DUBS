import React from "react";
import FancyCrewText from "./crew/FancyCrewText";

const AboutTitle = ({ name, fontFamily }) => {
  const theme = {
    "ave": ["#AAAAAA", "#000000", "#555555"],
    "rockSalt": ["#FD4556", "#BD3944", "#b91c1c"],
    "sacramento": ["#1d4ed8", "#3d6bec", "#5ec2ff"],

  }
  return (
    <div className="h-[40%] w-full relative  flex flex-col justify-center font-mono ">
      <div className={`${fontFamily == "rockSalt" ? "text-[6vw]" : "text-[9vw]"} absolute h-full flex items-center top-0`}><FancyCrewText fontFamily={fontFamily} text={name} theme={theme[fontFamily]} /></div>
      {/* <div className=" w-full flex">
              <div className="ml-auto md:ml-[47.5%] text-2xl h-0 uppercase font-mono tracking-widest font-black opacity-50 ">
                <p>Chill</p>

                <p>Sleepy</p>

                <p>Peace</p>
              </div>
            </div> */}
    </div>
  );
};

export default AboutTitle;
