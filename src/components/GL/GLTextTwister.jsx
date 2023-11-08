"use client";
import * as THREE from "three";
import { Text, PerspectiveCamera, OrbitControls, Box } from "@react-three/drei";
import React, { useRef, useMemo } from "react";
import { Canvas, createPortal, useFrame } from "react-three-fiber";
import TwisterShaderMaterial from "./material/twisterShaderMaterial";

function TextComp() {
  return (
    <group>
      <ambientLight color={0xffffff} intensity={1.0} />
      <pointLight position={[10, 10, 10]} />

      <Text
        fontSize={1}
        scale={[0.6, 3, 1]}
        font="../../assets/Orbitron.ttf"
        // Specify the path to your font file
        color="white"
      >
        Anxious
      </Text>
    </group>
  );
}

function Cube() {
  const cam = useRef();
  const time = useRef(0);
  const mat = useRef();

  const [scene, target, camera] = useMemo(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#d8345f");
    const target = new THREE.WebGLRenderTarget(
      window.innerWidth,
      window.innerHeight
    );
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 3.5;

    return [scene, target, camera];
  }, []);

  useFrame((state, delta) => {
    time.current += delta;
    state.gl.setRenderTarget(target);
    state.gl.render(scene, camera);
    state.gl.setRenderTarget(null);
    mat.current.uniforms.uTime.value = time.current;
  });

  return (
    <>
      {createPortal(<TextComp />, scene)}
      <Box args={[100, 10, 10, 64, 64, 64]}>
        <shaderMaterial
          ref={mat}
          attach="material"
          args={[TwisterShaderMaterial]}
          uniforms-uTexture-value={target.texture} // Pass the time value to the shader
        />
      </Box>
    </>
  );
}

const GLTextTwister = () => {
  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        fov={45}
        aspect={1}
        near={0.1}
        far={1000}
        position={[0, 0, 50]}
      />
      <ambientLight intensity={1} />
      <pointLight position={[0, 0, 15]} />
      <color attach="background" args={["#d8345f"]} />

      <Cube />
    </Canvas>
  );
};

export default GLTextTwister;
