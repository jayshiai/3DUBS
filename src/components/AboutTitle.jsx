import React from "react";

const AboutTitle = ({ name, fontFamily }) => {
  return (
    <div className="h-[40%] w-full   flex flex-col justify-center font-mono ">
      <div className={`text-9xl ${fontFamily}`}>{name}</div>
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
