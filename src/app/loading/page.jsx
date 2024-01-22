
"use client"
import React, { useEffect } from 'react'

const page = () => {
    const handleButtonClick = () => {
        if (typeof demo !== 'undefined' && demo.init) {
            demo.init();
        } else {
            console.error('demo.init is not available');
        }
    };

    //length 5
    const settings = [
        {
            rebound: {
                tension: 16,
                friction: 5
            },
            spinner: {
                id: 'spinner',
                radius: 90,
                sides: 3,
                depth: 4,
                colors: {
                    //background: '#231E76',
                    //stroke: '#231E76',
                    background: '#f0f0f0',
                    stroke: '#272633',
                    base: null,
                    child: '#272633'
                },
                alwaysForward: true, // When false the spring will reverse normally.
                restAt: 0.5, // A number from 0.1 to 0.9 || null for full rotation
                renderBase: false
            }
        },
        {
            rebound: {
                tension: 14,
                friction: 10
            },
            spinner: {
                id: 'spinner',
                radius: 90,
                sides: 5,
                depth: 8,
                colors: {
                    background: '#00272C',
                    stroke: null,
                    base: null,
                    child: '#02C39A'
                },
                alwaysForward: true, // When false the spring will reverse normally.
                restAt: null, // A number from 0.1 to 0.9 || null for full rotation
                renderBase: false
            }
        },
        {
            rebound: {
                tension: 10,
                friction: 7
            },
            spinner: {
                id: 'spinner',
                radius: 160,
                sides: 8,
                depth: 6,
                colors: {
                    background: '#181818',
                    stroke: '#D23232',
                    base: null,
                    child: '#181818'
                },
                alwaysForward: true, // When false the spring will reverse normally.
                restAt: null, // A number from 0.1 to 0.9 || null for full rotation
                renderBase: false
            }
        },
        {
            rebound: {
                tension: 1,
                friction: 3
            },
            spinner: {
                radius: 90,
                sides: 5,
                depth: 4,
                colors: {
                    background: '#91A7D0',
                    stroke: null, //'#231E76',
                    base: null, //'#403F6F',
                    child: '#F6CAC9'
                },
                alwaysForward: true, // When false the spring will reverse normally.
                restAt: 0.8, // A number from 0.1 to 0.9 || null for full rotation
                renderBase: true
            }
        },
        {
            rebound: {
                tension: 2,
                friction: 7
            },
            spinner: {
                id: 'spinner',
                radius: 200,
                sides: 3,
                depth: 9,
                colors: {
                    background: '#f0f0f0',
                    stroke: null,
                    base: '#222',
                    child: '#f0f0f0'
                },
                alwaysForward: true, // When false the spring will reverse normally.
                restAt: null, // A number from 0.1 to 0.9 || null for full rotation
                renderBase: true
            }
        },

    ]


    // Load loader.js script and pass SETTINGS to it
    useEffect(() => {
        window.SETTINGS = settings[3];
        const script = document.createElement('script');
        script.src = './js/loader.js';

        document.body.appendChild(script);

        // Cleanup function to remove the script element on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <div>
            <div class="content">
                <button class="button button--trigger" onClick={handleButtonClick}>Show Loader</button>
            </div>

        </div>
    )
}

export default page