import React, { useEffect, useState } from 'react'
import { motion, useAnimate } from 'framer-motion'
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
                delay: 0.25,
                duration: 0.5,
                ease: [0.65, 0.05, 0.36, 1],
            },

        }
    };

    useEffect(() => {
        const expandAnimation = async () => {
            await animate(scope.current, { transform: `scaleY(${window.innerHeight / 80}) scaleX(1)` })
            animate(scope.current, { transform: `scaleY(${window.innerHeight / 80}) scaleX(${window.innerWidth / 80})` })

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
        <motion.div
            initial='hidden'
            animate={expanded ? 'visible' : 'hidden'}
            className={`${expanded ? "pointer-events-auto" : "pointer-events-none"}  cursor-default fixed top-0 left-0 h-screen w-screen flex flex-col md:grid grid-cols-4 grid-rows-[40%_60%] z-20 text-white p-8`}>

            <div
                style={{
                    "--c1": "#AAAAAA",
                    "--c2": "#FFFFFF",
                    "--c3": "#555555",
                }}
                onClick={() => setExpanded(!expanded)}
                id='logo' className='transText transBg delay-500 h-[80px] w-[80px] absolute top-0 left-0 text-xl flex justify-center items-center ave pointer-events-auto cursor-crosshair'>3DUBS</div>
            <div></div>
            <motion.div

                variants={item}
                id='philosophy' className=' hidden md:block  text-right text-xs tracking-normal leading-4 font-mono '>
                <div className='font-mono font-bold tracking-widest text-xl'> <span className=''>{'>> '}</span> philosophy <span className=''>{' <<'}</span></div>
                <p className='mt-3'>We try to strive for excellence and grasp eminence through grit and grace. Our motto - मम कार्यं मम स्तुतिः।</p>
                <p className='mt-3'>We believe that, it is only cooperation and collaboration that can drive true growth. Ad astra, per aspera.</p>
            </motion.div>
            <div></div>
            <motion.div

                variants={item}
                id='about' className='mt-8 md:mt-0 text-center  md:text-right text-xs tracking-normal leading-4 font-mono '>
                <div className='hidden md:block font-mono font-bold tracking-widest text-xl'> <span className=''>{'>> '}</span> about <span className=''>{' <<'}</span></div>
                <p className='mt-3'>We are the WebDev wing under <span className='grotesk font-bold'>DevsTomorrow</span>, focused on fostering creative and innovative individuals to promote learning and collaboration while creating meaningful experiences and tools.</p>

            </motion.div>
            <motion.div

                variants={item}
                id='github' className='hidden md:flex font-mono  items-end'>
                github
            </motion.div>
            <motion.div

                variants={item}
                id='intro' className='mt-16 md:mt-0 h-[50vh] flex flex-col text-right  justify-between '>
                <div >
                    <div
                        style={{
                            "--c1": "#AAAAAA",
                            "--c2": "#FFFFFF",
                            "--c3": "#555555",
                        }}
                        className='transText transBg  ave text-5xl'>The Three Dubs</div>
                    <div className='font-bold font-mono leading-4'>A DevsTomorrow</div>
                    <div className=' font-mono leading-4    '>initiative</div>
                </div>
                <div onClick={() => setExpanded(false)} className='text-center md:text-right font-mono font-thin text-red-600 cursor-not-allowed'>close</div>
            </motion.div>
            <div className=''></div>
            <motion.div

                variants={item}
                id='socials' className='flex flex-col justify-between text-right font-mono'>
                <div className='' style={{ writingMode: "vertical-rl" }}>R433.F4, Hostel, IIIT Nagpur, 441108 </div>
                <div className='flex justify-center md:justify-end'>
                    <div className='block md:hidden'>github</div>
                    <div className='ml-5'>instgram</div>
                    <div className='ml-5'>linkedin</div>
                </div>
            </motion.div>
            <div
                ref={scope}

                className='h-[80px] w-[80px] top-0 left-0  origin-top-left bg-black absolute -z-10'
            ></div>
        </motion.div>
    )

}
export default LogoOverlay