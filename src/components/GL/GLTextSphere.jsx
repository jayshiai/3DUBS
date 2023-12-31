"use client";
import * as THREE from "three";
import {
  Text,
  PerspectiveCamera,
  OrbitControls,
  TorusKnot,
  Box,
  Sphere,
} from "@react-three/drei";
import React, { useRef, useMemo } from "react";
import { Canvas, createPortal, useFrame } from "react-three-fiber";
import SphereShaderMaterial from "./material/sphereShaderMaterial";

function TextComp() {
  return (
    <Text
      fontSize={1}
      scale={[0.8, 2, 1]}
      font="../../assets/Orbitron.ttf"
      // Specify the path to your font file
      color="white"
    >
      Chill
    </Text>
  );
}

function Cube() {
  const cam = useRef();
  const time = useRef(0);
  const mat = useRef();

  const [scene, target, camera] = useMemo(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#3e64ff");
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
  });

  return (
    <>
      {createPortal(<TextComp />, scene)}
      <Sphere args={[12, 64, 64]}>
        <shaderMaterial
          ref={mat}
          attach="material"
          args={[SphereShaderMaterial]}
          uniforms-uTexture-value={target.texture} // Pass the time value to the shader
        />
      </Sphere>
    </>
  );
}

const GLTextSphere = () => {
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
      <color attach="background" args={["#3e64ff"]} />

      <Cube />
    </Canvas>
  );
};

export default GLTextSphere;
