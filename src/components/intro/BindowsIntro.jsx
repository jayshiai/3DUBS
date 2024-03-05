"use client"
import React, { useState, useEffect } from 'react';
import "./bindowsIntro.css"
const BindowsInto = ({ setCompleted }) => {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            // After 10 seconds, set showIntro to false to remove the component
            setShowIntro(false);
            setCompleted(true);
        }, 15000); // 10 seconds in milliseconds

        return () => clearTimeout(timer); // Clear the timer if component unmounts
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    return (
        <>
            {showIntro && (
                <div className='h-screen w-screen z-[100] bg-black'>
                    <div class="window">
                        <div class="logo">
                            <p class="top"><span className='text-[10px]'>Pine</span>Apple</p>
                            <p class="mid">Bindows<span>XP</span></p>
                            <p class="bottom">Profeshiionull</p>
                            <p className='text-right'>by theFreeDubs</p>
                        </div>
                        <div class="container">
                            <div class="box"></div>
                            <div class="box"></div>
                            <div class="box"></div>
                        </div>
                    </div> </div>
            )}
        </>
    )
}

export default BindowsInto