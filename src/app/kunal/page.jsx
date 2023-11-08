import GLTextSphere from "@/components/GL/GLTextSphere";

const page = () => {
  return (
    <>
      <div className="h-screen w-screen fixed top-0 left-0 -z-10">
        <GLTextSphere />
      </div>
      <div className="h-screen w-screen flex font-mono ave justify-center items-center text-yellow-300 text-[12.5vmin] font-black">
        Kunal Sharma
      </div>
    </>
  );
};

export default page;
