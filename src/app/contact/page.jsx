import Clock from '@/components/contact/Clock';
import React from 'react'
import { FaGithub, FaInstagram } from "react-icons/fa6";
const page = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center text-white'>
            <div className='relative h-[90%] w-[90%] rounded-3xl shadow-[0_0_60px_20px_rgba(0,0,0,0.5)] flex justify-center items-center bg-black overflow-hidden'>

                <div className='relative flex flex-col gap-4'>
                    <div className='absolute opacity-10 rotate-90 md:rotate-0 text-[60vmin] md:text-[35vmin] lg:text-[50vmin] top-[50%] left-[50%] -translate-x-[55%]  md:-translate-x-[50%]  -translate-y-[50%]  md:-translate-y-[45%]  ave font-bold tracking-tighter'>3DUBS</div>
                    <p className='ave text-7xl flex flex-col md:flex-row md:gap-4 '><span>The</span> <span>Three</span> <span>Dubs</span></p>
                    <div className='md:translate-x-[20%] lg:translate-x-[40%] montserrat text-right font-thin'> A <span className='font-mono font-bold ml-2 text-xl'>DevsTomorrow</span><br /> initiative</div>

                </div>


                <div className='absolute right-0 top-[70%] md:top-[50%] -translate-y-[50%] h-[200px] md:h-[30%] w-[30px] rounded-l-sm text-black/50   flex justify-center items-center text-xl montserrat font-semibold bg-white' ><p className=' -rotate-90'>2024</p></div>
                <div className='absolute left-0 top-[30%] md:top-[50%] -translate-y-[50%] h-[200px] md:h-[35%] w-[50px] md:w-[80px] rounded-r-xl md:rounded-r-3xl text-black/50   flex justify-center items-center text-xl montserrat font-semibold bg-white' style={{ writingMode: "vertical-lr" }}> Best Buds</div>

                <div className='absolute top-10 right-8 md:right-16'>

                    <div className='flex gap-4'>
                        <FaInstagram className='text-2xl md:text-3xl cursor-pointer' />
                        <FaGithub className='text-2xl md:text-3xl cursor-pointer' />
                    </div>
                </div>

                <div className='absolute font-mono bottom-10 left-4  md:left-16 flex flex-col gap-2 '>
                    <div className='flex gap-4'><span className='opacity-50'>#</span><span className=' font-bold'>+91 8459967632</span></div>
                    <div className='flex gap-4'><span className='opacity-50'>@</span><span className=' font-bold'>jayvardhanpatil7811@gmail.com</span></div>
                    <div className='flex gap-4'><span className='opacity-50'>W</span><span className=' font-bold'>jayshiai.github.io</span></div>
                </div>

            </div>
        </div>
    )
}

export default page