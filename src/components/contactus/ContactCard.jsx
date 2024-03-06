
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import BackButton from "../BackButton";
const ContactCard = () => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const handleOnMove = (e) => {
        // Get card element dimensions
        const rect = cardRef.current.getBoundingClientRect();
        // Get mouse or touch position relative to card element
        const middleX = rect.width / 2;
        const middleY = rect.height / 2;

        const x = -1 * ((e.clientX - (rect.left + middleX)) / middleX) * 3;
        const y = -1 * ((e.clientY - (rect.top + middleY)) / middleY) * 3;

        // Update position state

        setRotation({ x, y });
    };

    // Define a function that resets the rotation state to zero
    const handleOnLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    useEffect(() => {
        // Get card element reference
        const card = cardRef.current;
        // Add event listeners for mousemove, touchmove, and mouseleave events
        card.addEventListener("mousemove", handleOnMove);
        card.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));
        card.addEventListener("mouseleave", handleOnLeave);
        // Return a cleanup function that removes event listeners
        return () => {
            card.removeEventListener("mousemove", handleOnMove);
            card.removeEventListener("touchmove", (e) => handleOnMove(e.touches[0]));
            card.removeEventListener("mouseleave", handleOnLeave);
        };
    }, []);
    return (
        <>
            <BackButton color={true} />
            <div
                ref={cardRef}
                style={{
                    "--rotateY": `${rotation.x}deg`,
                    "--rotateX": `${-rotation.y}deg`,
                    "--gradientBefore": `#FFFFFF33`,
                    "--gradientAfter": `#FFFFFFaa`,
                }}
                className=' eventCard w-screen h-screen fixed top-0 flex justify-center items-center text-white select-none'>
                <div className='eventCard-content relative z-0 h-[90%] w-[90%] rounded-3xl shadow-[0_0_60px_20px_rgba(0,0,0,0.5)] flex justify-center items-center bg-black overflow-hidden'>

                    <div className='relative flex flex-col gap-4'>
                        <div className='absolute opacity-10 rotate-90 md:rotate-0 text-[60vmin] md:text-[35vmin] lg:text-[50vmin] top-[50%] left-[50%] -translate-x-[55%]  md:-translate-x-[50%]  -translate-y-[50%]  md:-translate-y-[45%]  ave font-bold tracking-tighter'>3DUBS</div>
                        <div style={{
                            "--c1": "#AAAAAA",
                            "--c2": "#FFFFFF",
                            "--c3": "#555555",
                        }} className='transText transBg ave text-7xl flex flex-col md:flex-row md:gap-4 '>The Three Dubs</div>
                        <div className='md:translate-x-[20%] lg:translate-x-[40%] montserrat text-right font-thin'> A <span className='font-mono font-bold ml-2 text-xl cursor-cell'>DevsTomorrow</span><br /> initiative</div>

                    </div>


                    <div className='absolute right-0 top-[70%] md:top-[50%] -translate-y-[50%] h-[200px] md:h-[30%] w-[30px] rounded-l-sm text-black/50   flex justify-center items-center text-xl montserrat font-semibold bg-white' ><p className=' -rotate-90'>2024</p></div>
                    <div className='absolute left-0 top-[30%] md:top-[50%] -translate-y-[50%] h-[200px] md:h-[35%] w-[50px] md:w-[80px] rounded-r-xl md:rounded-r-3xl text-black/50   flex justify-center items-center text-xl montserrat font-semibold bg-white' style={{ writingMode: "vertical-lr" }}> Best Buds</div>

                    <div className='absolute z-50 top-10 right-8 md:right-16'>

                        <div className='flex gap-4'>
                            <Link href={"/about"}><FaInstagram className='ext-2xl md:text-3xl cursor-pointer hover:scale-110 hover:translate-x-2 hover:-translate-y-2 trasition-all duration-500' /></Link>
                            <Link href={"/about"}><FaGithub className='ext-2xl md:text-3xl cursor-pointer hover:scale-110 hover:translate-x-2 hover:-translate-y-2 trasition-all duration-500' /></Link>
                        </div>
                    </div>

                    <div className='absolute font-mono bottom-10 left-4  md:left-16 flex flex-col gap-2 '>
                        <div className='flex gap-4 hover:scale-125 transition-all cursor-pointer'><span className='opacity-50'>#</span><span className=' font-bold'>+91 8459967632</span></div>
                        <div className='flex gap-4 hover:scale-125 transition-all cursor-pointer'><span className='opacity-50'>@</span><span className=' font-bold'>jayvardhanpatil7811@gmail.com</span></div>
                        <div className='flex gap-4 hover:scale-125 transition-all cursor-pointer'><span className='opacity-50'>W</span><span className=' font-bold'>jayshiai.github.io</span></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ContactCard