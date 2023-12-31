"use client"

import * as THREE from "three";
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { BufferGeometry, TubeGeometry, MeshStandardMaterial, Vector3, CatmullRomCurve3, HemisphereLight } from 'three';
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

const ThreeScene = () => {


    // Get mouse position from useThree
    const { mouse, scene, camera } = useThree();

    // Define points along Z axis
    let points = [];
    for (let i = 0; i < 5; i += 1) {
        points.push(new THREE.Vector3(0, 0, 2.5 * (i / 4)));
    }
    points[4].y = -0.06;

    // Create a curve based on the points
    let curve = new CatmullRomCurve3(points);
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    // Set up mouse object with ref
    let mouseObjRef = useRef({
        position: new THREE.Vector2(ww * 0.5, wh * 0.7),
        ratio: new THREE.Vector2(0, 0),
        target: new THREE.Vector2(ww * 0.5, wh * 0.7)
    });

    // Update camera position
    const updateCameraPosition = () => {
        mouseObjRef.current.position.x += (mouseObjRef.current.target.x - mouseObjRef.current.position.x) / 30;
        mouseObjRef.current.position.y += (mouseObjRef.current.target.y - mouseObjRef.current.position.y) / 30;

        mouseObjRef.current.ratio.x = (mouseObjRef.current.position.x / window.innerWidth);
        mouseObjRef.current.ratio.y = (mouseObjRef.current.position.y / window.innerHeight);

        camera.rotation.z = ((mouseObjRef.current.ratio.x) * 1 - 0.05);
        camera.rotation.y = Math.PI - (mouseObjRef.current.ratio.x * 0.3 - 0.15);
        camera.position.x = ((mouseObjRef.current.ratio.x) * 0.044 - 0.025);
        camera.position.y = ((mouseObjRef.current.ratio.y) * 0.044 - 0.025);
    };

    const updateCurve = () => {
        var i = 0;
        var index = 0;

        // Assuming the position attribute is used for vertices in the buffer geometry
        var positions = tubeGeometry.attributes.position.array;
        var positions_o = tubeGeometry_o.attributes.position.array;

        for (i = 0; i < positions.length; i += 3) {

            index = Math.floor(i / 90); // Assuming 3 vertices per segment
            if (index > 70) {
                index = 70;
            }
            // Update the positions array
            positions[i] += ((positions_o[i] + splineMesh.geometry.vertices[index].x) - positions[i]) / 15;
            positions[i + 1] += ((positions_o[i + 1] + splineMesh.geometry.vertices[index].y) - positions[i + 1]) / 15;

            // positions[i + 2] = vertice.z;
        }

        tubeGeometry.attributes.position.needsUpdate = true;
        curve.points[2].x = 0.6 * (1 - mouseObjRef.current.ratio.x) - 0.3;
        curve.points[3].x = 0;
        curve.points[4].x = 0.6 * (1 - mouseObjRef.current.ratio.x) - 0.3;

        curve.points[2].y = 0.6 * (1 - mouseObjRef.current.ratio.y) - 0.3;
        curve.points[3].y = 0;
        curve.points[4].y = 0.6 * (1 - mouseObjRef.current.ratio.y) - 0.3;

        splineMesh.geometry.verticesNeedUpdate = true;
        splineMesh.geometry.vertices = curve.getPoints(70);
    };



    let geometry = new THREE.BufferGeometry();
    geometry.vertices = curve.getPoints(70);
    let splineMesh = new THREE.Line(geometry, new THREE.LineBasicMaterial());


    let tubeMaterial = new THREE.MeshBasicMaterial({
        side: THREE.BackSide,
        color: 0xffffff
    });

    let tubeGeometry = new THREE.TubeGeometry(curve, 70, 0.02, 30, false);
    let tubeGeometry_o = tubeGeometry.clone();

    let tubeMesh = new THREE.Mesh(tubeGeometry, tubeMaterial);
    scene.add(tubeMesh);
    //  // Set scene fog
    scene.fog = new THREE.Fog(0x000d25, 0.05, 1.6);

    // Add HemisphereLight to the scene
    let hemisphereLight = new HemisphereLight(0xe9eff2, 0x01010f, 1);
    scene.add(hemisphereLight);

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

    // Animation loop
    useFrame(() => {
        updateCurve();
    });



    return (
        <>
            <PerspectiveCamera
                makeDefault
                fov={15}
                aspect={window.innerWidth / window.innerHeight}
                near={0.001}
                far={100}
                position={[0, 0, 0.35]} // Set camera position at the mouth of the tube
                rotation={[0, Math.PI, 0]} // Adjust rotation to look down the tube
            />
        </>
    );
};


const TunnelComponent = () => {


    return (
        <Canvas antialias="true">
            <ThreeScene />
            <OrbitControls />
        </Canvas>
    )
}

export default TunnelComponent