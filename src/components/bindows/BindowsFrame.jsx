import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
const BindowsFrame = ({ text, url, setOpen, bindows, setBindows }) => {
    const [width, setWidth] = useState(400); // Initial width
    const [height, setHeight] = useState(400); // Initial height
    const [x, setX] = useState(window.innerWidth / 3);
    const [y, setY] = useState(window.innerHeight / 4);

    const [fullScreen, setFullScreen] = useState([x, y, 400, 400, false]);
    const [isResizing, setIsResizing] = useState(false);
    const [resizeDirection, setResizeDirection] = useState('');
    const [initialMouseX, setInitialMouseX] = useState(0);
    const [initialMouseY, setInitialMouseY] = useState(0);
    const [moving, setMoving] = useState(false);

    const variants = {
        visible: {
            scale: 1,

        },
        hidden: {
            scale: 0,
        }
    }
    const handleClose = () => {
        setOpen(false)
        setBindows((prev) => {
            const newBindows = { ...prev }
            delete newBindows[text]
            return newBindows
        })

    }
    useEffect(() => {
        const handleMouseMove = (e) => {

            const deltaX = e.clientX - initialMouseX;
            const deltaY = e.clientY <= 0 || e.clientY >= window.innerHeight ? 0 : e.clientY - initialMouseY;

            if (isResizing) {

                switch (resizeDirection) {
                    case 'left':

                        setWidth(width - deltaX);
                        if (width - deltaX < 300) setWidth(300)
                        else setX(x + deltaX);
                        break;
                    case 'right':
                        setWidth(width + deltaX);
                        if (width + deltaX < 300) setWidth(300)

                        break;
                    case 'top':
                        setHeight(height - deltaY);
                        if (height - deltaY < 300) setHeight(300)
                        else setY(y + deltaY)
                        break;
                    case 'bottom':
                        setHeight(height + deltaY);
                        if (height + deltaY < 300) setHeight(300)

                        break;
                    case 'top-left':
                        setWidth(width - deltaX);
                        if (width - deltaX < 300) setWidth(300)
                        else setX(x + deltaX);
                        setHeight(height - deltaY);
                        if (height - deltaY < 300) setHeight(300)
                        else setY(y + deltaY)
                        break;
                    case 'top-right':
                        setWidth(width + deltaX);
                        if (width + deltaX < 300) setWidth(300)
                        setHeight(height - deltaY);
                        if (height - deltaY < 300) setHeight(300)
                        else setY(y + deltaY)
                        break;
                    case 'bottom-left':
                        setWidth(width - deltaX);
                        if (width - deltaX < 300) setWidth(300)
                        else setX(x + deltaX);
                        setHeight(height + deltaY);
                        if (height + deltaY < 300) setHeight(300)
                        break;
                    case 'bottom-right':
                        setWidth(width + deltaX);
                        if (width + deltaX < 300) setWidth(300)
                        setHeight(height + deltaY);
                        if (height + deltaY < 300) setHeight(300)
                        break;
                    default:
                        break;
                }
            }
            if (moving) {

                setX(x + deltaX);
                setY(y + deltaY);

                if (fullScreen[4]) {
                    setWidth(fullScreen[2])
                    setHeight(fullScreen[3])
                    setX(e.clientX - fullScreen[2] / 2)
                    setFullScreen([x, y, width, height, false])
                }
            }
        };

        const handleMouseUp = () => {
            setIsResizing(false);
            setMoving(false);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing, moving, initialMouseX, initialMouseY]);

    const handleMouseDown = (e, direction) => {
        setIsResizing(true);
        setInitialMouseX(e.clientX);
        setInitialMouseY(e.clientY);
        setResizeDirection(direction);
    };
    const handleTitleMouseDown = (e) => {
        setIsResizing(false);
        setMoving(true);
        setInitialMouseX(e.clientX);
        setInitialMouseY(e.clientY);
    };
    const handleBindowsClick = () => {

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

            if (newBindows[text].zIndex == Object.keys(prev).length + 1) {
                // Update the zIndex for the specified 'text'
                newBindows[text] = { ...prev[text], selected: true };
            }
            else {
                newBindows[text] = { ...prev[text], selected: true, zIndex: Object.keys(prev).length + 1 };
            }


            return newBindows;
        });

    }
    return (
        <motion.div
            variants={variants}
            initial='visible'
            animate={bindows[text].minimized ? "hidden" : "visible"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onMouseDown={handleBindowsClick}
            className=' absolute  rounded-t-md bg-[#091E89]'
            style={{ width: `${width}px`, height: `${height}px`, top: `${y}px`, left: `${x}px`, zIndex: bindows[text].zIndex }}
        >
            {/* Resize handlers */}
            <div
                className='z-10 absolute h-full w-[30px] -left-2 cursor-w-resize'
                onMouseDown={(e) => handleMouseDown(e, 'left')}
            ></div>
            <div
                className='z-10 absolute h-full w-[30px] -right-2 cursor-e-resize'
                onMouseDown={(e) => handleMouseDown(e, 'right')}
            ></div>
            <div
                className='z-10 absolute h-[10px] w-full -top-2 cursor-n-resize'
                onMouseDown={(e) => handleMouseDown(e, 'top')}
            ></div>
            <div
                className='z-10 absolute h-[30px] w-full -bottom-2 cursor-s-resize'
                onMouseDown={(e) => handleMouseDown(e, 'bottom')}
            ></div>
            <div
                className='z-10 absolute h-[20px] w-[20px] -top-2 -left-2 cursor-nw-resize'
                onMouseDown={(e) => handleMouseDown(e, 'top-left')}
            ></div>
            <div
                className='z-10 absolute h-[20px] w-[20px] -top-2 -right-2 cursor-ne-resize'
                onMouseDown={(e) => handleMouseDown(e, 'top-right')}
            ></div>
            <div
                className='z-10 absolute h-[20px] w-[20px] -bottom-2 -left-2 cursor-sw-resize'
                onMouseDown={(e) => handleMouseDown(e, 'bottom-left')}
            ></div>
            <div
                className='z-10 absolute h-[20px] w-[20px] -bottom-2 -right-2 cursor-se-resize'
                onMouseDown={(e) => handleMouseDown(e, 'bottom-right')}
            ></div>

            {/* Title bar */}
            <div
                id='title-bar'
                onMouseDown={handleTitleMouseDown}
                style={{
                    background: bindows[text].selected ? "linear-gradient(to bottom, #4094ff 0%,#0056e4 13%,#0056e4 71%,#16428b 100%)" : "linear-gradient(to bottom, #409fff 0%,#639fff 13%,#4c8df6 100%)",
                }}
                className='h-[35px] w-full rounded-t-md flex justify-between items-center text-white px-2 select-none'
            >
                {text}
                {/* Close button */}
                <div className='z-50 flex gap-2'>
                    <div
                        onClick={() => setBindows((prev) => {
                            const newBindows = { ...prev }
                            newBindows[text] = { ...prev[text], minimized: true, selected: false }
                            return newBindows
                        })}
                        className='relative h-5 w-5 border border-white rounded-sm cursor-pointer'
                        style={{
                            background: "linear-gradient(135deg, #7EAED6 0%,#1B72FF 50%,#1655BE 100%)"
                        }}
                    >
                        <div className='absolute bottom-1 left-1 w-2 border-b-2'></div>
                    </div>
                    <div
                        id='maximize'
                        onClick={() => {
                            if (!fullScreen[4]) {
                                setFullScreen([x, y, width, height, true])
                                setHeight(window.innerHeight - 32)
                                setWidth(window.innerWidth)
                                setX(0)
                                setY(0)
                            }
                            else {

                                setHeight(fullScreen[3])
                                setWidth(fullScreen[2])
                                setX(fullScreen[0])
                                setY(fullScreen[1])
                                setFullScreen([x, y, width, height, false])

                            }
                        }}
                        className='relative h-5 w-5 border border-white rounded-sm flex justify-center items-center cursor-pointer'
                        style={{
                            background: "linear-gradient(135deg, #7EAED6 0%,#1B72FF 50%,#1655BE 100%)"
                        }}
                    >
                        <div className='h-3 w-3 border border-t-[3px]'></div>
                    </div>
                    <div
                        id='close'
                        onClick={handleClose}
                        className='h-5 w-5 border border-white rounded-sm text-white flex justify-center items-center font-mono cursor-pointer'
                        style={{
                            background: "linear-gradient(135deg, #F1A689 0%,#C0442A 50%,#C2311E 100%)"
                        }}
                    >
                        X
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className={`${bindows[text].selected ? "pointer-events-auto" : "pointer-events-none"} h-[calc(100%-35px)] w-full px-[2px] pb-[2px]`}>
                <div className='h-full w-full '>
                    <iframe onMouseDown={handleBindowsClick} className='-z-10 h-full w-full' src={url} />
                </div>
            </div>
        </motion.div>
    );
};

export default BindowsFrame;
