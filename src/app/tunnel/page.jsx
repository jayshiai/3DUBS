"use client"
import ParticleTunnel from '@/components/ParticleTunnel';
import TraingleTunnel from '@/components/TriangleTunnel';
import React, { useState } from 'react'

const page = () => {
    const [mouseDown, setMouseDown] = useState(false);
    return (
        <>
            <div onTouchStart={() => setMouseDown(true)} onTouchEnd={() => setMouseDown(false)} onMouseDown={() => setMouseDown(true)} onMouseUp={() => setMouseDown(false)} className={`h-screen w-screen cursor-default select-none ${mouseDown ? "text-white" : "text-black"} flex justify-center items-center text-8xl ave z-10`}>
                The Three Dubs
            </div>
            {/* <TraingleTunnel /> */}
            <ParticleTunnel />
        </>
    )
}

export default page