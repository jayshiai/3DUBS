import React, { useState, useEffect } from 'react';

const TimeButton = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Update the current time every minute
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once on component mount

    return (
        <div
            style={{
                textShadow: "1px 1px 1px #333",
                boxShadow: "0px 5px 10px #14A5F0 inset, 0px 5px 10px #333333",
                background: "linear-gradient(to bottom, #1290E9 0%, #19B9F3 9%, #1290E9 18%, #1290E9 92%, #1941A5 100%) center/cover no-repeat"
            }}
            className='h-full w-24 flex justify-center items-center text-white'
            title={new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true, year: 'numeric', month: 'long', day: 'numeric' }).format(currentTime)}
        >
            {new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true }).format(currentTime)}
        </div>
    );
};

export default TimeButton;
