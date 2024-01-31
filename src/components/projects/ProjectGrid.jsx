import React from 'react'
import ProjectGridImage from '@/components/projects/ProjectGridImage'
const ProjectGrid = () => {
    return (
        <>
            <div className=''><ProjectGridImage src={"/projects/1.jpg"} /></div>
            <div className=' lg:col-start-3'><ProjectGridImage src={"/projects/2.jpg"} /></div>
            <div className=' lg:col-start-4'><ProjectGridImage src={"/projects/3.jpg"} /></div>
            <div className=' '><ProjectGridImage src={"/projects/4.jpg"} /></div>
            <div className=' lg:col-start-3'><ProjectGridImage src={"/projects/5.jpg"} /></div>
            <div className=' lg:col-start-2'><ProjectGridImage src={"/projects/6.jpg"} /></div>
            <div className=' lg:col-start-4'><ProjectGridImage src={"/projects/7.jpg"} /></div>
            <div className=''><ProjectGridImage src={"/projects/8.jpg"} /></div>
            <div className=' lg:col-start-3'><ProjectGridImage src={"/projects/9.jpg"} /></div>
            <div className=' lg:col-start-3'><ProjectGridImage src={"/projects/10.jpg"} /></div>
        </>
    )
}

export default ProjectGrid