
import BackButton from "@/components/BackButton";
import GLTextTwister from "@/components/GL/GLTextTwister";
import IndividualAbout from "@/components/IndividualAbout";
import FancyCrewText from "@/components/crew/FancyCrewText";

const description = "I find immense joy in playing cricket and indulging in the timeless melodies of old Bollywood songs. Though I once dreamt of entrepreneurship, my focus has shifted towards mastering the craft of software engineering while prioritizing my well-being. I resonate with the concept of being a 'sakth launda,' where my heart's devotion is solely reserved for that one special person"

const page = () => {
  const theme = ["#1d4ed8", "#3d6bec", "#557ef4"]
  return (
    <>
      <BackButton />
      <div className="h-screen w-screen fixed  top-0 left-0 -z-10">
        <GLTextTwister />
      </div>
      <div className="h-screen w-screen sticky top-0 flex -z-[5]  font-mono justify-center items-center text-red-700 text-[12.5vmin] font-black">

        <FancyCrewText theme={theme} fontFamily={"ave"} text={"Aryan Singh"} />
      </div>
      <IndividualAbout description={description} quote={"Ye kya likhna pad raha hai"} title={"Kunal ka hi copy karke likhdu?"} roles={["Web Developer", "Coder", "Student"]} skills={["C++", "HTML", "CSS"]} />

    </>
  );
};

export default page;
