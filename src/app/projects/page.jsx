"use client";
import NavOverlay from '@/components/nav/NavOverlay'
import ProjectGrid from '@/components/projects/ProjectGrid'
import ProjectGridImage from '@/components/projects/ProjectGridImage'
import React from 'react'

const page = () => {
    return (
        <>
            <NavOverlay />
            <div className='w-screen min-h-screen p-2 gap-4    grid grid-cols-2 lg:grid-cols-4 auto-rows-[32vmin]   '>
                <div className='p-2 lg:row-start-2 lg:col-start-2 ave text-3xl flex items-end   '>
                    The Three Dubs
                </div>
                <div className='p-2 lg:row-start-2 lg:col-start-4    '>
                    <p className=' ave text-3xl '>Projects / Work</p>
                    <p className=' tracking-tighter font-mono mt-4'> - Most are just Random Pics </p>
                    <p className=' tracking-tighter font-mono'> - You know, for asthetic reasons </p>
                </div>
                <ProjectGrid />
            </div>
            {/* <div className='w-[220px] h-[190px] p-2 gap-[2px]   grid grid-cols-2 lg:grid-cols-4  '>

                <ProjectGrid />
            </div> */}
        </>
    )
}

export default page