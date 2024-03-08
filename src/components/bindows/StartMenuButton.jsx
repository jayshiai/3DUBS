"use client";
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import BindowsFrame from './BindowsFrame';
const StartMenuButton = ({ text, subtext, url, image, setBindows, openBindows, setOpenBindows }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
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
        setOpenBindows(
            (prev) => {
                const newOpenBindows = {};
                Object.keys(prev).forEach((key) => {
                    newOpenBindows[key] = prev[key];
                });
                newOpenBindows[text] = { open: true };
                return newOpenBindows;
            }

        )
        setOpen(true);

    }
    useEffect(() => {
        if (openBindows[text].open == false) {
            setOpen(false)
        }
    }, [openBindows])

    return (
        <>

            <div onClick={handleClick} className='flex gap-1 p-2  hover:text-white hover:bg-[#3d64bd] cursor-pointer'>
                <Image src={image} height={30} width={30} />
                <div className='flex flex-col justify-center'>
                    <div className={`${subtext ? "font-bold" : " font-normal"}`}>{text}</div>
                    {subtext && (<div>{subtext}</div>)}
                </div>
            </div>
        </>
    )
}

export default StartMenuButton