"use client"

import { Plane } from '@react-three/drei'

import { useFrame, useLoader } from 'react-three-fiber'
import React from 'react'
import * as THREE from 'three'
const AbhiCanva = () => {
    const texture = useLoader(THREE.TextureLoader, `./background.png`)
    const textureMan = useLoader(THREE.TextureLoader, `./Man.png`)

    let zposition = 0;

    useFrame((state, delta) => {
        zposition += delta * 2;
        if (zposition > 5) zposition = 5;
        state.camera.position.z = zposition;
    })
    return (
        <>
            <Plane args={[16.5, 9, 1]} position={[0, 0, 0]}>
                <meshBasicMaterial attach="material" map={texture} />
            </Plane>
            <Plane args={[1.83, 4, 1]} position={[0, -0.35, 2]}>
                <meshBasicMaterial attach="material" map={textureMan} transparent />
            </Plane>
        </>

    )
}

export default AbhiCanva