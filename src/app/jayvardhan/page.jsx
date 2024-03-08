"use client"
import BackButton from "@/components/BackButton";
import GLTextTorus from "@/components/GL/GLTextTorus";
import IndividualAbout from "@/components/IndividualAbout";
const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minima expedita maxime ab esse neque, velit enim, fugiat optio quaerat non voluptate cupiditate perspiciatis harum hic! Ducimus asperiores assumenda, beatae perferendis sunt at, nisi veritatis molestias vitae, neque minus unde aut repudiandae sapiente error deleniti reprehenderit officiis doloremque enim qui."

const page = () => {


  return (
    <>
      <BackButton />
      <div className="h-screen w-screen fixed top-0 left-0 -z-10">
        <GLTextTorus />
      </div>
      <div className="h-screen w-screen sticky top-0 flex -z-[5]  font-mono ave justify-center items-center text-red-700 text-[12.5vmin] font-black">
        Jayvardhan Patil
      </div>
      <IndividualAbout description={description} quote={"to be or not to be"} title={"Where to be if not here?"} roles={["UX designer", "Coder", "Student"]} skills={["C++", "HTML", "CSS"]} />

    </>
  );
};

export default page;
