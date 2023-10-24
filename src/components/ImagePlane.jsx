import { useTexture } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
const vertexShader = `
uniform float time;
varying vec2 vUv;
float PI = 3.14159265359;
void main() {
  vUv = (uv - vec2(0.5))*0.9 + vec2(0.5);
 
  vec3 pos = position;
  pos.y += sin(PI*uv.x)*0.1;
  pos.z += sin(PI*uv.x)*0.1;

  pos.y += sin(time)*0.75;
  vUv.y += sin(time)*0.15;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;

uniform sampler2D tex;
void main() {
  vec4 texColor = texture2D(tex, vUv);
  // Modify texColor as needed
  gl_FragColor = texColor;
}
`;
const ImagePlane = () => {
  const groupRef = useRef();
  const cameraRef = useRef();
  const [position, setPosition] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [time, setTime] = useState(0);
  const images = [0, 1, 2, 3, 4];
  const tex = useTexture("/image.jpg");
  const materialRef = useRef();
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

  useFrame((state, delta) => {
    setSpeed(speed * 0.8);
    let newPosition = position + speed;
    let rounded = Math.round(newPosition);
    let diff = rounded - newPosition;
    newPosition += diff * 0.05;
    newPosition = Math.max(0, Math.min(newPosition, images.length - 1));
    setPosition(newPosition);
    cameraRef.current.position.y = position * 5;
    cameraRef.current.position.x = position * 0.5;

    setTime(time + delta);
    if (materialRef.current) {
      console.log(materialRef);
    }
  });
  const imagePlanes = images.map((item, i) => (
    <mesh key={i} position={[0, i * 5, 0]}>
      <planeGeometry args={[5, 4, 20, 20]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: time },
          tex: { value: tex },
        }}
      />
    </mesh>
  ));

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

export default ImagePlane;
