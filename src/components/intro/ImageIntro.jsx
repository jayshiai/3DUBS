
import AnimatedText from "@/components/preloader/AnimatedText";
import ImageColumn from "@/components/preloader/ImageColumn";
import ImageColumnContainer from "@/components/preloader/ImageColumnContainer";
import ImageColumnInverse from "@/components/preloader/ImageColumnInverse";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const picsContainer = [
    "1",
    "12",
    "23",
    "34",
    "45",
    "6",
    "17",
    "28",
    "39",
    "10",
    "21",
    "32",
    "43",
    "14",
    "25",
    "36",
    "47",
    "18",
    "29",
    "30",
];
const ImageIntro = ({ completed, setCompleted }) => {
    const [clicked, setClicked] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [loadedImages, setLoadedImages] = useState(0);
    useEffect(() => {
        if (loadedImages == 20) {
            setTimeout(() => {
                setLoaded(true);
            }, 1750);
        }
    }, [loadedImages]);
    return (
        <div
            onClick={() => setClicked(true)}
            className={`absolute top-0 left-0 h-screen w-screen flex justify-around items-center bg-black z-50 overflow-hidden ${completed ? "pointer-events-none opacity-0" : ""}`}
        >
            {!loaded && (
                <div className="text-base text-white absolute z-[300]">
                    {Math.floor((loadedImages / 20) * 100)}%
                </div>
            )}
            <ImageColumnContainer clicked={clicked} loaded={loaded}>
                <ImageColumnInverse
                    clicked={clicked}
                    pics={picsContainer.slice(0, 4)}
                    setLoadedImages={setLoadedImages}
                    loaded={loaded}
                />
                <ImageColumn
                    clicked={clicked}
                    pics={picsContainer.slice(4, 8)}
                    setLoadedImages={setLoadedImages}
                    loaded={loaded}
                />
                <ImageColumnInverse
                    clicked={clicked}
                    pics={picsContainer.slice(8, 12)}
                    setLoadedImages={setLoadedImages}
                    loaded={loaded}
                />
                <ImageColumn
                    clicked={clicked}
                    pics={picsContainer.slice(12, 16)}
                    setLoadedImages={setLoadedImages}
                    loaded={loaded}
                />
                <ImageColumnInverse
                    clicked={clicked}
                    pics={picsContainer.slice(16, 20)}
                    setLoadedImages={setLoadedImages}
                    loaded={loaded}
                />
            </ImageColumnContainer>
            <AnimatedText
                clicked={clicked}
                setCompleted={setCompleted}
                loaded={loaded}
            />



            {/* <RotatingIntro /> */}
        </div>
    )
}

export default ImageIntro