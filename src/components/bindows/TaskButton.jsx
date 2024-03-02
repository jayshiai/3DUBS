import React from 'react'
import Image from 'next/image'
const TaskButton = ({ text, image, selected, setBindows }) => {
    const handleClick = () => {
        setBindows((prev) => {
            // Create a new object to store the modified bindows
            const newBindows = {};

            // Iterate over the keys of the previous bindows
            Object.keys(prev).forEach((key) => {
                // Check if the zIndex needs to be adjusted
                if (prev[key].zIndex > prev[text].zIndex) {
                    newBindows[key] = { ...prev[key], selected: false, zIndex: prev[key].zIndex - 1 };
                } else {
                    newBindows[key] = { ...prev[key], selected: false };
                }
            });

            // Update the zIndex for the specified 'text'
            newBindows[text] = { ...prev[text], selected: true, minimized: false, zIndex: Object.keys(prev).length + 1 };

            return newBindows;
        });
    }
    return (
        <div onClick={handleClick} className={`h-[26px] my-[3px] w-[150px] ${selected ? 'bg-[url("/assets/bindows/btn3.png")]' : 'bg-[url("/assets/bindows/btn1.png")] hover:bg-[url("/assets/bindows/btn2.png")]'}  flex gap-1 items-center py-4 px-2 cursor-pointer`}>

            <Image src={image} height={18} width={18} className=' h-5 w-5' />
            <p className='text-white text-sm whitespace-nowrap overflow-hidden'>{text}</p>
        </div>
    )
}

export default TaskButton