"use client"
import AnimatedTextCharacter from '@/components/AnimatedTextCharacter'
import { motion, useScroll } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const page = () => {
    const { scrollYProgress } = useScroll();


    const handRef = useRef(null);
    const handTextRef = useRef(null);
    const godTextRef = useRef(null);
    const adamsHandRef = useRef(null);
    const godsHandRef = useRef(null);
    const roseRef = useRef(null);
    const threeDubsRef = useRef(null);
    const threeRef = useRef(null);
    const dubsRef = useRef(null);
    const screenRef = useRef(null);
    const [tomorrowState, setTomorrowState] = useState('initial')
    // Function to generate a random vibrant color


    const locomotiveScroll = new LocomotiveScroll();
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
        const rose = roseRef.current;
        const three = threeRef.current;
        const dubs = dubsRef.current;
        const threeDubs = threeDubsRef.current;
        const screen = screenRef.current;
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
            ease: 'none',
            scrollTrigger: {
                trigger: handText,
                start: 'top top', // when the top of the hand hits the bottom of the viewport
                end: '+=200%', // when the bottom of the hand hits the top of the viewport
                scrub: true, // smooth scrubbing effect




            },

        });

        gsap.to(godText, {
            y: '200%',
            ease: 'none',
            scrollTrigger: {
                trigger: godText,
                start: 'top top', // when the top of the hand hits the bottom of the viewport
                end: '+=200%', // when the bottom of the hand hits the top of the viewport
                scrub: true, // smooth scrubbing effect

            },


        });

        gsap.to(rose, {
            y: '100%',
            scale: 1,
            rotate: 360,
            ease: 'none',
            scrollTrigger: {
                trigger: adamsHand,
                start: 'top top', // when the top of the hand hits the bottom of the viewport
                end: '+=100%', // when the bottom of the hand hits the top of the viewport
                scrub: true, // smooth scrubbing effect

            },
        });

        gsap.to(threeDubs, {
            y: '300%',
            ease: 'none',
            scrollTrigger: {
                trigger: threeDubs,
                start: 'top top', // when the top of the hand hits the bottom of the viewport
                end: '+=300%', // when the bottom of the hand hits the top of the viewport
                scrub: true, // smooth scrubbing effect

            },


        });

        gsap.to(three, {
            x: '0%',
            opacity: 1,
            ease: "elastic.inOut(1,0.75)",
            scrollTrigger: {
                trigger: adamsHand,
                start: 'bottom+=30% top', // when the top of the hand hits the bottom of the viewport
                toggleActions: 'restart none none reverse',

            },
        });

        gsap.to(screen, {
            x: '-67.5%',
            ease: "elastic.inOut(1,0.75)",
            scrollTrigger: {
                trigger: adamsHand,
                start: 'bottom+=30% top', // when the top of the hand hits the bottom of the viewport
                toggleActions: 'restart none none reverse',

            },
        });

        gsap.to(dubs, {
            x: '0%',
            ease: "elastic.inOut(1,0.75)",

            scrollTrigger: {
                trigger: adamsHand,
                start: 'bottom+=30% top', // when the top of the hand hits the bottom of the viewport
                toggleActions: 'restart none none reverse',

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
    const excellence = {
        hidden: {
            y: '100%',
        },
        visible: {
            y: '0%',
            transition: {
                duration: 0.5,

                ease: [0.68, -0.55, 0.27, 1.55]
            }
        }
    }
    return (
        <>
            <motion.div
                className='fixed z-50 right-4 bottom-4 h-5 w-24 flex justify-center items-center rounded-lg bg-slate-100  overflow-hidden'>
                <motion.div
                    style={{ scaleX: scrollYProgress }}
                    className='absolute h-8 w-28 -z-10 bg-green-600 origin-left'></motion.div>
                <p className=' text-slate-100 z-10 text-sm'>Best Buds</p>
            </motion.div>

            {/* <div className='fixed top-[40vh]   left-[20vw]  h-[50%] text-[300px] opacity-10 ave flex justify-center items-center   select-none pointer-events-none -z-10'>1</div>
            <div className='fixed top-[40vh]   right-24 h-[50%] text-[300px] opacity-10 ave flex justify-center items-center   select-none pointer-events-none -z-10'>2</div> */}
            <div className='h-[calc(100vh-80px)] w-screen border-y grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 my-10   '>
                <div className='flex flex-col  border-r '>
                    <section className='h-auto flex flex-col bg-white'>
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
                    <div className='text-[50vh]  grow hidden md:flex justify-center items-center ave opacity-5'>1</div>
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

            <div ref={handTextRef} className=' relative h-screen w-full text-red-600   flex flex-col items-center justify-center text-[clamp(50px,15vw,250px)] leading-none raleway   -z-10  overflow-hidden'>
                <motion.div

                    animate={{
                        y: ['-10px', "10px"],
                        transition: {
                            duration: 1,
                            ease: [0.46, 0.03, 0.52, 0.96],
                            repeat: Infinity,
                            repeatType: 'reverse',

                        }
                    }}
                    className='hidden z-10 h-[400px] lg:h-[500px] aspect-[4/5] sm:flex justify-center items-center text-5xl  lg:text-6xl p-8 tracking-tight text-sky-600 rounded-xl absolute right-10 top-16 bg-white border-2 border-black'>
                    <p > Grasping for Eminence through grit and grace</p>
                    <div className='absolute text-[700px] -translate-y-14 -z-10 text-black/5'>2</div>
                </motion.div>
                <motion.div
                    whileInView="visible"
                    exit="hidden"
                    className='w-full border-b  border-black/10 overflow-hidden'>
                    <motion.p
                        initial={{
                            y: '100%'
                        }}
                        variants={excellence}
                    >Striving</motion.p>
                </motion.div>
                <motion.div
                    whileInView="visible"
                    exit="hidden"
                    className='w-full border-b border-black/10  overflow-hidden'>
                    <motion.p
                        initial={{
                            y: '100%'
                        }}
                        variants={excellence}
                    >For</motion.p>
                </motion.div>
                <motion.div
                    whileInView="visible"
                    exit="hidden"
                    className='w-full border-b border-black/10  overflow-hidden'>
                    <motion.p
                        initial={{
                            y: '100%'
                        }}
                        variants={excellence}
                    >Excellence</motion.p>
                </motion.div>

            </div>



            <div className=' h-[200vh] relative w-screen overflow-hidden'>

                <div ref={handRef} className='relative will-change-transform flex items-end justify-center w-screen  h-screen'>


                    <Image fill={true} src={"/assets/hand.png"} className=' -z-10 translate-y-[10%] md:translate-y-0 object-contain' />
                </div>

            </div>

            <div className='h-[400vh] w-screen relative'>
                <div ref={godTextRef} className='will-change-transform h-screen w-full text-green-600 flex flex-col items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl raleway   overflow-hidden'>
                    <div className='relative text-center before:content-["Through"] before:absolute before:top-[-20px] before:left-0 before:text-base after:content-["we_grow!"] after:absolute after:bottom-[-20px] after:right-0 after:text-base'>Collaboration and Cooperation</div>
                </div>

                <div className='h-[200vh] w-screen flex overflow-hidden'>
                    <div ref={adamsHandRef} className='will-change-transform relative h-screen -translate-x-[100%]  w-[50vw]'>
                        <Image fill={true} src={"/assets/adams_hand.webp"} className='object-contain ' />
                    </div>

                    <div ref={godsHandRef} className='will-change-transform relative h-screen translate-x-[100%]  w-[50vw]'>
                        <Image fill={true} src={"/assets/gods_hand.webp"} className=' object-contain ' />
                    </div>
                    <div ref={roseRef} className='will-change-transform  h-screen w-screen flex justify-center items-center scale-0 absolute -z-10'>
                        <div className='relative h-1/2 w-1/2'>
                            <Image fill={true} src={"/assets/rose.png"} className=' object-contain' />
                        </div>
                    </div>
                </div>
                <div ref={threeDubsRef} className='will-change-transform absolute -z-20 top-0 h-screen w-screen flex justify-center items-center overflow-hidden '>
                    <div ref={screenRef} className='absolute h-screen w-[70vw] bg-white z-0 -left-[10vw] top-0'></div>
                    <div className='flex'>
                        <div ref={threeRef} className='ave text-[30vw] leading-none z-10 translate-x-[37.5vw] opacity-10'>3</div>
                        <div ref={dubsRef} className='ave text-[30vw] -z-10 -translate-x-[50vw] leading-none'>DUBS</div>
                    </div>
                </div>
            </div>






        </>
    )
}

export default page
