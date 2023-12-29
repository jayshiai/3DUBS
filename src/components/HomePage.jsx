import CursorEffect from "./CursorEffect";
import IntroWithLowerImage from "./IntroWithLowerImage";
import RandomCircle from "./RandomCircle";
import ZenEvents from "./ZenEvents";

const HomePage = () => {


    
  return (
    <>
      {/* <LogoText /> */}
      <CursorEffect />
      <div>
        <RandomCircle />
        <div className="w-screen h-screen flex justify-center items-center">
          <ZenEvents />
        </div>
      </div>
    </>
  );
};

export default HomePage;
