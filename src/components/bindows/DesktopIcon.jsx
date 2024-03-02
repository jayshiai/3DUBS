import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import BindowsFrame from './BindowsFrame';
const DesktopIcon = ({ text, url, image, bindows, setBindows }) => {
    const [clicked, setClicked] = useState(false);
    const desktopIconRef = useRef(null);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (desktopIconRef.current && !desktopIconRef.current.contains(event.target)) {
                // Clicked outside of the DesktopIcon component
                setClicked(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleDoubleClick = () => {
        if (!open) {
            setBindows((prev) => {
                // Create a new object to store the modified bindows
                const newBindows = {};

                // Iterate over the keys of the previous bindows
                Object.keys(prev).forEach((key) => {

                    newBindows[key] = { ...prev[key], selected: false };

                });

                // Update the zIndex for the specified 'text'
                newBindows[text] = { title: text, image: image, minimized: false, selected: true, zIndex: Object.keys(prev).length + 1 };

                return newBindows;
            });

        }
        console.log(bindows)
        setOpen(true);

    }

    const handleSingleClick = () => {
        setClicked(!clicked);
        // Handle single click action here
    };

    return (
        <>
            {open ? <BindowsFrame url={url} text={text} setOpen={setOpen} bindows={bindows} setBindows={setBindows} /> : null}
            <motion.div
                drag
                dragMomentum={false}
                onDoubleClick={handleDoubleClick}

                onClick={handleSingleClick}
                ref={desktopIconRef}
                className='group  h-24 w-24 flex flex-col items-center justify-center'>
                <Image src={image} height={50} width={50} className='h-10 w-10 select-none pointer-events-none' />
                <p
                    style={{
                        textShadow: "1px 1px 1px #333",
                    }}
                    className={`text-sm text-white whitespace-nowrap  ${clicked ? "bg-[#3d64bd]" : "group-hover:bg-[#3d64bd]/50"}`}
                >
                    {text}
                </p>
            </motion.div>

        </>
    );
};

export default DesktopIcon;
