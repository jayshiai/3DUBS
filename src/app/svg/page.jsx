"use client"

import AbhiCanva from '@/components/AbhiCanva'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React from 'react'
import { Canvas } from 'react-three-fiber'

const page = () => {
    return (
        <div className='h-screen w-screen'>
            <Canvas>
                <PerspectiveCamera
                    makeDefault
                    fov={75}
                    near={0.001}
                    far={100000}
                    position={[0, 0, 5]}
                />

                <AbhiCanva />
            </Canvas>

        </div>
    )
}

export default page