"use client"
import ParticleCircle from '@/components/ParticleCircle'
import {useState} from 'react'
import { Canvas } from 'react-three-fiber'

import MarqueeText from './MarqueeText';
import { m } from 'framer-motion';
const RandomCircle = ({color}) => {
    const [hovered, setHover] = useState(false);
    const [moveRandomly, setMoveRandomly] = useState(false);
  
    return (
      <>
        <div className='h-screen w-screen absolute top-0 left-0 -z-10'>
          <Canvas camera={{ position: [0, 0, 20] }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <ParticleCircle color={color} hovered={hovered} direction={1} ringCount={10} radius={5} moveRandomly={moveRandomly} />
            <ParticleCircle color={color} hovered={hovered} direction={-1} ringCount={10} radius={5.25} moveRandomly={moveRandomly} />
            
            <MarqueeText position={[0, 0, 0]} speed={1} text={moveRandomly ? "CHAOS" : "ORDER"} hovered={hovered} color={color} />
          </Canvas>
        </div>
        <div
          className='h-screen w-screen flex justify-center items-center text-5xl z-10 cursor-pointer ave'
          onClick={() => setMoveRandomly((prevMoveRandomly) => !prevMoveRandomly)}
        >
          <div  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            The Three Dubs
          </div>
        </div>
      </>
    );
}

export default RandomCircle