import GLTextSphere from "@/components/GL/GLTextSphere";
import GLTextTorus from "@/components/GL/GLTextTorus";
import GLText from "@/components/GL/GLTextTorus";
import GLTextTwister from "@/components/GL/GLTextTwister";
import GlComponent from "@/components/GL/GlComponent";
import React from "react";

const page = () => {
  return (
    <>
      <div className="h-screen w-screen fixed top-0 left-0 -z-10">
        <GLTextTwister />
      </div>
      <div className="h-screen w-screen flex font-mono ave justify-center items-center text-blue-700 text-[12.5vmin] font-black">
        Aryan Singh
      </div>
    </>
  );
};

export default page;
