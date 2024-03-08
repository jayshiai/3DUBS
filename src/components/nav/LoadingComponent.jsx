
"use client"
import React, { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation';
const LoadingComponent = ({ url, text }) => {

    const router = useRouter();
    const currentUrl = usePathname();
    const handleButtonClick = () => {
        if (currentUrl != url) {
            if (typeof demo !== 'undefined' && demo.init) {
                demo.init();
            } else {
                console.error('demo.init is not available');
            }
            console.log(currentUrl, url);
            router.push(url);

        }
        else {
            console.log("same");
        }

    };


    return (

        <div onClick={handleButtonClick} >{text}</div>



    )
}

export default LoadingComponent