import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
const vertexShader = `
uniform float time;
varying vec2 vUv;
float PI = 3.14159265359;
void main() {
  vUv = (uv - vec2(0.5))*0.9 + vec2(0.5);
 
  vec3 pos = position;
  pos.y += sin(PI*uv.x)*0.1;
  pos.z += sin(PI*uv.x)*0.1;

  pos.y += sin(time)*0.075;
  vUv.y += sin(time)*0.015;
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
const ImagePlane = ({ position }) => {
  const tex = useTexture("/image.jpg");

  const materialRef = useRef();

  useFrame((state, delta) => {
    // Update time based on the delta value
    if (materialRef.current) {
      materialRef.current.uniforms.time.value += delta;
    }
  });
  return (
    <mesh position={position}>
      <planeGeometry args={[5, 4, 20, 20]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: 0 },
          tex: { value: tex },
        }}
      />
    </mesh>
  );
};

export default ImagePlane;
