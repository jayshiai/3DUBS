import React, { useEffect } from 'react'
import ProjectGridImage from '@/components/projects/ProjectGridImage'
import { useRef } from 'react'
import gsap from 'gsap'
const ProjectMiniMap = ({ index, setIndex, projectRefs }) => {
    const projectMiniRefs = useRef([]);
    const activate = true;
    const mini = true
    const mainIndex = index;
    const indexModifier = index > 9 ? 10 : 0;
    useEffect(() => {
        projectMiniRefs.current[mainIndex % 10].style.opacity = 0.4;
    }, [])
    const handleClick = (index) => {
        index = index + indexModifier;
        if (index != mainIndex) {
            projectMiniRefs.current[mainIndex % 10].style.opacity = 1;
            setIndex(index);
            projectMiniRefs.current[index % 10].style.opacity = 0.4;
            const clicked = projectRefs.current[index];
            const x = window.innerWidth * 0.65 - (clicked.offsetWidth / 2 + clicked.offsetLeft);
            const y = window.innerHeight * 0.50 - (clicked.offsetHeight / 2 + clicked.getBoundingClientRect().top);
            const scale = window.innerWidth * 0.55 / clicked.offsetWidth;
            gsap.to(clicked, { x: x, y: y, scale: scale, opacity: 1, duration: 0.5, ease: "power3.inOut" })

            projectRefs.current.forEach((ref, i) => {
                if (i !== index) {
                    gsap.to(ref, { x: 0, y: 0, scale: 0.8, opacity: 0, duration: 0.5 });
                    ref.style.pointerEvents = 'none';
                }

            });
            document.body.style.overflow = 'hidden';
        }
        // projectMiniRefs.current[index].style.opacity = 0.4;
        // projectMiniRefs.current.forEach((ref, i) => {
        //     if (i !== index) {

        //         ref.style.opacity = 1;
        //     }

        // });
    }
    return (
        <div className='w-[110px] h-[95px] md:w-[220px] md:h-[190px] p-2 gap-[2px]   grid grid-cols-4  '>

            <div ref={el => projectMiniRefs.current[0] = el} onClick={() => handleClick(0)} className=''><ProjectGridImage activate={activate} src={"/projects/m1.jpeg"} /></div>
            <div ref={el => projectMiniRefs.current[1] = el} onClick={() => handleClick(1)} className=' lg:col-start-3'><ProjectGridImage activate={activate} src={"/projects/m2.jpeg"} /></div>
            <div ref={el => projectMiniRefs.current[2] = el} onClick={() => handleClick(2)} className=' lg:col-start-4'><ProjectGridImage activate={activate} src={"/projects/m3.jpeg"} /></div>
            <div ref={el => projectMiniRefs.current[3] = el} onClick={() => handleClick(3)} className=' '><ProjectGridImage activate={activate} src={"/projects/m4.jpeg"} /></div>
            <div ref={el => projectMiniRefs.current[4] = el} onClick={() => handleClick(4)} className=' lg:col-start-3'><ProjectGridImage activate={activate} src={"/projects/m1.jpeg"} /></div>
            <div ref={el => projectMiniRefs.current[5] = el} onClick={() => handleClick(5)} className=' lg:col-start-2'><ProjectGridImage activate={activate} src={"/projects/m3.jpeg"} /></div>
            <div ref={el => projectMiniRefs.current[6] = el} onClick={() => handleClick(6)} className=' lg:col-start-4'><ProjectGridImage activate={activate} src={"/projects/m1.jpeg"} /></div>
            <div ref={el => projectMiniRefs.current[7] = el} onClick={() => handleClick(7)} className=''><ProjectGridImage activate={activate} src={"/projects/m2.jpeg"} /></div>
            <div ref={el => projectMiniRefs.current[8] = el} onClick={() => handleClick(8)} className=' lg:col-start-3'><ProjectGridImage activate={activate} src={"/projects/m3.jpeg"} /></div>
            <div ref={el => projectMiniRefs.current[9] = el} onClick={() => handleClick(9)} className=' lg:col-start-3'><ProjectGridImage activate={activate} src={"/projects/m4.jpeg"} /></div>

        </div>
    )
}

export default ProjectMiniMap