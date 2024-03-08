import React from 'react'

const FancyCrewText = ({ theme, fontFamily, text }) => {
    return (
        <div
            style={{
                "--c1": `${theme[0]}`,
                "--c2": `${theme[1]}`,
                "--c3": `${theme[2]}`,
            }}
            className={`${fontFamily} transText transBg h-full flex items-center justify-center`}>
            {text}
        </div>
    )
}

export default FancyCrewText