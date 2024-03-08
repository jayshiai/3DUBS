
"use client"
import Link from 'next/link';
import React, { useEffect } from 'react'

const LoadingComponent = ({ url, text }) => {



    const handleButtonClick = () => {
        if (typeof demo !== 'undefined' && demo.init) {
            demo.init();
        } else {
            console.error('demo.init is not available');
        }
    };


    return (

        <Link onClick={handleButtonClick} href={url} >{text}</Link>



    )
}

export default LoadingComponent