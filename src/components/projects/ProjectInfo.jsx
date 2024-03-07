import Link from 'next/link'
import React from 'react'

const ProjectInfo = ({ handleClick, index }) => {
    return (
        <div className='fixed top-0 h-screen w-screen flex flex-col justify-between md:w-[40vw] py-[15vh] px-[8vw] grotesk'>
            <div>
                <div className=' font-semibold'>05</div>
                <div className=' text-[4vw] font-medium leading-none mb-10'>Excellence</div>
                <div className=' max-w-[30ch] leading-snug mb-10'>The invisible government tends to be
                    concentrated in the hands of the few
                    because of the expense of manipulating
                    the social machinery which controls the
                    opinions and habits of the masses.</div>

                <Link href={"/circle"} className='font-bold'>Veiw More</Link>
            </div>
            <div onClick={() => handleClick(index)} className=" w-12 stroke-black mt-auto"><svg viewBox="0 0 50 9"><path d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path></svg> </div>
        </div>
    )
}

export default ProjectInfo