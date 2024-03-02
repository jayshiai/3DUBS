"use client"
import ParticleTunnel from '@/components/ParticleTunnel';
import React, { useState, useEffect } from 'react'

const HomeTunnelTwo = ({ completed }) => {
    const [mouseDown, setMouseDown] = useState(false);

    useEffect(() => {
        // Load the script after the component has mounted
        const script = document.createElement('script');
        script.src = './js/particleTunnel.js';
        script.async = true;
        document.body.appendChild(script);
        // Add event listener for script load
        script.onload = () => {
            // This function runs when the script has been loaded
            window.tunnel = new Tunnel();
            console.log("bitch");
        };

        return () => {
            // Clean up to prevent memory leaks
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <div onTouchStart={() => setMouseDown(true)} onTouchEnd={() => setMouseDown(false)} onMouseDown={() => setMouseDown(true)} onMouseUp={() => setMouseDown(false)} className={`h-screen w-screen cursor-default select-none ${mouseDown ? "text-white" : "text-black"} flex justify-center items-center text-8xl ave z-10`}>
                The Three Dubs
            </div>
            <ParticleTunnel />

            <script src='./js/three.min.js'></script>
            <script src='./js/TweenMax.min.js'></script>


        </>
    )
}

export default HomeTunnelTwo
