"use client"
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { FaArrowLeft } from "react-icons/fa";

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

    return (
        <div className='w-screen text-black overflow-x-hidden'>
            <Link href={"/"} className='z-50 m-4     fixed text-3xl text-red-600 '>
                <FaArrowLeft className='mix-blend-difference' />
            </Link>
            <div ref={crew} className='h-screen'>
                <Link href={"/jayvardhan"} className='hover:bg-black hover:text-white raleway h-1/3 w-full p-8 ave text-[10vw] whitespace-nowrap   flex items-center  border-b text-center'>Jayvardhan Patil</Link>
                <Link href={"/aryan"} className='hover:bg-red-600 hover:text-blue-600 raleway h-1/3 w-full p-8 rockSalt text-[10vw] whitespace-nowrap   flex items-center  border-b text-left'>Aryan Singh</Link>
                <Link href={"/kunal"} className='hover:bg-blue-600 hover:text-yellow-200  raleway h-1/3 w-full p-8 sacramento text-[10vw] whitespace-nowrap   flex items-center  border-b text-right'>Kunal Sharma</Link>
            </div>
            <div className='h-screen'>
                <Link href={"/jayvardhan"} className='hover:bg-black hover:text-white raleway h-1/3 w-full p-8 ave text-[10vw] whitespace-nowrap   flex items-center  border-b text-center'>Jayvardhan Patil</Link>
                <Link href={"/aryan"} className='hover:bg-red-600 hover:text-blue-600 raleway h-1/3 w-full p-8 rockSalt text-[10vw] whitespace-nowrap   flex items-center  border-b text-left'>Aryan Singh</Link>
                <Link href={"/kunal"} className='hover:bg-blue-600 hover:text-yellow-200  raleway h-1/3 w-full p-8 sacramento text-[10vw] whitespace-nowrap   flex items-center  border-b text-right'>Kunal Sharma</Link>

            </div>
            <div className='h-screen'>
                <Link href={"/jayvardhan"} className='hover:bg-black hover:text-white raleway h-1/3 w-full p-8 ave text-[10vw] whitespace-nowrap   flex items-center  border-b text-center'>Jayvardhan Patil</Link>
                <Link href={"/aryan"} className='hover:bg-red-600 hover:text-blue-600 raleway h-1/3 w-full p-8 rockSalt text-[10vw] whitespace-nowrap   flex items-center  border-b text-left'>Aryan Singh</Link>
                <Link href={"/kunal"} className='hover:bg-blue-600 hover:text-yellow-200  raleway h-1/3 w-full p-8 sacramento text-[10vw] whitespace-nowrap   flex items-center  border-b text-right'>Kunal Sharma</Link>

            </div>


        </div>)
}

export default CrewPage