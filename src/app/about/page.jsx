"use client"
import { useEffect, useState } from 'react';
import AboutTwo from "@/components/about/AboutTwo";
import AboutOne from '@/components/about/aboutOne';
import LogoOverlay from '@/components/LogoOverlay';

const Page = () => {
  // Define your variants
  const variants = [<AboutOne />, <AboutTwo />];

  // State to hold the selected variant index
  const [variantIndex, setVariantIndex] = useState();
  let config;
  const handleResize = () => {
    // Check viewport width on resize
    if (window.innerWidth < 1080) {
      setVariantIndex(0); // Set variantIndex to 1 if width < 700 or not desktop
    }
    else {
      setVariantIndex(config['about']);
    }
  };
  useEffect(() => {
    // Check if config exists in Session Storage
    const configString = sessionStorage.getItem('config');

    if (configString) {
      // Parse the config JSON string
      config = JSON.parse(configString);

      // Update the variant index based on the 'about' key in the config
      // Check viewport width
      if (window.innerWidth < 1080) {
        setVariantIndex(0); // Set variantIndex to 1 if width < 700 or not desktop
      } else {
        setVariantIndex(config['about']); // Set variant index from config
      }

    }
    else {
      setVariantIndex(0)
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount



  return (
    <div>
      {variants[variantIndex]}
    </div>
  );
};

export default Page;
