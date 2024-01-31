"use client"
import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { Sphere, OrbitControls } from '@react-three/drei';


const Trail = ({ trail }) => {
    return (
        <group>
            {trail.map((point, index) => (
                <Sphere key={index} args={[0.01, 16, 16]} position={[point.x, point.y, point.z]} material-color={"#e0e1dd"} />
            ))}
        </group>
    );
};

const ElectronJay = () => {

    const [trail, setTrail] = useState([]);

    const trailMaxLength = 200; // Adjust this value to change the length of the trail
    const trailSpacing = 50; // Adjust this value to change the spacing between trail points


    const ref = useRef();

    useFrame(() => {
        if (ref.current) {
            const newTrail = [...trail, { x: ref.current.position.x, y: ref.current.position.y, z: ref.current.position.z }];
            setTrail(newTrail.slice(-trailMaxLength));
        }

        ref.current.position.x = Math.sin(Date.now() * 0.002) * 2;
        ref.current.position.z = Math.cos(Date.now() * 0.002) * 2;
    });

    return (
        <>
            <Sphere ref={ref} args={[0.1, 16, 16]} position={[0, 0, 0]} material-color={"#e0e1dd"} />
            <Trail trail={trail} />
        </>
    );
};

const ElectronKunal = () => {
    const ref = useRef();

    useFrame(() => {
        ref.current.position.x = Math.sin(Date.now() * 0.002 + 4) * 2;
        ref.current.position.y = Math.cos(Date.now() * 0.002 + 6) * 2;
        ref.current.position.z = Math.cos(Date.now() * 0.002 + 4) * 2;
    });

    return (
        <Sphere ref={ref} args={[0.1, 16, 16]} position={[0, 0, 0]} material-color={"#e0e1dd"} />
    );
};

const ElectronAryan = () => {
    const ref = useRef();

    useFrame(() => {
        ref.current.position.x = Math.sin(Date.now() * -0.002 + 4) * 2;
        ref.current.position.y = Math.sin(Date.now() * -0.002 + 4) * 2;
        ref.current.position.z = Math.cos(Date.now() * -0.002 + 4) * 2;
    });

    return (
        <Sphere ref={ref} args={[0.1, 16, 16]} position={[0, 0, 0]} material-color={"#e0e1dd"} />
    );
};


const Atom = () => {
    return (
        <Canvas>
            <ambientLight />

            <ElectronJay />
            <ElectronKunal />
            <ElectronAryan />
            <Sphere args={[0.3, 16, 16]} position={[0, 0, 0]} material-color={"#0d1b2a"} />
            {/* <OrbitControls /> */}
        </Canvas>
    );
};

export default Atom;
