"use client"
import RandomCircle from '@/components/RandomCircle';
import SideNav from '@/components/SideNav';
import { useState } from 'react'
import LogoOverlay from '../LogoOverlay';
import NavOverlay from '../nav/NavOverlay';

const HomeCircle = ({ completed }) => {
    const [color, setColor] = useState('#000');
    return (
        <>
            <LogoOverlay />
            <RandomCircle color={color} />
            <div className='block lg:hidden'><NavOverlay /></div>
            <div className='hidden lg:block'><SideNav setColorActivate={true} currentHomeVariant={1} setColor={setColor} /></div>
        </>
    )
}

export default HomeCircle