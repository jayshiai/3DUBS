import BackButton from "@/components/BackButton";
import GLTextSphere from "@/components/GL/GLTextSphere";
import IndividualAbout from "@/components/IndividualAbout";
import FancyCrewText from "@/components/crew/FancyCrewText";

const description = "Hey there! I'm all about the simple joys inspired by pandas—eating, sleeping, a bit of work, and then doing it all over again. I love exploring the colorful world around us and playing with different shades of universe. Designing and bringing ideas to life in web development is my jam. Plus, I'm a tech enthusiast with a decent grasp of C, C++, and some Java and Python basics. When I'm not immersed in coding, you'll probably find me curled up enjoying a nature walk or sleeping . Let's keep it fun, keep learning, and embrace the beauty of simplicity!"
const page = () => {
  const theme = ["#ffbe0b", "#fb5607", "#fcbf49"]
  return (
    <>
      <BackButton />
      <div className="h-screen w-screen fixed top-0 left-0 -z-10">
        <GLTextSphere />
      </div>
      <div className="h-screen w-screen sticky top-0 flex -z-[5]  font-mono justify-center items-center text-red-700 text-[12.5vmin] font-black">

        <FancyCrewText theme={theme} fontFamily={"ave"} text={"Kunal Sharma"} />
      </div>
      <IndividualAbout description={description} quote={"to sleep or not to sleep"} title={"A Good nap is all I need."} roles={["Web Developer", "Coder", "Student"]} skills={["C++", "HTML", "CSS"]} />
    </>
  );
};

export default page;
