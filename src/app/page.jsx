
"use client";
import ImageIntro from "@/components/intro/ImageIntro";

import { useEffect, useState } from "react";
import HomeZen from "@/components/home/HomeZen";
import HomeCircle from "@/components/home/HomeCircle";
import HomeTerrain from "@/components/home/HomeTerrain";
import HomeTunnelOne from "@/components/home/HomeTunnelOne";
import HomeTunnelTwo from "@/components/home/HomeTunnelTwo";
import Bindows from "@/components/home/Bindows";
import BindowsIntro from "@/components/intro/BindowsIntro";
import EpicIntro from "@/components/intro/EpicIntro";



function hasConfigInSessionStorage() {
  return !!sessionStorage.getItem('config');
}
function hasIntroCompleted() {
  return !!sessionStorage.getItem('introCompleted');
}


export default function Home() {

  const [completed, setCompleted] = useState(false);
  const variants = [<HomeZen key={0} />, <HomeCircle key={1} />, <HomeTerrain key={2} />, <HomeTunnelOne key={3} />, <HomeTunnelTwo key={4} />, <Bindows key={5} />];
  const introVariants = [<ImageIntro key={0} completed={completed} setCompleted={setCompleted} />, <EpicIntro key={1} setCompleted={setCompleted} />, <BindowsIntro key={2} setCompleted={setCompleted} />];
  // State to hold the selected variant index
  const [variantIndex, setVariantIndex] = useState();
  const [introVariantIndex, setIntroVariantIndex] = useState(0);


  useEffect(() => {
    if (!hasIntroCompleted()) {
      setIntroVariantIndex(0); // Set intro variant index to 0 if intro is not completed
    } else {
      setIntroVariantIndex(-1); // Set intro variant index to -1 to skip intro if already completed
      setCompleted(true); // Set completed to true if intro is already completed
    }

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
      if (config['home'] != 5) {
        setIntroVariantIndex(config['intro']);
      }
      else {
        setIntroVariantIndex(2);
      }
    }
    else {
      setVariantIndex(0)
      setIntroVariantIndex(0);
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount
  useEffect(() => {
    if (completed) {
      sessionStorage.setItem('introCompleted', true); // Mark intro as completed in session storage
    }
  }, [completed]);

  return (
    <>
      {completed && variants[variantIndex]}
      {!completed && introVariantIndex !== -1 && introVariants[introVariantIndex]}

      <script src='./js/three.min.js'></script>
      <script src='./js/perlin.js'></script>
      <script src='./js/TweenMax.min.js'></script>

    </>
  );
}
