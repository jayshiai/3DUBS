import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
const page = () => {
    return (
        <div className='h-screen w-screen overflow-hidden'>
            <Link href={"/"} className='z-50 m-4     absolute text-3xl text-red-600 '>
                <FaArrowLeft className='mix-blend-difference' />
            </Link>
            <Link href={"/jayvardhan"} className='hover:bg-black hover:text-white raleway h-1/3 w-full p-8 text-[10vw] whitespace-nowrap   flex items-center  border-b text-center'>Jayvardhan Patil</Link>
            <Link href={"/aryan"} className='hover:bg-red-600 hover:text-blue-600 raleway h-1/3 w-full p-8 text-[10vw] whitespace-nowrap   flex items-center  border-b text-left'>Aryan Singh</Link>
            <Link href={"/kunal"} className='hover:bg-blue-600 hover:text-yellow-200  raleway h-1/3 w-full p-8 text-[10vw] whitespace-nowrap   flex items-center  border-b text-right'>Kunal Sharma</Link>
        </div>
    )
}

export default page