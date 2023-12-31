import * as THREE from "three";

const TwisterShaderMaterial = {
  uniforms: {
    uTexture: { value: null }, // Provide a default texture value
    uTime: { value: 0 },
  },
  vertexShader: `
   varying vec2 vUv;

  uniform float uTime;

  mat4 rotation3d(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;

    return mat4(
      oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
      oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
      oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
      0.0,                                0.0,                                0.0,                                1.0
    );
  }

  vec3 rotate(vec3 v, vec3 axis, float angle) {
    return (rotation3d(axis, angle) * vec4(v, 1.0)).xyz;
  }

  void main() {
    vUv = uv;

    vec3 pos = position;

    vec3 axis = vec3(1., 0., 0.);
    float twist = 0.1;
    float angle = pos.x * twist;

    vec3 transformed = rotate(pos, axis, angle);

    // float freq = 0.75;
    // float amp = 1.;
    // transformed.y += cos(transformed.x * freq + 0.) * amp;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.);
  }
  `,
  fragmentShader: `
  varying vec2 vUv;

  uniform float uTime;
  uniform sampler2D uTexture;

  void main() {
    float time = uTime * 0.25;
    vec2 uv = fract(vUv * 3. - vec2(time, 0.));
    vec3 texture = texture2D(uTexture, uv).rgb;

    gl_FragColor = vec4(texture, .83);
  }
  `,
};

export default TwisterShaderMaterial;
