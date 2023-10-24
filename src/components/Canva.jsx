"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import ImagePlane from "./ImagePlane";

const Canva = () => {
  return (
    <Canvas>
      <ImagePlane />
    </Canvas>
  );
};

export default Canva;
