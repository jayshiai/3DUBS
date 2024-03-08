"use client"
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import LoadingComponent from '../nav/LoadingComponent';

const CrewPage = () => {
    const crew = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= crew.current.offsetHeight) {
                window.scrollTo(0, 0); // Scroll to the top
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [crew]); // Empty dependency array means this effect only runs once

    useEffect(() => {
        if (demo.spinner) {
            demo.spinner.setComplete();
        }
    }, [])
    return (
        <div className='w-screen text-black overflow-x-hidden'>
            <Link href={"/"} className='z-50 m-4     fixed text-3xl text-red-600 '>
                <FaArrowLeft className='mix-blend-difference' />
            </Link>
            <div ref={crew} className='h-screen'>
                <div className='hover:bg-black hover:text-white raleway h-1/3 w-full p-8 ave text-[10vw] whitespace-nowrap   flex items-center  border-b  cursor-pointer'><LoadingComponent url={'/jayvardhan'} text={"Jayvardhan Patil"} /></div>
                <div className='hover:bg-red-600 hover:text-blue-600 raleway h-1/3 w-full p-8 rockSalt text-[10vw] whitespace-nowrap   flex items-center  border-b cursor-pointer'><LoadingComponent url={'/aryan'} text={"Aryan Singh"} /></div>
                <div className='hover:bg-blue-600 hover:text-yellow-200  raleway h-1/3 w-full p-8 sacramento text-[10vw] whitespace-nowrap   flex items-center  border-b cursor-pointer'><LoadingComponent url={'/kunal'} text={"Kunal Sharma"} /></div>

            </div>
            <div className='h-screen'>
                <div className='hover:bg-black hover:text-white raleway h-1/3 w-full p-8 ave text-[10vw] whitespace-nowrap   flex items-center  border-b  cursor-pointer'><LoadingComponent url={'/jayvardhan'} text={"Jayvardhan Patil"} /></div>
                <div className='hover:bg-red-600 hover:text-blue-600 raleway h-1/3 w-full p-8 rockSalt text-[10vw] whitespace-nowrap   flex items-center  border-b cursor-pointer'><LoadingComponent url={'/aryan'} text={"Aryan Singh"} /></div>
                <div className='hover:bg-blue-600 hover:text-yellow-200  raleway h-1/3 w-full p-8 sacramento text-[10vw] whitespace-nowrap   flex items-center  border-b cursor-pointer'><LoadingComponent url={'/kunal'} text={"Kunal Sharma"} /></div>

            </div>
            <div className='h-screen'>
                <div className='hover:bg-black hover:text-white raleway h-1/3 w-full p-8 ave text-[10vw] whitespace-nowrap   flex items-center  border-b  cursor-pointer'><LoadingComponent url={'/jayvardhan'} text={"Jayvardhan Patil"} /></div>
                <div className='hover:bg-red-600 hover:text-blue-600 raleway h-1/3 w-full p-8 rockSalt text-[10vw] whitespace-nowrap   flex items-center  border-b cursor-pointer'><LoadingComponent url={'/aryan'} text={"Aryan Singh"} /></div>
                <div className='hover:bg-blue-600 hover:text-yellow-200  raleway h-1/3 w-full p-8 sacramento text-[10vw] whitespace-nowrap   flex items-center  border-b cursor-pointer'><LoadingComponent url={'/kunal'} text={"Kunal Sharma"} /></div>

            </div>


        </div>)
}

export default CrewPage