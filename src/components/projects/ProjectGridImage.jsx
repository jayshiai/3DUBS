import Image from 'next/image'
import React from 'react'

const ProjectGridImage = ({ mini, activate, src }) => {
    return (
        <div className={`${activate ? "" : "hover:scale-[95%] duration-1000"} ${mini ? "hover:opacity-60 duration-150" : ""} h-full w-full group  rounded-lg overflow-hidden transition-all `}>

            <Image className={`${activate ? "" : "group-hover:scale-[140%]"} h-full w-full  rounded-lg object-cover transition-all duration-[1200ms]`} alt='image' src={src} height={200} width={200} />
        </div>
    )
}

export default ProjectGridImage