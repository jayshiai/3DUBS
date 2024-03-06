"use client"
import React, { useRef, useEffect, useState, use } from 'react';
import { gsap } from 'gsap';
import TextPlugin from 'gsap/dist/TextPlugin';
import Clock from '../contact/Clock';
import { m } from 'framer-motion';

gsap.registerPlugin(TextPlugin)


const EpicIntro = ({ setCompleted }) => {
    const delay = 0.1;

    const changingText = useRef(null);
    const backdropText = useRef(null);
    const myseconds = useRef(null);
    const myClock = useRef(null);
    const [clock, setClock] = useState(true);
    const [animation, setAnimation] = useState(1);
    useEffect(() => {
        const t2 = gsap.timeline();


        t2.to(changingText.current, {
            text: "1",
            duration: 1,
        }).to(myseconds.current, {

            svgOrigin: "70px 70px",
            rotateZ: 360,
            duration: 1,
        }, "-=1")
            .to(changingText.current, {
                text: "2",
                duration: 1,
            })

            .to(myseconds.current, {

                svgOrigin: "70px 70px",
                rotateZ: 720,
                duration: 1,
            }, "-=1")
            .to(changingText.current, {
                text: "3",
                duration: 1,
            })
            .to(myseconds.current, {

                svgOrigin: "70px 70px",
                rotateZ: 1080,
                duration: 1,

            }, "-=1").to(myClock.current, {
                scale: 0,
                duration: 0.8,
                ease: "elastic.in(1,0.5)",
                onComplete: () => { setClock(false) }
            }).to(changingText.current, {
                keyframes: [

                    { text: "3", duration: 0, delay: delay },
                    { text: "तीन", duration: 0, delay: delay },
                    { text: "تین", duration: 0, delay: 0.3 },
                    { text: "ત્રણ", duration: 0, delay: delay },
                    { text: "മൂന്ന്", duration: 0, delay: delay },
                    { text: "דרייַ", duration: 0, delay: delay },
                    { text: "три", duration: 0, delay: delay },
                    { text: "üç", duration: 0, delay: delay },
                    { text: "३", duration: 0, delay: delay },
                    { text: "þrír", duration: 0, delay: 0.4 },
                    { text: "மூன்று", duration: 0, delay: delay },
                    { text: "三", duration: 0, delay: delay },
                    { text: "သုံး", duration: 0, delay: delay },
                    { text: "त्रयः", duration: 0, delay: delay },
                    { text: ":3", duration: 0, delay: 0.3 }

                ],

            }).to(changingText.current, {
                text: ":3",
                duration: 0,
                delay: 0.2
            }).to(changingText.current, {
                rotate: 450,
                duration: 1.5,
                ease: "elastic.out(1,0.5)",
            }).to(changingText.current, {
                rotate: 0,
                duration: 1,
                text: "🤍",
                ease: "elastic.out(1,0.5)",
            }, "-=0.5")
            .to(changingText.current, {
                keyframes: [
                    { scale: 1.2 },
                    { scale: 1, }
                ],
                duration: 0.5,
                ease: "elastic.out(1,0.8)", // Apply an elastic ease
            }).to(backdropText.current, {
                text: "Made",
                scale: 1.5,
                duration: 0,
                delay: 0.5,
                ease: "elastic.out(1,0.5)",
            }, "-=1")
            .to(changingText.current, {
                keyframes: [
                    { scale: 1.2 },
                    { scale: 1, }
                ],
                duration: 0.5,
                ease: "elastic.out(1,0.8)", // Apply an elastic ease
            }).to(backdropText.current, {
                text: "With",
                scale: 1.5,
                duration: 0,
                delay: 0.5,
                ease: "elastic.out(1,0.5)",
            }, "-=1").to(changingText.current, {
                keyframes: [
                    { scale: 1.2 },
                    { scale: 1, }
                ],
                duration: 0.5,
                ease: "elastic.out(1,0.8)", // Apply an elastic ease
            }).to(backdropText.current, {
                text: "Love",
                scale: 1.5,
                duration: 0,
                delay: 0.5,
                ease: "elastic.out(1,0.5)",
            }, "-=1").to(changingText.current, {
                keyframes: [
                    { scale: 1.2 },
                    { scale: 1, }

                ],

                duration: 0.5,
                ease: "elastic.out(1,0.8)", // Apply an elastic ease


            }).to(backdropText.current, {
                text: "by", scale: 1.5,
                duration: 0,
                delay: 0.5,
                ease: "elastic.out(1,0.5)",
            }, "-=1").to(changingText.current, {
                keyframes: [
                    { scale: 1.2 },
                    { scale: 1, }

                ],

                duration: 0.5,
                ease: "elastic.out(1,0.8)", // Apply an elastic ease


            }).to(backdropText.current, {
                text: "DevsTomorrow", scale: 1.25,
                duration: 0,
                delay: 0.5,
                ease: "elastic.out(1,0.5)",
            }, "-=1")
            .to(backdropText.current, {
                text: "",
                duration: 0.2,
            },).to(changingText.current, {
                rotate: 0,
                text: "THE THREE DUBS",
                delay: 0.5,
                ease: "elastic.out(1,0.5)",
                onComplete: () => { setAnimation(2) }
            });






        return () => {
            t2.kill(); // Cleanup when component unmounts
        };
    }, []);

    return (
        <>
            {animation == 1 && (
                <div className='h-screen w-screen raleway  flex justify-center items-center'>
                    {clock && (<div ref={myClock} className='absolute  w-[40%] '><Clock hidden={true} myseconds={myseconds} /></div>)}
                    <div ref={changingText} className={`z-50 ${clock ? "text-white" : "text-black"} bg-transparent text-repeat text-[10vw] `}>0</div>
                    <div ref={backdropText} className='absolute text-[10vw]'></div>
                </div>
            )}

            {animation == 2 && (
                <Animation setCompleted={setCompleted} />
            )}
        </>
    );
};


