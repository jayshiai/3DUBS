import Image from 'next/image'
import React from 'react'

const Divider = () => {
    return (
        <div
            style={{
                background: "linear-gradient(to right, transparent 0%, #aebad6 50%, transparent 100%) center/cover no-repeat"
            }}
            className='h-[1px] w-full my-2'></div>
    )
}
const page = () => {
    return (
        <div className='h-screen w-screen overflow-hidden '>
            <div id='screen' className=' h-[calc(100vh-32px)] bg-[url("/assets/bindows/windows_xp_bliss.jpg")] bg-cover'></div>
            <div className='relative'>
                <div id='start-menu'
                    style={{
                        boxShadow: "2px 6px 10px #333, -2px 0px 5px rgba(20, 20, 20, 0.6) inset, 2px 0px 3px #7fbce8 inset"
                    }}
                    className='z-0 h-[550px] w-[380px] bg-white absolute left-0 rounded-t-lg bottom-full overflow-hidden'>
                    <div
                        style={{
                            boxShadow: "3px 2px 3px #7fbce8 inset",
                            background: 'linear-gradient(to bottom, #245edb 0%, #0c8dea 100%)'
                        }}
                        className='h-[65px] w-full '></div>
                    <div className='h-[440px] w-full border border-[#0c8dea] flex '>

                        <div className='w-1/2 h-full flex flex-col   p-4 text-xs  '>
                            <div className='flex gap-1 p-2  hover:text-white hover:bg-[#3d64bd]'>
                                <Image src="/assets/bindows/ie.png" height={30} width={30} />
                                <div>
                                    <div className='font-bold'>Internet</div>
                                    <div>Internet Explorer</div>
                                </div>
                            </div>
                            <div className='flex gap-1 p-2  hover:text-white hover:bg-[#3d64bd]'>
                                <Image src="/assets/bindows/ie.png" height={30} width={30} />
                                <div>
                                    <div className='font-bold'>Internet</div>
                                    <div>Internet Explorer</div>
                                </div>
                            </div>
                            <Divider />
                        </div>
                        <div className='w-1/2 h-full flex flex-col items-center border-l text-left text-xs border-[#95bdee] bg-[#d3e5fa] p-2'>
                            <div className='h-9 w-full pl-10 flex items-center font-bold hover:text-white hover:bg-[#3d64bd]'>My Computer</div>
                            <Divider />
                            <div className='h-9 w-full pl-10 flex items-center  hover:text-white hover:bg-[#3d64bd]'>Control Panel</div>
                            <div className='h-9 w-full pl-10 flex items-center  hover:text-white hover:bg-[#3d64bd]'>Printers and Faxes</div>
                            <Divider />
                            <div className='h-9 w-full pl-10 flex items-center  hover:text-white hover:bg-[#3d64bd]'>Control Panel</div>
                            <div className='h-9 w-full pl-10 flex items-center  hover:text-white hover:bg-[#3d64bd]'>Control Panel</div>

                        </div>
                    </div>
                    <div
                        style={{
                            boxShadow: "-2px -2px 5px rgba(20, 20, 20, 0.6) inset",
                            background: "linear-gradient(to top, #245edb 0%, #0c8dea 100%)"
                        }}
                        className='h-[45px] w-full bg-blue-200'></div>
                </div>
                <div id='taskbar' className='relative h-8 w-full' style={{
                    background: 'linear-gradient(to bottom, #245edb 0%, #3f8cf3 9%, #245edb 18%, #245edb 92%, #333 100%) center/cover no-repeat'
                }}>

                    <div className='z-10 w-24 h-full rounded-r-xl text-xl italic text-white flex justify-center items-center gap-1 skew-x-3 pr-4 '
                        style={{
                            textShadow: "1px 1px 1px #333",
                            boxShadow: "0px 5px 10px #79ce71 inset",
                            background: 'radial-gradient(circle, #5eac56 0%, #3c873c 100%) center/cover no-repeat'
                        }}
                    >
                        <Image src="/assets/bindows/logo.png" height={20} width={20} />
                        <p>start</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page