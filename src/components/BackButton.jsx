"use client"
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from 'next/navigation';
const BackButton = ({ color }) => {
    const router = useRouter();
    return (
        <div onClick={() => router.back()} className={`${color ? "text-black" : "text-white"} z-50 m-4     fixed text-3xl  cursor-pointer `}>
            <FaArrowLeft className='mix-blend-difference' />
        </div>
    )
}

export default BackButton