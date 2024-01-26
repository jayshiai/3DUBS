// ParticleCircle.js

import { useRef, useState, useEffect } from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three';

const Particle = ({ position, color, scale }) => {
  const mesh = useRef();

  return (
    <mesh ref={mesh} position={position} scale={scale ? scale : 1}>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};



const ParticleCircle = ({ color, direction, ringCount, radius, hovered, moveRandomly, tapped }) => {
  const particleCount = 55;
  const group = useRef();
  const [initialPositions, setInitialPositions] = useState([]);
  const [particlePositions, setParticlePositions] = useState([]);
  const [particleScale, setParticleScale] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const newPositions = [];
    const scale = [];
    for (let i = 1; i < ringCount; i++) {
      const currentRadius = radius + i * 0.5;
      for (let j = 0; j < particleCount; j++) {
        const theta = (j / particleCount) * 2 * Math.PI;
        const x = currentRadius * Math.cos(theta);
        const y = currentRadius * Math.sin(theta);
        newPositions.push([x, y, 5]);
        scale.push(1);
      }
    }
    setInitialPositions(newPositions);
    setParticlePositions(newPositions);
    setParticleScale(scale);
    setLoading(false); // Set loading to false after initial positions are set
  }, [ringCount, radius]);

  let time = 0;

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }


  useFrame(({ clock }, delta) => {
    if (!loading) {
      if (moveRandomly) {
        setParticlePositions((prevPositions) =>
          prevPositions.map(([x, y, z], index) => {
            if (index % 3 == 0) {
              return [
                x + (Math.random() - 0.5) * 1.0, // Increase the random displacement for an explosive effect
                y + (Math.random() - 0.5) * 1.0, // Adjust the factor based on your preference
                z, // Move particles upwards to simulate an explosion

              ]
            }
            else {
              return [
                x + (Math.random() - 0.5) * 0.25, // Increase the random displacement for an explosive effect
                y + (Math.random() - 0.5) * 0.25, // Adjust the factor based on your preference
                z, // Move particles upwards to simulate an explosion

              ]
            }
          })
        );
      } else {
        // When transitioning back from random movement, smoothly interpolate positions back to the initial configuration
        setParticlePositions((prevPositions) =>
          prevPositions.map(([x, y, z], index) => [
            x + (initialPositions[index][0] - x) * 0.1,
            y + (initialPositions[index][1] - y) * 0.1,
            5
          ])
        );

        // setParticleScale((prevScale) => prevScale.map((scale, index) => {
        //   let freeScale = Math.cos(clock.getElapsedTime() * 3 - (index / 55) * 0.15);
        //   let lockScale = clamp(freeScale, 0, 1);

        //   let newScale = 0.5 + lockScale * 0.5
        //   return tapped ? newScale : 1;
        // }))
      }

      // Math.abs(Math.cos(clock.getElapsedTime() * 5 - (index % 55) * 0.6) * 10)

      group.current.rotation.z = direction * clock.getElapsedTime();
    }
  });

  return (
    <group ref={group}>
      {particlePositions.map((position, index) => (
        <Particle
          key={index}
          position={position}
          // scale={particleScale[index]}
          color={moveRandomly ? (hovered ? color : 'red') : hovered ? 'red' : color}
        />
      ))}
    </group>
  );
};

export default ParticleCircle;
