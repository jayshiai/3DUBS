"use client"
import TraingleTunnel from '@/components/TriangleTunnel';
import React, { useState, useEffect } from 'react'
import LogoOverlay from '../LogoOverlay'
import NavComponent from '../nav/NavComponent';

const HomeTunnelOne = ({ completed }) => {
    const [mouseDown, setMouseDown] = useState(false);


    useEffect(() => {
        // Load the script after the component has mounted
        const script = document.createElement('script');
        script.src = './js/triangleTunnel.js';
        script.async = true;
        document.body.appendChild(script);
        // Add event listener for script load
        script.onload = () => {
            // This function runs when the script has been loaded
            window.tunnel = new Tunnel();
        };

        return () => {
            // Clean up to prevent memory leaks
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <LogoOverlay />
            <NavComponent />

            <TraingleTunnel />
            <div onTouchStart={() => setMouseDown(true)} onTouchEnd={() => setMouseDown(false)} onMouseDown={() => setMouseDown(true)} onMouseUp={() => setMouseDown(false)} className={`h-screen w-screen fixed top-0 cursor-default select-none ${mouseDown ? "text-white" : "text-black"} flex justify-center items-center text-8xl ave `}>
                The Three Dubs
            </div>
            {/* <ParticleTunnel /> */}
        </>
    )
}

export default HomeTunnelOne