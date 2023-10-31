"use client";
import { useEffect, useRef } from "react";

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 },
];
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const ZenEvents = () => {
  const wrapperRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      const index = rand(0, combinations.length - 1),
        combination = combinations[index];

      if (wrapperRef.current) {
        wrapperRef.current.dataset.configuration = combination.configuration;
        wrapperRef.current.dataset.roundness = combination.roundness;
      }
    }, 3000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div
      ref={wrapperRef}
      id="wrapper"
      data-configuration="1"
      data-roundness="1"
    >
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
    </div>
  );
};

export default ZenEvents;
