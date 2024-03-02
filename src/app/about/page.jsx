"use client"
import { useEffect, useState } from 'react';
import AboutTwo from "@/components/about/AboutTwo";
import AboutOne from '@/components/about/aboutOne';

const Page = () => {
  // Define your variants
  const variants = [<AboutOne />, <AboutTwo />];

  // State to hold the selected variant index
  const [variantIndex, setVariantIndex] = useState();

  useEffect(() => {
    // Check if config exists in Session Storage
    const configString = sessionStorage.getItem('config');

    if (configString) {
      // Parse the config JSON string
      const config = JSON.parse(configString);

      // Update the variant index based on the 'about' key in the config
      setVariantIndex(config['about']);
      console.log(config['about'])
    }
    else {
      setVariantIndex(0)
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div>

      {variants[variantIndex]}
    </div>
  );
};

export default Page;
