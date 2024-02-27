"use client"
import AnimatedTextCharacter from '@/components/AnimatedTextCharacter'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const page = () => {
    const handRef = useRef(null);
    const handTextRef = useRef(null);
    const godTextRef = useRef(null);
    const adamsHandRef = useRef(null);
    const godsHandRef = useRef(null);
    const [tomorrowState, setTomorrowState] = useState('initial')
    // Function to generate a random vibrant color
    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    useEffect(() => {
        const hand = handRef.current;
        const handText = handTextRef.current;
        const godText = godTextRef.current;
        const adamsHand = adamsHandRef.current;
        const godsHand = godsHandRef.current;

        gsap.to(hand, {
            y: '200%',
            ease: 'none',
            scrollTrigger: {
                trigger: hand,
                start: 'top top', // when the top of the hand hits the bottom of the viewport
                end: 'bottom top', // when the bottom of the hand hits the top of the viewport
                scrub: true, // smooth scrubbing effect


            },
            onComplete: () => { hand.style.transform = "translateY(0%)"; }
        });

        gsap.to(adamsHand, {
            y: '100%',
            x: '-10%',
            ease: 'none',
            scrollTrigger: {
                trigger: adamsHand,
                start: 'top top', // when the top of the hand hits the bottom of the viewport
                end: '+=100%', // when the bottom of the hand hits the top of the viewport
                scrub: true, // smooth scrubbing effect



            },

        });

        gsap.to(godsHand, {
            y: '100%',
            x: '15%',
            ease: 'none',
            scrollTrigger: {
                trigger: godsHand,
                start: 'top top', // when the top of the hand hits the bottom of the viewport
                end: '+=100%', // when the bottom of the hand hits the top of the viewport
                scrub: true, // smooth scrubbing effect


            },

        });

        gsap.to(handText, {
            y: '200%',
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: handText,
                start: 'top top', // when the top of the hand hits the bottom of the viewport
                end: '+=200%', // when the bottom of the hand hits the top of the viewport
                scrub: true, // smooth scrubbing effect




            },
            onComplete: () => { handText.style.opacity = 0; }

        });

        gsap.to(godText, {
            y: '200%',
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: godText,
                start: 'top top', // when the top of the hand hits the bottom of the viewport
                end: '+=200%', // when the bottom of the hand hits the top of the viewport
                scrub: true, // smooth scrubbing effect
                markers: true

            },


        });
    }, []);


    // Generate a list of 10 vibrant random colors between white
    const vibrantColors = Array.from({ length: 10 }, generateRandomColor);
    const tomorrow = {
        varied: {
            color: ['#000000', ...vibrantColors, '#000000'],
            transition: {
                duration: 2, // total duration of the color animation
                ease: [1, 0, 1, -0.87], // transition easing
                repeat: Infinity, // repeat the animation infinitely
            }

        },
        constant: {
            color: '#000000'

        },
        initial: {
            color: ['#000000', ...vibrantColors, '#000000'],
            transition: {
                duration: 2, // total duration of the color animation
                ease: [1, 0, 1, -0.87], // transition easing
                delay: 2
            }

        }
    }
    return (
        <>

            {/* <div className='fixed top-[40vh]   left-[20vw]  h-[50%] text-[300px] opacity-10 ave flex justify-center items-center   select-none pointer-events-none -z-10'>1</div>
            <div className='fixed top-[40vh]   right-24 h-[50%] text-[300px] opacity-10 ave flex justify-center items-center   select-none pointer-events-none -z-10'>2</div> */}
            <div className='h-[calc(100vh-80px)] w-screen border-y grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 mt-10   '>
                <div className='flex flex-col  border-r '>
                    <section className='h-auto bg-white'>
                        <div className='w-full  flex  items-end border-b px-4 text-4xl lg:text-5xl xl:text-7xl uppercase raleway bg-white'>
                            <AnimatedTextCharacter text="The Three Dubs," delay={0} stagger={0.05} yOffset={"80vh"} />
                        </div>
                        <div className='w-full px-4 border-b texl-xl xl:text-2xl lowercase rockSalt text-right bg-white'>
                            <AnimatedTextCharacter text="The Web Dev Wing under ->" delay={1} stagger={0.025} yOffset={50} />
                        </div>
                        <div className='w-full border-b '>
                            <motion.div
                                initial={{
                                    x: '-100%',
                                }}
                                animate={{
                                    x: '0%',
                                    transition: {
                                        delay: 2,
                                        duration: 0.25,

                                    }
                                }}

                                className='w-fit px-4 text-5xl xl:text-7xl raleway bg-white '>
                                <motion.span className='text-stroke  cursor-progress'
                                    onHoverStart={() => setTomorrowState('varied')}
                                    onHoverEnd={() => setTomorrowState('constant')}
                                >Devs</motion.span><motion.span
                                    onHoverStart={() => setTomorrowState('varied')}
                                    onHoverEnd={() => setTomorrowState('constant')}
                                    variants={tomorrow}
                                    initial="initial"
                                    animate={tomorrowState}
                                    className=' cursor-progress'
                                >Tomorrow</motion.span>
                            </motion.div>
                        </div>

                    </section>
                    <div className='flex items-center justify-center md:hidden  h-[calc(100%-115px)] w-full bg-white'>
                        <div className=' ave text-[25vmin] opacity-10 tracking-tighter z-0 select-none pointer-events-none' >3DUBS</div>
                    </div>


                </div>
                <div className='relative flex flex-col h-full justify-end  overflow-hidden'>

                    <div className='hidden md:block absolute h-full w-full  bg-white'>
                        <div className='sticky top-0 w-full h-1/2 flex justify-center items-center ave text-[125px] lg:text-[150px] xl:text-[200px] opacity-10 tracking-tighter z-0 select-none pointer-events-none' >3DUBS</div>
                    </div>

                    <div className='h-full md:h-1/2 bg-white z-0 text-right raleway'>
                        <div className='w-full h-[15%] flex items-center border-y px-4 text-4xl  uppercase '>
                            <AnimatedTextCharacter text="Members" delay={0} stagger={0.05} yOffset={"80vh"} />
                        </div>
                        <div className='w-full min-h-[20%] border-b '>
                            <motion.div
                                initial={{
                                    x: '100%',
                                }}
                                animate={{
                                    x: '0%',
                                    transition: {
                                        delay: 2,
                                        duration: 0.25,

                                    }
                                }}
                                className='hover:bg-black hover:text-white cursor-pointer px-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl '>
                                Jayvardhan Patil
                            </motion.div>
                        </div>
                        <div className='w-full  min-h-[20%] border-b '>
                            <motion.div
                                initial={{
                                    x: '100%',
                                }}
                                animate={{
                                    x: '0%',
                                    transition: {
                                        delay: 2,
                                        duration: 0.25,

                                    }
                                }}
                                className='hover:bg-red-600 hover:text-blue-600 cursor-pointer px-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl '>
                                Aryan Singh
                            </motion.div>
                        </div>

                        <div className='w-full  min-h-[20%] border-b '>
                            <motion.div
                                initial={{
                                    x: '100%',
                                }}
                                animate={{
                                    x: '0%',
                                    transition: {
                                        delay: 2,
                                        duration: 0.25,

                                    }
                                }}
                                className='hover:bg-blue-600 hover:text-yellow-200 cursor-pointer px-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl '>
                                Kunal Sharma
                            </motion.div>
                        </div>
                        <div className='w-full  relative h-[25%]'>
                            <Image fill={true} src={"/assets/stripes.png"} className='opacity-10 object-cover' />
                        </div>
                    </div>


                </div>
            </div>

            <div ref={handTextRef} className='h-screen w-full text-red-600 flex flex-col items-center justify-center text-6xl sm:text-8xl md:text-9xl raleway opacity-0  -z-10  overflow-hidden'>
                <div>Striving</div>
                <div>For</div>
                <div>Excellence</div>
            </div>

            <div className=' h-[200vh] relative w-screen overflow-hidden'>

                <div ref={handRef} className='relative flex items-end justify-center w-screen  h-screen'>


                    <Image fill={true} src={"/assets/hand.png"} className=' -z-10 translate-y-[10%] md:translate-y-0 object-contain' />
                </div>

            </div>
            <div ref={godTextRef} className='h-screen w-full text-green-600 flex flex-col items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl raleway opacity-0   overflow-hidden'>
                <div className='text-center'>Collaboration and Cooperation</div>
                {/* <div>and</div>
                <div>Cooperation</div> */}


            </div>

            <div className='h-[200vh] w-screen flex overflow-hidden'>
                <div ref={adamsHandRef} className='relative h-screen -translate-x-[100%]  w-[50vw]'>
                    <Image fill={true} src={"/assets/adams_hand.webp"} className='object-contain ' />
                </div>

                <div ref={godsHandRef} className='relative h-screen translate-x-[100%]  w-[50vw]'>
                    <Image fill={true} src={"/assets/gods_hand.webp"} className=' object-contain ' />
                </div>
            </div>
            <div className='h-screen'></div>





        </>
    )
}

export default page
