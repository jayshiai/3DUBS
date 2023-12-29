import {
  Text,
  PerspectiveCamera,
  OrbitControls,
  TorusKnot,
  Box,
  Sphere,
  Plane,
} from "@react-three/drei";
import React, { useRef, useMemo } from "react";
import { Canvas, createPortal, useFrame } from "react-three-fiber";
import BoxShaderMaterial from "./GL/material/boxShaderMaterial";

import * as THREE from "three";

function TextComp({ text, color }) {
  // Function to calculate inverted color with exception for black
  const invertColor = (hex) => {
    // Remove hash if present
    hex = hex.replace(/^#/, '');

    // Parse hex value to RGB
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    // Check if the color is black
    if (r === 0 && g === 0 && b === 0) {
      return '#000000'; // Return black for black color
    }

    // Invert RGB values
    const invertedR = 255 - r;
    const invertedG = 255 - g;
    const invertedB = 255 - b;

    // Convert back to hex and return
    return `#${(invertedR << 16 | invertedG << 8 | invertedB).toString(16)}`;
  };

  // Calculate inverted color
  const invertedColor = useMemo(() => invertColor(color), [color]);

  return (
    <Text
      fontSize={0.75}
      scale={[0.75, 3.5, 1]}
      font="../../assets/Orbitron.ttf"
      color={invertedColor} // Use the inverted color for text
      fillOpacity={0.05}
    >
      {text}
    </Text>
  );
}


function Cube({text, hovered, color}) {
  const cam = useRef();
  const time = useRef(0);
  const mat = useRef();

  const [scene, target, camera] = useMemo(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#fff");
    const target = new THREE.WebGLRenderTarget(
      window.innerWidth,
      window.innerHeight
    );
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 3;
    return [scene, target, camera];
  }, []);

  useFrame((state, delta) => {
    time.current += delta;
    state.gl.setRenderTarget(target);
    state.gl.render(scene, camera);
    state.gl.setRenderTarget(null);
    mat.current.uniforms.uTime.value = time.current;
    mat.current.uniforms.uTransition.value = hovered ? 1.0 : 0.0;
  });

  return (
    <>
      {createPortal(<TextComp text={text} color={color}/>, scene)}
      <Plane args={[60,45,1]}><shaderMaterial
          ref={mat}
          attach="material"
          args={[BoxShaderMaterial]}
          uniforms-uTexture-value={target.texture} // Pass the time value to the shader
        /></Plane>
      
    </>
  );
}

const MarqueeText = ({text, hovered,color }) => {

  return (
    <>
      
      <PerspectiveCamera
        makeDefault
        fov={30}
        aspect={1}
        near={0.1}
        far={1000}
        position={[0, 0, 50]}
      />
      <color attach="background" args={["#3e64ff"]} />

      <Cube text={text} hovered={hovered} color={color}/>
    
    </>
  );
};

export default MarqueeText;
