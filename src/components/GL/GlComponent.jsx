"use client";
global.THREE = require("three");
const THREE = global.THREE;
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
const loadFont = require("load-bmfont");
const createGeometry = require("three-bmfont-text");
const MSDFShader = require("three-bmfont-text/shaders/msdf");
const fontFile = "/fonts/Orbitron-Black.fnt";
const fontAtlas = "/fonts/Orbitron-Black.png";

export default function GlComponent() {
  const mountRef = useRef(null);

  useEffect(() => {
    let renderer,
      camera,
      scene,
      controls,
      clock,
      fontGeometry,
      loader,
      fontMaterial,
      text;

    const mount = mountRef.current;

    // Three.js setup
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    mount.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 5;

    scene = new THREE.Scene();

    controls = new OrbitControls(camera, renderer.domElement);

    clock = new THREE.Clock();

    // Create geometry of packed glyphs
    loadFont(fontFile, (err, font) => {
      fontGeometry = createGeometry({ font, text: "ENDLESS" });

      // Load texture containing font glyphs
      loader = new THREE.TextureLoader();
      loader.load(fontAtlas, (texture) => {
        fontMaterial = new THREE.RawShaderMaterial(
          MSDFShader({
            map: texture,
            side: THREE.DoubleSide,
            transparent: true,
            negate: false,
            color: 0xffffff,
          })
        );

        // Render Target setup
        const rt = new THREE.WebGLRenderTarget(
          window.innerWidth,
          window.innerHeight
        );
        const rtCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
        rtCamera.position.z = 2.5;

        const rtScene = new THREE.Scene();
        rtScene.background = new THREE.Color("#000000");

        // Create text mesh with font geometry and material
        text = new THREE.Mesh(fontGeometry, fontMaterial);
        text.position.set(-0.965, -0.275, 0);
        text.rotation.set(Math.PI, 0, 0);
        text.scale.set(0.008, 0.02, 1);

        // Add text mesh to buffer scene
        rtScene.add(text);
        scene.add(text); // We'll add the RT mesh to the main scene for now

        const animate = () => {
          requestAnimationFrame(animate);

          controls.update();
          renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
          let width = window.innerWidth;
          let height = window.innerHeight;

          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
        };

        window.addEventListener("resize", handleResize);
      });
    });

    return () => {
      mount.removeChild(renderer.domElement);
      // window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} />;
}
