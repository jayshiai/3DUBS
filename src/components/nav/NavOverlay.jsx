import React, { useEffect, useState } from 'react'
import { motion, useAnimate } from 'framer-motion'
import "./nav.css"
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';
const LogoOverlay = () => {
    const [scope, animate] = useAnimate()
    const [expanded, setExpanded] = useState(false);


    const item = {
        hidden: {
            opacity: 0,
            transform: "translateX(-75%)"
        },
        visible: {
            opacity: 1,
            transform: "translateX(0%)",
            transition: {
                duration: 0.5,
                ease: [0.65, 0.05, 0.36, 1],
            },

        }
    };

    useEffect(() => {
        const expandAnimation = async () => {
            await animate(scope.current, { transform: `scaleY(${window.innerHeight / 80}) scaleX(1)` })
            animate(scope.current, { transform: `translateX(-${window.innerWidth - 80}px) scaleY(${window.innerHeight / 80}) scaleX(${window.innerWidth / 80}) ` })

        }
        const contractAnimation = async () => {
            await animate(scope.current, { transform: `scaleY(${window.innerHeight / 80}) scaleX(1)` })
            await animate(scope.current, { transform: `scaleY(1) scaleX(1)` })

        }
        if (expanded) {
            expandAnimation()
        }
        else {
            contractAnimation()
        }
    }, [expanded])


    return (
        <>
            <div onClick={() => setExpanded(!expanded)} className='z-50 fixed h-[80px] w-[80px] text-4xl flex justify-center items-center top-0 right-0'>
                <RxHamburgerMenu />
            </div>
            <motion.main
                initial='hidden'
                animate={expanded ? 'visible' : 'hidden'}
                transition={{
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                }}
                className={`${expanded ? "pointer-events-auto before:opacity-60" : "pointer-events-none before:opacity-0"} z-40 absolute top-0 min-h-screen w-screen  `}>
                <nav class="menu">
                    <motion.div
                        variants={item}
                        class="menu__item">
                        <Link href={"/"} class="menu__item-link">Home</Link>
                        <img class="menu__item-img" src="img/1.jpg" alt="Some image" />
                        <div class="marquee">
                            <div class="marquee__inner" aria-hidden="true">
                                <span>Home</span>
                                <span>Home</span>
                                <span>Home</span>
                                <span>Home</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={item}
                        class="menu__item">
                        <Link href={"/projects"} class="menu__item-link">Projects</Link>
                        <img class="menu__item-img" src="img/2.jpg" alt="Some image" />
                        <div class="marquee">
                            <div class="marquee__inner" aria-hidden="true">
                                <span>Projects</span>
                                <span>Projects</span>
                                <span>Projects</span>
                                <span>Projects</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={item}
                        class="menu__item">
                        <Link href={"/about"} class="menu__item-link">About</Link>
                        <img class="menu__item-img" src="img/3.jpg" alt="Some image" />
                        <div class="marquee">
                            <div class="marquee__inner" aria-hidden="true">
                                <span>About</span>
                                <span>About</span>
                                <span>About</span>
                                <span>About</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={item}
                        class="menu__item">
                        <Link href={"/crew"} class="menu__item-link">Our Crew</Link>
                        <img class="menu__item-img" src="img/4.jpg" alt="Some image" />
                        <div class="marquee">
                            <div class="marquee__inner" aria-hidden="true">
                                <span>The Crew</span>
                                <span>The Crew</span>
                                <span>The Crew</span>
                                <span>The Crew</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={item}
                        class="menu__item">
                        <Link href={"/contactus"} class="menu__item-link">Contact</Link>
                        <img class="menu__item-img" src="img/5.jpg" alt="Some image" />
                        <div class="marquee">
                            <div class="marquee__inner" aria-hidden="true">
                                <span>Contact</span>
                                <span>Contact</span>
                                <span>Contact</span>
                                <span>Contact</span>
                            </div>
                        </div>
                    </motion.div>
                </nav>

            </motion.main>
            <div
                ref={scope}

                className='h-[80px] w-[80px] fixed top-0 right-0  origin-top-left bg-[#f8ecde] z-10 overflow-hidden'
            >


            </div>
        </>
    )

}
export default LogoOverlay