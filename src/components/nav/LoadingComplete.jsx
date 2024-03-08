"use client"
import React, { useEffect } from 'react'
const LoadingComplete = () => {
    // Load loader.js script and pass SETTINGS to it
    useEffect(() => {
        if (!demo._isCompleting) {
            demo.spinner.setComplete();
            console.log('completing')
        }

    }, []);
    return (
        <></>
    )
}

export default LoadingComplete