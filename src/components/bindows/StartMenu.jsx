import React from 'react'
import Image from 'next/image'


const Divider = () => {
    return (
        <div
            style={{
                background: "linear-gradient(to right, transparent 0%, #aebad6 50%, transparent 100%) center/cover no-repeat"
            }}
            className='h-[1px] w-full my-2'></div>
    )
}

const StartMenu = ({ open }) => {
    return (
        <>


            <div id='start-menu'
                style={{
                    boxShadow: "2px 6px 10px #333, -2px 0px 5px rgba(20, 20, 20, 0.6) inset, 2px 0px 3px #7fbce8 inset"
                }}
                className={`${open ? "block" : "hidden"} z-0 h-[550px] w-[380px] bg-white absolute left-0 rounded-t-lg bottom-full overflow-hidden`}>
                <div
                    style={{
                        boxShadow: "3px 2px 3px #7fbce8 inset",
                        background: 'linear-gradient(to bottom, #245edb 0%, #0c8dea 100%)'
                    }}
                    className='h-[65px] w-full flex items-center p-2 gap-2 '>
                    <div
                        style={{
                            boxShadow: "2px 2px 4px #333"
                        }}
                        className=' h-[52px] w-[52px] p-[2px] flex justify-center items-center rounded bg-white'>
                        <Image src="/assets/bindows/profile_pic.jpg" height={50} width={50} />

                    </div>
                    <p className='text-white text-lg'>Administrator</p>
                </div>
                <div className='h-[440px] w-full border border-[#0c8dea] flex '>

                    <div className='w-1/2 h-full flex flex-col   p-2 text-xs  '>
                        <div className='flex gap-1 p-2  hover:text-white hover:bg-[#3d64bd]'>
                            <Image src="/assets/bindows/ie.png" height={30} width={30} />
                            <div>
                                <div className='font-bold'>Internet</div>
                                <div>Internet Explorer</div>
                            </div>
                        </div>
                        <div className='flex gap-1 p-2  hover:text-white hover:bg-[#3d64bd]'>
                            <Image src="/assets/bindows/outlook.png" height={30} width={30} />
                            <div>
                                <div className='font-bold'>E-mail</div>
                                <div>Contact Us</div>
                            </div>
                        </div>
                        <Divider />
                        <div className=' flex-grow'></div>
                        <Divider />
                        <div className='w-full p-2 flex justify-center gap-2 hover:text-white hover:bg-[#3d64bd]'>
                            <p className='font-bold'>All Programs</p>
                            <Image src="/assets/bindows/startarrow.png" height={20} width={20} />
                        </div>
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
        </>
    )
}

export default StartMenu