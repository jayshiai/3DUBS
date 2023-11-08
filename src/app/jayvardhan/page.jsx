import GLTextTorus from "@/components/GL/GLTextTorus";

const page = () => {
  return (
    <>
      <div className="h-screen w-screen fixed top-0 left-0 -z-10">
        <GLTextTorus />
      </div>
      <div className="h-screen w-screen flex font-mono ave justify-center items-center text-red-700 text-[12.5vmin] font-black">
        Jayvardhan Patil
      </div>
    </>
  );
};

export default page;
