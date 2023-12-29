"use client"
import ParticleCircle from '@/components/ParticleCircle'
import RandomCircle from '@/components/RandomCircle';
import SideNav from '@/components/SideNav';
import {useState} from 'react'
import { Canvas } from 'react-three-fiber'

const Page = () => {
  const [color, setColor] = useState('#000');
  return (
    <>
      <RandomCircle color={color}/>
      <SideNav setColor={setColor}/>
    </>
  );
};

export default Page;