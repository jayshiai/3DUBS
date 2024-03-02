"use client"
import RandomCircle from '@/components/RandomCircle';
import SideNav from '@/components/SideNav';
import { useState } from 'react'

const HomeCircle = ({ completed }) => {
    const [color, setColor] = useState('#000');
    return (
        <>
            <RandomCircle color={color} />
            <SideNav setColor={setColor} />
        </>
    )
}

export default HomeCircle