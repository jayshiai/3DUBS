"use client";
import NavOverlay from '@/components/nav/NavOverlay'
import ProjectGrid from '@/components/projects/ProjectGrid'
import ProjectGridImage from '@/components/projects/ProjectGridImage'
import { useEffect, useRef } from 'react'
const page = () => {
    const projects = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            console.log(document.body.scrollHeight, window.innerHeight + window.scrollY)
            if (window.innerHeight + window.scrollY >= 3 * window.innerHeight - 250) {
                window.scrollTo(0, 0); // Scroll to the top
                console.log('scrolling');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect only runs once


    return (
        <>
            <NavOverlay repeat={true} />
            <div ref={projects} className='w-screen  p-2 gap-4    grid grid-cols-2 lg:grid-cols-4 auto-rows-[32vmin]   '>
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
            <div className='w-screen  p-2 gap-4    grid grid-cols-2 lg:grid-cols-4 auto-rows-[32vmin]   '>
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