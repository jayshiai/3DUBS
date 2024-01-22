"use client"

import React, { useState, useRef, useEffect } from 'react'
import gsap from 'gsap';



const filters = [
    (<>
        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="3.2" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7" result="goo" />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
    </>),

    (<>
        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="18" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7" result="goo" />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
    </>
    ),

    (<>
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="turbulence" />
        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="30" xChannelSelector="R" yChannelSelector="G" result="displacement" />
        <feGaussianBlur in="displacement" stdDeviation="10" result="blur" />
        <feColorMatrix
            in="blur"
            mode="matrix"
            values="
						  1 0 0 0 0
						  0 1 0 0 0
						  0 0 1 0 0
						  0 0 0 20 -7"
            result="gooey"
        />
    </>),

    (<>
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix
            in="blur"
            mode="matrix"
            values="
					        1 0 0 0 0
					        0 1 0 0 0
					        0 0 1 0 0
					        0 0 0 20 -7"
            result="gooey"
        />
        <feMorphology in="gooey" operator="dilate" radius="2" result="outline" />
        <feComposite in="outline" in2="gooey" operator="out" result="composite" />
    </>),

    (<>
        <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="1" seed="0" result="turbulence" />
        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="100" xChannelSelector="R" yChannelSelector="G" result="displacement" />
        <feGaussianBlur in="displacement" stdDeviation="5" result="blur" />
        <feColorMatrix
            in="blur"
            mode="matrix"
            values="
					            1 0 0 0 0
					            0 1 0 0 0
					            0 0 1 0 0
					            0 0 0 15 -7"
            result="gooey"
        />
    </>)
]
const GooeyCursor = () => {
    const columns = 30;
    const cellSize = window.innerWidth / columns;
    const rows = Math.ceil(window.innerHeight / cellSize)

    const cells = rows * columns;

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const cellsRef = useRef([]);
    const getCellAtCursor = () => {
        const columnIndex = Math.floor(mousePos.x / cellSize);
        const rowIndex = Math.floor(mousePos.y / cellSize);
        const cellIndex = rowIndex * columns + columnIndex;

        if (cellIndex >= cells || cellIndex < 0) {
            console.error('Cell index out of bounds');
            return null;
        }

        return cellsRef.current[cellIndex];
    }
    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        setMousePos({ x: clientX, y: clientY });
    };


    const clickAnimation = () => {
        gsap.timeline().addLabel('start', 0).to(cellsRef.current, {
            duration: 1,
            ease: 'power4',
            opacity: 1,
            stagger: {
                from: [...cellsRef.current].indexOf(getCellAtCursor()),
                each: 0.02,
                grid: [rows, columns]
            }
        }, 'start').to(
            cellsRef.current, {
            duration: 1,
            ease: 'power1',
            opacity: 0,
            stagger: {
                from: [...cellsRef.current].indexOf(getCellAtCursor()),
                each: 0.03,
                grid: [rows, columns]
            }
        }, 'start+=0.3'
        )
    }
    let cachedCell = null;
    useEffect(() => {
        const cell = getCellAtCursor();
        if (cell === null || cachedCell === cell) return;

        cachedCell = cell;

        gsap.set(cell, { opacity: 1 });
        gsap.set(cell, { opacity: 0, delay: 0.2 })

    }, [mousePos]);
    return (
        <div id="cursor" onClick={clickAnimation} onMouseMove={handleMouseMove} className='h-screen w-screen fixed top-0 left-0 mix-blend-difference'>

            <div id="cursor_inner" className='grid' style={{
                gridTemplateColumns: `repeat(${columns}, ${100 / columns}vw)`,
                filter: `url(#gooey)`,
            }}>

                {Array.from({ length: cells }, (_, index) => (
                    <div key={index} ref={(el) => (cellsRef.current[index] = el)}
                        className="cursor__inner-box opacity-0 bg-[#5cafc1]" style={{ width: `${cellSize}px`, height: `${cellSize}px` }}></div>
                ))}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="gooey">
                        {filters[2]}
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default GooeyCursor