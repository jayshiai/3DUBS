"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import ImagePlane from "@/components/ImagePlane";
const Scene = () => {
  const groupRef = useRef();
  const cameraRef = useRef();
  const [position, setPosition] = useState(0);
  const [speed, setSpeed] = useState(0);
  const images = [0, 1, 2, 3, 4];
  const imagePlanes = images.map((item, i) => (
    <ImagePlane key={i} position={[0, i * 5, 0]} />
  ));

  useEffect(() => {
    const scrollHandle = (e) => {
      let delta = 0;
      if (e.deltaY < -20) {
        delta = -150;
      } else if (e.deltaY > 20) {
        delta = 150;
      } else {
        delta = e.deltaY;
      }
      setSpeed(speed - delta * 0.0006);
    };
    window.addEventListener("wheel", scrollHandle);

    return () => {
      window.removeEventListener("wheel", scrollHandle);
    };
  }, []);

  useFrame(() => {
    setSpeed(speed * 0.8);
    let newPosition = position + speed;
    let rounded = Math.round(newPosition);
    let diff = rounded - newPosition;
    newPosition += diff * 0.05;
    newPosition = Math.max(0, Math.min(newPosition, images.length - 1));
    setPosition(newPosition);
    cameraRef.current.position.y = position * 5;
    cameraRef.current.position.x = position * 0.5;
    console.log(cameraRef.current.position.y);
  });

  return (
    <>
      <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 0, 7]} />
      <group
        ref={groupRef}
        position={[0.5, 0, 0]}
        rotation={[-0.1, -0.4, -0.1]}
      >
        {imagePlanes}
      </group>
    </>
  );
};

const Canva = () => {
  return (
    <Canvas>
      <Scene></Scene>
    </Canvas>
  );
};

export default Canva;
