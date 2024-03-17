"use client"
import ParticleCircle from '@/components/ParticleCircle'
import { useState } from 'react'
import { Canvas } from 'react-three-fiber'

import MarqueeText from './MarqueeText';
const RandomCircle = ({ color }) => {
  const [hovered, setHover] = useState(false);
  const [moveRandomly, setMoveRandomly] = useState(false);
  const [tapped, setTapped] = useState(false);

  const handleTap = () => {
    setTapped(true);

    setTimeout(() => {
      setTapped(false);
    }, 2600);
  }
  return (
    <>
      <div className='h-screen w-screen absolute top-0 left-0 -z-10'>
        <Canvas camera={{ position: [0, 0, 20] }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <ParticleCircle color={color} hovered={hovered} direction={1} ringCount={10} radius={5} moveRandomly={moveRandomly} tapped={tapped} />
          <ParticleCircle color={color} hovered={hovered} direction={-1} ringCount={10} radius={5.25} moveRandomly={moveRandomly} tapped={tapped} />

          <MarqueeText position={[0, 0, 0]} speed={1} text={moveRandomly ? "CHAOS" : "ORDER"} hovered={hovered} color={color} />
        </Canvas>
      </div>
      <div
        onClick={handleTap}
        className='h-screen w-screen flex justify-center items-center text-5xl z-10  ave'

      >
        <div className='cursor-pointer' onClick={() => setMoveRandomly((prevMoveRandomly) => !prevMoveRandomly)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          The Three Dubs
        </div>
      </div>
    </>
  );
}

export default RandomCircle


