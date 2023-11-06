import IntroWithLowerImage from "./IntroWithLowerImage";
import ZenEvents from "./ZenEvents";

const HomePage = () => {
  return (
    <>
      {/* <LogoText /> */}
      <div>
        <IntroWithLowerImage />
        <div className="w-screen h-screen flex justify-center items-center">
          <ZenEvents />
        </div>
      </div>
    </>
  );
};

export default HomePage;
