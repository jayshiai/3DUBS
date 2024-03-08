import React from 'react'
import BindowsFrame from './BindowsFrame'
const OpenBindowsFrame = ({ open, url, text, setOpenBindows, bindows, setBindows }) => {
    return (
        <>
            {open ? <BindowsFrame url={url} text={text} setOpenBindows={setOpenBindows} bindows={bindows} setBindows={setBindows} /> : null}
        </>
    )
}

export default OpenBindowsFrame