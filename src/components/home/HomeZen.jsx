import { Canvas } from "react-three-fiber";
import CursorEffect from "../CursorEffect";

import ZenEvents from "../ZenEvents";
import MarqueeText from "../MarqueeText";
import LogoOverlay from "../LogoOverlay";
import NavComponent from "../nav/NavComponent";


const HomeZen = ({ completed }) => {
    return (
        <>
            {/* <LogoText /> */}
            <LogoOverlay />

            <CursorEffect />
            <div className="w-screen h-screen fixed top-0 flex justify-center items-center">

                <ZenEvents />
            </div>
            <div className='h-screen w-screen fixed top-0 left-0 -z-10'>
                <Canvas >
                    <MarqueeText position={[0, 0, 0]} speed={1} text={"3DUBS"} hovered={false} color={"#000"} />
                </Canvas>
            </div>
        </>
    )
}

export default HomeZen