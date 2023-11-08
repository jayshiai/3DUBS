import * as THREE from "three";

const SphereShaderMaterial = {
  uniforms: {
    uTexture: { value: null }, // Provide a default texture value
    uTime: { value: 0 },
  },
  vertexShader: `
  varying vec2 vUv;
  varying vec3 vPosition;

  uniform float uTime;

  void main() {
    vUv = uv;
    vPosition = position;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }
  `,
  fragmentShader: `

  varying vec2 vUv;
  varying vec3 vPosition;

  uniform float uTime;
  uniform sampler2D uTexture;

  void main() {
    float time = uTime * 1.5;

    vec2 repeat = vec2(12., 12.);
    vec2 uv = fract(vUv * repeat + vec2(sin(vUv.y * 1.) * 5., time));

    vec3 texture = texture2D(uTexture, uv).rgb;
    // texture *= vec3(uv.x, uv.y, 0.);

    float depth = vPosition.z / 4.5;
vec3 fragColor = mix(vec3(0., 0.,0.8), texture, depth);

    gl_FragColor = vec4(fragColor, .8);
  }
  `,
};

export default SphereShaderMaterial;
