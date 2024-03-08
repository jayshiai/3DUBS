"use client"
import BackButton from "@/components/BackButton";
import GLTextTorus from "@/components/GL/GLTextTorus";
import IndividualAbout from "@/components/IndividualAbout";
import FancyCrewText from "@/components/crew/FancyCrewText";
const description = "What is my life's worth? This is a question that has been haunting me and has plauged me from the very beginning. Is it my net worth? Or the worth other people assign me? Is it the worth of my work? Is it the strength of my limbs, vigor of youth? Or power that I may weild, wisdom of the old? After years of contemplation, the answer I arrived at is this - Eudaimonia: Metric by which I'll judge my life's worth is by the number of people whose lives I've touched."

const page = () => {

  const theme = ["#FD4556", "#BD3944", "#b91c1c"]
  return (
    <>
      <BackButton />
      <div className="h-screen w-screen fixed top-0 left-0 -z-10">
        <GLTextTorus />
      </div>
      <div className="h-screen w-screen sticky top-0 flex -z-[5]  font-mono justify-center items-center text-red-700 text-[12.5vmin] font-black">
        <FancyCrewText theme={theme} fontFamily={"ave"} text={"Jayvardhan Patil"} />
      </div>

      <IndividualAbout description={description} quote={"to be or not to be"} title={"Where to be if not here?"} roles={["DevsTomorrow", "3Dubs", "Coder"]} skills={["WebDev", "AI/ML", "Being Helpful"]} />

    </>
  );
};

export default page;
