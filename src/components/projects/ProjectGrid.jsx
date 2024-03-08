import React, { useRef, useState, useEffect } from 'react'
import ProjectGridImage from '@/components/projects/ProjectGridImage'

import NavOverlay from '@/components/nav/NavOverlay'
import gsap from 'gsap'
import ProjectInfo from './ProjectInfo'
const ProjectGrid = () => {
    const projectRefs = useRef([]);
    const [activate, setActivate] = useState(false);
    const projects = useRef(null);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY >= projects.current.offsetHeight) {
                window.scrollTo(0, 0); // Scroll to the top

            }
        };
        if (demo.spinner) {
            demo.spinner.setComplete();
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect only runs once


    const handleClick = (index) => {
        setIndex(index);
        const clicked = projectRefs.current[index];
        if (!activate) {
            const x = window.innerWidth * 0.65 - (clicked.offsetWidth / 2 + clicked.offsetLeft);
            const y = window.innerHeight * 0.50 - (clicked.offsetHeight / 2 + clicked.getBoundingClientRect().top);
            const scale = window.innerWidth * 0.55 / clicked.offsetWidth;
            gsap.to(clicked, { x: x, y: y, scale: scale, duration: 0.5, ease: "power3.inOut" })

            projectRefs.current.forEach((ref, i) => {
                if (i !== index) {
                    gsap.to(ref, { x: 0, y: 0, scale: 0.8, opacity: 0, duration: 0.5 });
                    ref.style.pointerEvents = 'none';
                }

            });
            document.body.style.overflow = 'hidden';
            setActivate(true);
        }
        else {
            setActivate(false);

            gsap.to(clicked, { x: 0, y: 0, scale: 1, duration: 0.5, ease: "power3.inOut" })
            projectRefs.current.forEach((ref, i) => {
                if (i !== index) {
                    gsap.to(ref, { x: 0, y: 0, scale: 1, opacity: 1, duration: 0.5, delay: 0.25 });
                    ref.style.pointerEvents = 'auto';
                }
            });
            document.body.style.overflow = 'auto';
        }


    }

    return (
        <>
            <div className='hidden lg:block'><NavOverlay activate={activate} repeat={true} /></div>
            <div className='block lg:hidden'><NavOverlay activate={activate} /></div>
            <div ref={projects} className='w-screen  p-2 gap-4    grid grid-cols-2 lg:grid-cols-4 auto-rows-[30vmin]   '>
                <div className={`${activate ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} transition-all duration-500 delay-200 p-2 lg:row-start-2 lg:col-start-2 ave text-3xl flex items-end`}>
                    The Three Dubs
                </div>
                <div className={`${activate ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} transition-all duration-500 delay-200 p-2 lg:row-start-2 lg:col-start-4`}>
                    <p className=' ave text-3xl '>Projects / Work</p>
                    <p className=' tracking-tighter font-mono mt-4'> - Most are just Random Pics </p>
                    <p className=' tracking-tighter font-mono'> - You know, for asthetic reasons </p>
                </div>
                <div className={`${activate ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} hidden  transition-all duration-500 delay-200 p-2 row-start-5 col-start-2 rockSalt text-3xl lg:flex justify-center items-end `}>
                    Infinite Scroll
                </div>
                <div ref={el => projectRefs.current[0] = el} onClick={() => handleClick(0)} className=''><ProjectGridImage activate={activate} src={"/projects/1.jpg"} /></div>
                <div ref={el => projectRefs.current[1] = el} onClick={() => handleClick(1)} className=' lg:col-start-3'><ProjectGridImage activate={activate} src={"/projects/2.jpg"} /></div>
                <div ref={el => projectRefs.current[2] = el} onClick={() => handleClick(2)} className=' lg:col-start-4'><ProjectGridImage activate={activate} src={"/projects/3.jpg"} /></div>
                <div ref={el => projectRefs.current[3] = el} onClick={() => handleClick(3)} className=' '><ProjectGridImage activate={activate} src={"/projects/4.jpg"} /></div>
                <div ref={el => projectRefs.current[4] = el} onClick={() => handleClick(4)} className=' lg:col-start-3'><ProjectGridImage activate={activate} src={"/projects/5.jpg"} /></div>
                <div ref={el => projectRefs.current[5] = el} onClick={() => handleClick(5)} className=' lg:col-start-2'><ProjectGridImage activate={activate} src={"/projects/6.jpg"} /></div>
                <div ref={el => projectRefs.current[6] = el} onClick={() => handleClick(6)} className=' lg:col-start-4'><ProjectGridImage activate={activate} src={"/projects/7.jpg"} /></div>
                <div ref={el => projectRefs.current[7] = el} onClick={() => handleClick(7)} className=''><ProjectGridImage activate={activate} src={"/projects/8.jpg"} /></div>
                <div ref={el => projectRefs.current[8] = el} onClick={() => handleClick(8)} className=' lg:col-start-3'><ProjectGridImage activate={activate} src={"/projects/9.jpg"} /></div>
                <div ref={el => projectRefs.current[9] = el} onClick={() => handleClick(9)} className=' lg:col-start-3'><ProjectGridImage activate={activate} src={"/projects/10.jpg"} /></div>
            </div>
            <div className='w-screen  p-2 gap-4    grid grid-cols-2 lg:grid-cols-4 auto-rows-[30vmin]   '>
                <div className={`${activate ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} transition-all duration-500 delay-200 p-2 lg:row-start-2 lg:col-start-2 ave text-3xl flex items-end`}>
                    The Three Dubs
                </div>
                <div className={`${activate ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} transition-all duration-500 delay-200 p-2 lg:row-start-2 lg:col-start-4`}>
                    <p className=' ave text-3xl '>Projects / Work</p>
                    <p className=' tracking-tighter font-mono mt-4'> - Most are just Random Pics </p>
                    <p className=' tracking-tighter font-mono'> - You know, for asthetic reasons </p>
                </div>
                <div className={`${activate ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} hidden transition-all duration-500 delay-200 p-2 row-start-4 col-start-2 rockSalt text-3xl lg:flex justify-center `}>
                    Infinite Scroll
                </div>
                <div ref={el => projectRefs.current[10] = el} onClick={() => handleClick(10)} className=''><ProjectGridImage activate={activate} src={"/projects/1.jpg"} /></div>
                <div ref={el => projectRefs.current[11] = el} onClick={() => handleClick(11)} className=' lg:col-start-3'><ProjectGridImage activate={activate} src={"/projects/2.jpg"} /></div>
                <div ref={el => projectRefs.current[12] = el} onClick={() => handleClick(12)} className=' lg:col-start-4'><ProjectGridImage activate={activate} src={"/projects/3.jpg"} /></div>
                <div ref={el => projectRefs.current[13] = el} onClick={() => handleClick(13)} className=' '><ProjectGridImage activate={activate} src={"/projects/4.jpg"} /></div>
                <div ref={el => projectRefs.current[14] = el} onClick={() => handleClick(14)} className=' lg:col-start-3'><ProjectGridImage activate={activate} src={"/projects/5.jpg"} /></div>
                <div ref={el => projectRefs.current[15] = el} onClick={() => handleClick(15)} className=' lg:col-start-2'><ProjectGridImage activate={activate} src={"/projects/6.jpg"} /></div>
                <div ref={el => projectRefs.current[16] = el} onClick={() => handleClick(16)} className=' lg:col-start-4'><ProjectGridImage activate={activate} src={"/projects/7.jpg"} /></div>
                <div ref={el => projectRefs.current[17] = el} onClick={() => handleClick(17)} className=''><ProjectGridImage activate={activate} src={"/projects/8.jpg"} /></div>
                <div ref={el => projectRefs.current[18] = el} onClick={() => handleClick(18)} className=' lg:col-start-3'><ProjectGridImage activate={activate} src={"/projects/9.jpg"} /></div>
                <div ref={el => projectRefs.current[19] = el} onClick={() => handleClick(19)} className=' lg:col-start-3'><ProjectGridImage activate={activate} src={"/projects/10.jpg"} /></div>
            </div>
            {activate && (
                <ProjectInfo handleClick={handleClick} index={index} setIndex={setIndex} projectRefs={projectRefs} />
            )}
        </>
    )
}

export default ProjectGrid