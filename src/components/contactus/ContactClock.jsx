import Clock from "@/components/contact/Clock"
import { CiGlobe } from "react-icons/ci";
import { PiArrowArcLeftThin } from "react-icons/pi";
import BackButton from "../BackButton";

import { motion } from 'framer-motion'
const ContactClock = () => {
    return (
        <>
            <BackButton />
            <div className='h-screen w-screen fixed top-0 bg-black text-white overflow-hidden'>
                <div className="w-full h-2/3 lg:h-1/2 flex lg:flex-row flex-col">
                    <div className="w-full lg:w-1/2 h-full p-8 font-medium tracking-tighter flex flex-col gap-8 montserrat">
                        <div className="text-2xl uppercase ">Get In Touch</div>
                        <div className="flex relative justify-start  cursor-pointer pl-[2rem] before:content-['01'] before:text-[1rem]  before:absolute before:top-[0.5rem] leading-none before:left-0 "><span className="textHover text-[clamp(32px,4.5vw,96px)]">INSTAGRAM</span></div>
                        <div className="flex relative justify-start  cursor-pointer pl-[2rem] before:content-['02'] before:text-[1rem]  before:absolute before:top-[0.5rem] leading-none before:left-0 "><span className="textHover text-[clamp(32px,4.5vw,96px)]">EMAIL</span></div>
                        <div className="flex relative justify-start  cursor-pointer pl-[2rem] before:content-['03'] before:text-[1rem]  before:absolute before:top-[0.5rem] leading-none before:left-0 "><span className="textHover text-[clamp(32px,4.5vw,96px)]">8459967632</span></div>
                    </div>
                    <div className="w-full lg:w-1/2 h-full p-8 flex items-center gap-8">
                        <motion.div drag dragMomentum={false} className=' w-1/3 lg:w-[40%] hover:cursor-grab active:cursor-grabbing'>
                            <Clock />
                        </motion.div>
                        <div className="text-2xl lg:text-3xl flex flex-col justify-center montserrat tracking-tighter ">
                            <p className="z-50 leading-none">HOURS: 6pm - 9am<br /><span className="text-lg lg:text-xl italic">We're always up for a chat</span></p>
                            <PiArrowArcLeftThin className="-z-10 text-4xl lg:text-8xl -rotate-90" />
                            <p className="z-50">Indian Standard Time</p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-1/3 lg:h-1/2 flex justify-center items-center pt-8">
                    <div className="w-full lg:w-1/2 h-full uppercase tracking-tighter p-4 text-[clamp(32px,4.5vw,96px)] leading-none  montserrat  font-medium">
                        <CiGlobe className="text-6xl font-thin " />
                        <p>433.F4</p>
                        <p>IIIT BUTTIBORI</p>
                        <p>Nagpur, 441108</p>
                    </div>
                </div>


            </div>
        </>
    )
}

export default ContactClock