const Animation = ({ setCompleted }) => {
    const mainText = useRef(null);
    const screen = useRef(null);
    let tl;
    useEffect(() => {
        tl = gsap.timeline();
        // Select all elements with the class 'text-repeat'
        const elements = document.querySelectorAll('.text-repeat');


        // Animation timeline
        tl.to(elements, {
            scale: 1,
            y: (index, target) => {
                const translateYValue = target.getAttribute('translate');
                return translateYValue ? translateYValue : 0;
            },

            duration: 2,
            ease: "elastic.out(1,0.3)"
        }).to(mainText.current, {
            keyframes: [
                { color: '#ff0000' },
                { color: '#00ff00' },
                { color: '#0000ff' },
                { color: '#ff00ff' },
                { color: '#00ffff' },
                { color: '#ffff00' },
                { color: '#fffff0' },
                { color: '#000000' }
            ],
            duration: 1,


        }, "-=1.25")
            .to(elements, {
                y: '0%',
                duration: 1,
                delay: 0.5,
                ease: "elastic.in(1,0.5)"
            }, "-=0.75")
            .to(elements, {
                scaleY: 2,
                color: '#ffffff',
                duration: 0.5,
                backgroundColor: '#000000',
                ease: "elastic.out(1,0.3)"
            }).to(screen.current, {
                backgroundColor: '#000000',
                duration: 0.5,
                ease: "elastic.out(1,0.3)"
            }, "-=0.5").to(elements, {
                opacity: 0,
                duration: 0,
            }).to(mainText.current, {
                opacity: 1,
                duration: 0,
            })




        return () => {
            tl.kill(); // Cleanup when component unmounts

        };
    }, []);

    // Add click event listener to mainText element
    const handleClick = () => {
        tl.to(mainText.current, {
            scale: 50,
            x: '-100%',
            duration: 1,
            ease: "back.in(1)",
            onComplete: () => { setCompleted(true) }
        });
    };
    return (
        <div ref={screen} className='relative h-screen w-screen raleway flex justify-center items-center text-[10vw] font-bold overflow-hidden'>
            <div className='text-repeat text-stroke' translate='-500%'>The three dubs</div>
            <div className='text-repeat text-stroke' translate='-400%'>The three dubs</div>
            <div className='text-repeat text-stroke' translate='-300%'>The three dubs</div>
            <div className='text-repeat text-stroke' translate='-200%'>The three dubs</div>
            <div className='text-repeat text-stroke' translate='-100%'>The three dubs</div>
            <div onClick={handleClick} ref={mainText} className='text-repeat z-50 scale-y-[2] cursor-pointer'>The three dubs</div>
            <div className='text-repeat text-stroke' translate='100%'>The three dubs</div>
            <div className='text-repeat text-stroke' translate='200%'>The three dubs</div>
            <div className='text-repeat text-stroke' translate='300%'>The three dubs</div>
            <div className='text-repeat text-stroke' translate='400%'>The three dubs</div>
            <div className='text-repeat text-stroke' translate='500%'>The three dubs</div>
        </div>
    )
}
export default EpicIntro;
