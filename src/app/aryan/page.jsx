import BackButton from "@/components/BackButton";
import GLTextTwister from "@/components/GL/GLTextTwister";
import IndividualAbout from "@/components/IndividualAbout";
const description = "I find immense joy in playing cricket and indulging in the timeless melodies of old Bollywood songs. Though I once dreamt of entrepreneurship, my focus has shifted towards mastering the craft of software engineering while prioritizing my well-being. I resonate with the concept of being a 'sakth launda,' where my heart's devotion is solely reserved for that one special person"

const page = () => {
  return (
    <>
      <BackButton />
      <div className="h-screen w-screen fixed top-0 left-0 -z-10">
        <GLTextTwister />
      </div>
      <div className="h-screen w-screen sticky top-0 -z-[5] flex font-mono ave justify-center items-center text-blue-700 text-[12.5vmin] font-black">
        Aryan Singh
      </div>
      <IndividualAbout description={description} quote={"to be or not to be"} title={"Where to be if not here?"} roles={["UX designer", "Coder", "Student"]} skills={["C++", "HTML", "CSS"]} />

    </>
  );
};

export default page;
