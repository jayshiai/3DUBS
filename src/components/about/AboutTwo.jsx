"use client";
import AboutNav from "@/components/AboutNav";
import AboutSection from "@/components/AboutSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import AboutIntro from "@/components/AboutIntro";
const sections = [
    { name: "Jayvardhan Patil", next: 1, fontFamily: "ave", theme: "#000000" },
    { name: "Aryan Chouhan", next: 2, fontFamily: "rockSalt", theme: "#EF4444" },
    { name: "Kunal Sharma", next: 0, fontFamily: "sacramento", theme: "#3399ff" },
];

const kunalText = [
    {
        type: "paragraph",
        text: "Hey there! I'm all about the simple joys inspired by pandas—eating, sleeping, a bit of work, and then doing it all over again. I love exploring the colorful world around us and playing with different shades of universe. Designing and bringing ideas to life in web development is my jam. Plus, I'm a tech enthusiast with a decent grasp of C, C++, and some Java and Python basics. ",
    },
    {
        type: "paragraph",
        text: "When I'm not immersed in coding, you'll probably find me curled up enjoying a nature walk or sleeping . Let's keep it fun, keep learning, and embrace the beauty of simplicity!",
    },
];

const kunalSkills = [
    {
        type: "paragraph",
        text: "C++"
    },
    {
        type: "paragraph",
        text: "HTML"
    },
    {
        type: "paragraph",
        text: "CSS"
    }
]
const aryantext = [
    {
        type: "paragraph",
        text: "I find immense joy in playing cricket and indulging in the timeless melodies of old Bollywood songs. Though I once dreamt of entrepreneurship, my focus has shifted towards mastering the craft of software engineering while prioritizing my well-being.",
    },
    {
        type: "paragraph",
        text: "I resonate with the concept of being a 'sakth launda,' where my heart's devotion is solely reserved for that one special person",
    },
]

const aryanSkills = [
    {
        type: "paragraph",
        text: "C++"
    },
    {
        type: "paragraph",
        text: "HTML"
    },
    {
        type: "paragraph",
        text: "CSS"
    },

]

const jayText = [
    {
        type: "paragraph",
        text: "What is my life's worth? This is a question that has been haunting me and has plauged me from the very beginning. Is it my net worth? Or the worth other people assign me? Is it the worth of my work? Is it the strength of my limbs, vigor of youth? Or power that I may weild, wisdom of the old? After years of contemplation, the answer I arrived at is this - ",
    },
    {
        type: "paragraph",
        text: "Eudaimonia: Metric by which I'll judge my life's worth is by the number of people whose lives I've touched.",
    },
]

const jaySkills = [
    {
        type: "paragraph",
        text: "WebDev"
    },
    {
        type: "paragraph",
        text: "AI/ML"
    },
    {
        type: "paragraph",
        text: "Being Helpful"
    },

]

const kunalHobbies = "Hobbies: Eat, Sleep, Repeat";
const aryanHobbies = "Hobbies: Cricket, Music, Sakth Launda";
const jayHobbies = "Hobbies: WebDev, AI/ML, Being Helpful";
const kunalLocation = "From: Indore, Madhya Pradesh";
const aryanLocation = "From: Kanpur, Uttar Pradesh";
const jayLocation = "From: Karad, Satara, Maharashtra";

const location = [jayLocation, aryanLocation, kunalLocation];
const hobbies = [jayHobbies, aryanHobbies, kunalHobbies];
const placeholderText = [jayText, aryantext, kunalText];
const skills = [jaySkills, aryanSkills, kunalSkills];
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
                            hobbies={hobbies[current]}
                            location={location[current]}
                        />
                    </AnimatePresence>
                </div>
                <div className="overflow-hidden col-span-3 h-full bg-white rounded-2xl ">
                    <AnimatePresence mode="wait">
                        <AboutIntro
                            key={sections[current].fontFamily}
                            theme={sections[current].theme}
                            fontFamily={sections[current].fontFamily}
                            placeholderText={placeholderText[current]}
                            skills={skills[current]}

                        />
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default AboutTwo