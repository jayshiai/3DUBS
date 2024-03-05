"use client"
import RandomCircle from '@/components/RandomCircle';
import SideNav from '@/components/SideNav';
import { useState } from 'react'
import LogoOverlay from '../LogoOverlay';

const HomeCircle = ({ completed }) => {
    const [color, setColor] = useState('#000');
    return (
        <>
            <LogoOverlay />
            <RandomCircle color={color} />
            <SideNav setColorActivate={true} currentHomeVariant={1} setColor={setColor} />
        </>
    )
}

export default HomeCircle