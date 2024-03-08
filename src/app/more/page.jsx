import React from 'react'
import Link from 'next/link'
const page = () => {
    return (
        <div className='h-screen w-screen flex flex-col text-[4vmin] text-center justify-center items-center'>

            <p>Sorry, as I said, we have no projects yet that we would like to show you. But we are working on it.</p>
            <p>While you wait, admire these AI images</p>
            <Link href={"/projects"}>
                <div className=" w-24 h-6 flex mt-10 items-center stroke-black "><svg viewBox="0 0 50 9"><path d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path></svg> </div>
            </Link>

        </div>
    )
}

export default page