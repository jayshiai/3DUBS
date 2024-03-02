import { Canvas } from "react-three-fiber";
import CursorEffect from "../CursorEffect";
import LogoOverlay from "../LogoOverlay";
import ZenEvents from "../ZenEvents";
import MarqueeText from "../MarqueeText";


const HomeZen = ({ completed }) => {
    return (
        <>
            {/* <LogoText /> */}

            <CursorEffect />
            <div className="w-screen h-screen flex justify-center items-center">
                <LogoOverlay />
                <ZenEvents />
            </div>
            <div className='h-screen w-screen absolute top-0 left-0 -z-10'>
                <Canvas >
                    <MarqueeText position={[0, 0, 0]} speed={1} text={"3DUBS"} hovered={false} color={"#000"} />
                </Canvas>
            </div>
        </>
    )
}

export default HomeZen