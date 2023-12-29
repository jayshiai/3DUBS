import * as THREE from "three";

const BoxShaderMaterial = {
  uniforms: {
    uTexture: { value: null }, // Provide a default texture value
    uTime: { value: 0 },
    uTransition: { value: 0 }, // Add uTransition to the uniforms
  },
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;

    uniform sampler2D uTexture;
    uniform float uTime;
    uniform float uTransition; // Uniform to control the transition (0 for "Order", 1 for "Chaos")


    float random(float seed) {
        return fract(sin(seed) * 43758.5453);
    }


    // Function to add chromatic aberration effect during transition
    vec3 applyGlitch(vec2 uv, float time) {
      float glitchIntensity = 0.03; // Adjust the intensity of the glitch effect
      float glitchFrequency = 30.0; // Adjust the frequency of the glitch effect

      // Separate UV offsets for red, green, and blue channels
      vec2 redOffset = vec2(
        sin(uv.y * glitchFrequency),
        cos(uv.x * glitchFrequency)
      );

      vec2 greenOffset = vec2(
        sin(uv.y * glitchFrequency + 1.0), // Offset the green channel
        cos(uv.x * glitchFrequency + 1.0)
      );

      vec2 blueOffset = vec2(
        sin(uv.y * glitchFrequency + 2.0), // Offset the blue channel
        cos(uv.x * glitchFrequency + 2.0)
      );

      // Apply the offsets to the UV coordinates for each channel
      vec2 redUV = uv + redOffset * glitchIntensity * random(time * 30.0) * 5.;
      vec2 greenUV = uv + greenOffset * glitchIntensity * random(time * 30.0) * 2. ;
      vec2 blueUV = uv + blueOffset * glitchIntensity * random(time * 30.0) * 7.;

      // Sample the texture for each channel
      vec3 textureColor = vec3(
        texture2D(uTexture, redUV).r,
        texture2D(uTexture, greenUV).g,
        texture2D(uTexture, blueUV).b
      );

      return textureColor;
    }

    void main() {
      float time = uTime * 0.75;
      vec2 repeat = vec2(7.0, 15.0);

      // Calculate alternating lines based on vUv.y
      float alternating = mod(floor(vUv.y * repeat.y), 2.0) == 1.0 ? 1.0 : -1.0;

      // To repeat the uvs we need to multiply them by a scalar
      // and then get the fractional part of it so they go from 0 to 1
      // To move them continuously we have to add time
      // to the x or y component, to change the direction
      vec2 uv = fract(vUv * repeat + vec2(-time * alternating, 0.));

      // Apply chromatic aberration effect only when transitioning from Order to Chaos
      if (uTransition == 1.0) {
        vec3 glitchedColor = applyGlitch(uv, time);
        gl_FragColor = vec4(glitchedColor, 1.0);
      } else {
        // If not transitioning, display the texture as is
        vec3 textureColor = texture2D(uTexture, uv).rgb;
        gl_FragColor = vec4(textureColor, 1.0);
      }
    }
  `,
};

export default BoxShaderMaterial;
