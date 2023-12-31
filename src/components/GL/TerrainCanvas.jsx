import { Box, Plane } from '@react-three/drei'
import * as THREE from "three";
import React, { useRef, useEffect } from 'react'
import PlaneShaderMaterial from "./material/planeShaderMaterial";
import SkyShaderMaterial from "./material/skyShaderMaterial";
import { useFrame, useLoader, useThree } from 'react-three-fiber';


// 0 - day, 1 - night, 2 - sunset
const skyBox =
    [{
        turbidity: 20,
        rayleigh: 0,
        luminance: 1,
        mieCoefficient: 0.01,
        mieDirectionalG: 0.8,
        sunPosition: -0.02

    },
    {
        turbidity: 1,
        rayleigh: 0.01,
        luminance: 1,
        mieCoefficient: 0.0003,
        mieDirectionalG: 0.9999,
        sunPosition: -0.03
    },
    {
        turbidity: 13,
        rayleigh: 1.2,
        luminance: 1,
        mieCoefficient: 0.1,
        mieDirectionalG: 0.58,
        sunPosition: -0.002
    }]


const TerrainCanvas = ({ dayTime }) => {
    const time = useRef(0);
    const mat = useRef();
    const sky = useRef();

    const texture = useLoader(THREE.TextureLoader, `./pallete${dayTime}.png`)
    let ww = window.innerWidth;
    let wh = window.innerHeight;
    let mouseObjRef = useRef({
        position: new THREE.Vector2(ww * 0.5, wh * 0.7),
        target: new THREE.Vector2(ww * 0.5, wh * 0.7)
    });

    // Helper function to map a value from one range to another
    function map(value, start1, stop1, start2, stop2) {
        return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
    }

    // Helper function for linear interpolation
    function lerp(start, end, amt) {
        return (1 - amt) * start + amt * end;
    }
    // Set up mouse move event listener
    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseObjRef.current.target.x = e.clientX;
            mouseObjRef.current.target.y = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Empty dependency array ensures the effect runs only once (on mount)


    var theta = Math.PI * (skyBox[dayTime].sunPosition);
    var phi = 2 * Math.PI * (-.25);
    const sunSpherex = 40 * Math.cos(phi);
    const sunSpherey = 40 * Math.sin(phi) * Math.sin(theta);
    const sunSpherez = 40 * Math.sin(phi) * Math.cos(theta);

    useEffect(() => {


        sky.current.uniforms.turbidity.value = skyBox[dayTime].turbidity;
        sky.current.uniforms.rayleigh.value = skyBox[dayTime].rayleigh;
        sky.current.uniforms.luminance.value = skyBox[dayTime].luminance;
        sky.current.uniforms.mieCoefficient.value = skyBox[dayTime].mieCoefficient;
        sky.current.uniforms.mieDirectionalG.value = skyBox[dayTime].mieDirectionalG;
        sky.current.uniforms.sunPosition.value = new THREE.Vector3(sunSpherex, sunSpherey, sunSpherez);
    }, []);

    useFrame((state, delta) => {

        mouseObjRef.current.position.x = lerp(mouseObjRef.current.position.x, mouseObjRef.current.target.x, 0.1);
        mouseObjRef.current.position.y = lerp(mouseObjRef.current.position.y, mouseObjRef.current.target.y, 0.1);
        time.current += delta;
        mat.current.uniforms.time.value = time.current;

        if (dayTime === 0) {
            mat.current.uniforms.distortCenter.value = map(mouseObjRef.current.position.x, 0, ww, -0.1, 0.1)
            mat.current.uniforms.roadWidth.value = map(mouseObjRef.current.position.y, 0, wh, -0.5, 1)
        }
        else if (dayTime === 1) {

            mat.current.uniforms.distortCenter.value = Math.sin(time.current) * 0.1;
            mat.current.uniforms.maxHeight.value = map(mouseObjRef.current.position.y, 0, wh, 20, 5)
        }
        else {
            mat.current.uniforms.scroll.value = time.current * 0.5 + map(mouseObjRef.current.position.y, 0, wh, 0, 4)
            mat.current.uniforms.distortCenter.value = Math.sin(time.current) * 0.1;
            mat.current.uniforms.roadWidth.value = map(mouseObjRef.current.position.y, 0, ww, 1, 4.5)
        }

    });
    return (
        <>
            <Box
                scale={50}
                args={[2, 1, 1]}
                position={[0, 0, -40]}
            >
                <shaderMaterial

                    ref={sky}
                    attach="material"
                    args={[SkyShaderMaterial]}

                />
            </Box>
            <Plane
                position={[0, -6, -180]}
                rotation={[-Math.PI / 2, 0, 0]}
                args={[100, 400, 400, 400]}

            >
                <shaderMaterial
                    ref={mat}
                    attach="material"
                    args={[PlaneShaderMaterial]}
                    uniforms-pallete-value={texture} // Pass the time value to the shader

                    fog={true}
                />
            </Plane>

        </>
    )
}

export default TerrainCanvas