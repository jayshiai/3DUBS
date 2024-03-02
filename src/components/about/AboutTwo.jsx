"use client";
import AboutNav from "@/components/AboutNav";
import AboutSection from "@/components/AboutSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import AboutIntro from "@/components/AboutIntro";
const sections = [
    { name: "Aryan Chouhan", next: 1, fontFamily: "rockSalt", theme: "#EF4444" },
    { name: "Kunal Sharma", next: 0, fontFamily: "sacramento", theme: "#3399ff" },
];
const placeholderText = [
    {
        type: "paragraph",
        text: "I don't know who I am. I have searched through all the heavens and earth and found nothing. But when I looked into myself, I found only darkness.",
    },
    {
        type: "paragraph",
        text: "What does it mean to be alive yet dead? Do I exist for sake of existence? Am I doomed to forever wander in search of myself?",
    },
];
// const placeholderText = [
//   { type: "paragraph", text: "Framer Motion" },
//   {
//     type: "paragraph",
//     text: "Animating responsive text!",
//   },
// ];
const AboutTwo = () => {
    const [current, setCurrent] = useState(0);


    return (
        <div className="h-screen w-screen overflow-hidden bg-black py-1 px-2">
            <AboutNav />
            <div className="h-[92.5%] w-full grid grid-cols-10 grid-rows-1 p-1 gap-1">
                <div className=" col-span-7 h-full bg-white rounded-2xl px-16 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <AboutSection
                            key={sections[current].next}
                            name={sections[current].name}
                            setCurrent={setCurrent}
                            next={sections[current].next}
                            fontFamily={sections[current].fontFamily}
                            theme={sections[current].theme}
                        />
                    </AnimatePresence>
                </div>
                <div className="overflow-hidden col-span-3 h-full bg-white rounded-2xl ">
                    <AnimatePresence mode="wait">
                        <AboutIntro
                            key={sections[current].fontFamily}
                            theme={sections[current].theme}
                            fontFamily={sections[current].fontFamily}
                            placeholderText={placeholderText}
                        />
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default AboutTwo