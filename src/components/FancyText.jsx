import React from "react";
const FancyText = ({ text }) => {
  return (
    <>
      <div className=" text-[20vmin] cursor-default ave  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-screen text-center">
        {text}
      </div>
      <div className=" text-[20vmin] cursor-default ave z-10 mix-blend-difference text-stroke  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-screen text-center">
        {text}
      </div>
    </>
  );
};

export default FancyText;
