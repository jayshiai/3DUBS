import React, { useState, useEffect } from 'react';
import NavOverlay from '@/components/nav/NavOverlay';
import SideNav from '../SideNav';

const NavComponent = () => {
    const [variantIndex, setVariantIndex] = useState(null); // Set default index to 0
    const [variantHomeIndex, setVariantHomeIndex] = useState(0); // Set default home index to 0

    const variants = [<NavOverlay key={0} />, <SideNav key={1} currentHomeVariant={variantHomeIndex} />];
    let config;
    useEffect(() => {
        const configString = sessionStorage.getItem('config');

        if (configString) {
            config = JSON.parse(configString);
            setVariantHomeIndex(config['home']); // Set home index from config

            // Check viewport width
            if (window.innerWidth < 700) {
                setVariantIndex(0); // Set variantIndex to 1 if width < 700 or not desktop
            } else {
                setVariantIndex(config['nav']); // Set variant index from config
            }
        } else {
            setVariantIndex(0); // Set variant index to 0 if no config found
        }

        // Add event listener for resizing
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleResize = () => {
        // Check viewport width on resize
        if (window.innerWidth < 700) {
            setVariantIndex(0); // Set variantIndex to 1 if width < 700 or not desktop
            console.log('mobile');
        }
        else {
            setVariantIndex(config['nav']);
        }
    };



    return (
        <>
            {variants[variantIndex]}
        </>
    );
};

export default NavComponent;
