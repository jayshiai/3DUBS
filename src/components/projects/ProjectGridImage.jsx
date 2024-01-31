import Image from 'next/image'
import React from 'react'

const ProjectGridImage = ({ src }) => {
    return (
        <div className='h-full w-full group hover:scale-[95%] rounded-lg overflow-hidden transition-all duration-1000'>

            <Image className='h-full w-full group-hover:scale-[140%] rounded-lg object-cover transition-all duration-[1200ms]   ' alt='image' src={src} height={200} width={200} />
        </div>
    )
}

export default ProjectGridImage