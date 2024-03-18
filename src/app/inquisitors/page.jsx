import React from 'react'
import FancyCrewText from "@/components/crew/FancyCrewText";

const page = () => {
    const theme = ["#1d4ed8", "#3d6bec", "#07abff"]
    return (
        <>


            <div className='h-screen w-screen flex text-[15vw] justify-center items-center'>
                <FancyCrewText theme={theme} fontFamily={"splash"} text={"Inquisitors"} />
            </div>

            <div className='h-screen w-screen flex text-[15vw] justify-center items-center'>
                <FancyCrewText theme={theme} fontFamily={"vujahday"} text={"Inquisitors"} />
            </div>
            <div className='h-screen w-screen flex text-[10vw] justify-center items-center font-bold'>
                <FancyCrewText theme={theme} fontFamily={"syncopate"} text={"Inquisitors"} />
            </div>

            <div className='h-screen w-screen flex text-[15vw] justify-center items-center'>
                <FancyCrewText theme={theme} fontFamily={"julius"} text={"Inquisitors"} />
            </div>
        </>
    )
}

export default page