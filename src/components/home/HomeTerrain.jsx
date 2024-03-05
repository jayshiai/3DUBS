"use client"
import TerrainCanvas from '@/components/GL/TerrainCanvas'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React, { useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import * as THREE from "three";
import { useSearchParams } from 'next/navigation'
import LogoOverlay from '../LogoOverlay'
import NavComponent from '../nav/NavComponent'


const HomeTerrain = ({ completed }) => {
    const currentHour = new Date().getHours();
    let dayTime;
    const urlParams = useSearchParams().get('dayTime')
    let ratio = 1;
    if (urlParams) {
        dayTime = urlParams % 3
    } else {
        if ((currentHour >= 8 && currentHour < 16)) {
            dayTime = 0;
        } else if ((currentHour >= 16 && currentHour < 20) || (currentHour >= 5 && currentHour < 8)) {
            dayTime = 2;
        } else {
            dayTime = 1;
        }
    }
    // Use useEffect to execute code after the component mounts
    useEffect(() => {
        // Access and use the query parameters
        ratio = window.innerWidth / window.innerHeight;


    }, []); // Add any dependencies if needed




    const fogColor = [0xffffff, 0x000000, 0x333333]
    return (
        <>
            <LogoOverlay />
            <NavComponent />
            <div className='h-screen w-screen fixed top-0 left-0 -z-10'>
                <Canvas
                    gl={{ antialias: true }}
                    onCreated={({ scene }) => {
                        scene.fog = new THREE.Fog(new THREE.Color(fogColor[dayTime]), -25, 200)
                    }}
                >
                    <PerspectiveCamera
                        makeDefault
                        fov={60}
                        aspect={ratio}
                        near={0.001}
                        far={100000}
                        position={[0, 0, 4]}
                    />
                    <TerrainCanvas dayTime={dayTime} />
                </Canvas>
            </div>
            <div className={`h-screen w-screen fixed top-0 left-0 flex justify-center items-center ave text-8xl ${dayTime == 0 ? 'text-black' : 'text-white'} cursor-default select-none`}>

                The Three Dubs
            </div>
        </>
    )
}

export default HomeTerrain