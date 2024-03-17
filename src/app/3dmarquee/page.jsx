"use client"
import MarqueeText from '@/components/MarqueeText'
import React from 'react'
import { Canvas } from 'react-three-fiber'

const page = () => {
    return (
        <div className='h-screen w-screen absolute top-0 left-0 -z-10'>
            <Canvas camera={{ position: [0, 0, 20] }}>

                <MarqueeText position={[0, 0, 0]} speed={1} text={"ORDER"} hovered={false} color={'#000'} />
            </Canvas>
        </div>
    )
}

export default page