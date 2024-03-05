
"use client";
import ImageIntro from "@/components/intro/ImageIntro";

import { useEffect, useState } from "react";
import HomeZen from "@/components/home/HomeZen";
import HomeCircle from "@/components/home/HomeCircle";
import HomeTerrain from "@/components/home/HomeTerrain";
import HomeTunnelOne from "@/components/home/HomeTunnelOne";
import HomeTunnelTwo from "@/components/home/HomeTunnelTwo";
import Bindows from "@/components/home/Bindows";
import BindowsInto from "@/components/intro/BindowsIntro";



function hasConfigInSessionStorage() {
  return !!sessionStorage.getItem('config');
}


export default function Home() {

  const [completed, setCompleted] = useState(false);
  const variants = [<HomeZen />, <HomeCircle />, <HomeTerrain />, <HomeTunnelOne />, <HomeTunnelTwo />, <Bindows />];
  // State to hold the selected variant index
  const [variantIndex, setVariantIndex] = useState();



  useEffect(() => {
    // Check if the configuration already exists in Session Storage
    if (!hasConfigInSessionStorage()) {
      // Define your list of items with their variants
      const items = {
        "intro": 2,
        "about": 2,
        "home": 6,
        "contact": 2,
        "projects": 1,
        "loading": 6,
        "cursor": 2,
        "individual": 2,
        "nav": 2
      };

      // Define an object to store the selected configuration
      const selectedConfig = {};

      // Iterate through each item in the list
      for (const item in items) {
        if (items.hasOwnProperty(item)) {
          // Randomly select a variant for the current item
          const randomVariant = Math.floor(Math.random() * items[item]);

          // Store the selected variant in the configuration object
          selectedConfig[item] = randomVariant;
        }
      }

      // Convert the selected configuration object to a JSON string
      const configJSON = JSON.stringify(selectedConfig);

      // Store the configuration in Session Storage
      sessionStorage.setItem('config', configJSON);
      setVariantIndex(selectedConfig['home']);
      // Output the selected configuration
      console.log("Configuration stored in Session Storage:", selectedConfig);
    }
    const configString = sessionStorage.getItem('config');

    if (configString) {
      // Parse the config JSON string
      const config = JSON.parse(configString);

      // Update the variant index based on the 'about' key in the config
      setVariantIndex(config['home']);
      console.log(config['home'])
    }
    else {
      setVariantIndex(0)
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <>
      {completed && variants[variantIndex]}
      {/* {!completed && <ImageIntro completed={completed} setCompleted={setCompleted} />} */}
      {!completed && <BindowsInto setCompleted={setCompleted} />}


      <script src='./js/three.min.js'></script>
      <script src='./js/perlin.js'></script>
      <script src='./js/TweenMax.min.js'></script>

    </>
  );
}
