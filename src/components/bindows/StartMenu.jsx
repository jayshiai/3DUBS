
import Image from 'next/image'
import StartMenuButton from './StartMenuButton'
import { useEffect, useState } from 'react'
import OpenBindowsFrame from './OpenBindowsFrame'
import { GoTriangleRight } from "react-icons/go";
const Divider = () => {
    return (
        <div
            style={{
                background: "linear-gradient(to right, transparent 0%, #aebad6 50%, transparent 100%) center/cover no-repeat"
            }}
            className='h-[1px] w-full my-2'></div>
    )
}

const StartMenu = ({ open, bindows, setBindows }) => {
    const [power, setPower] = useState(false)
    const [standby, setStandby] = useState(false)
    const [openBindows, setOpenBindows] = useState({
        "Internet": {
            open: false,
        },
        "E-mail": {
            open: false,
        },
        "About": {
            open: false,
        },
        "Our Team": {
            open: false,
        },
        "My Projects": {
            open: false,
        },
        "Contact": {
            open: false,
        }
    })

    const handlePowerOff = () => {
        document.body.style.display = "none";
    }
    const handleRestart = () => {
        sessionStorage.setItem('introCompleted', false); // Mark intro as completed in session storage
        window.location.reload(); // Reload the page
    }
    useEffect(() => {
        console.log(openBindows)
    }, [openBindows])

    return (
        <>
            {openBindows["Internet"].open ? <OpenBindowsFrame url='/nav' open={openBindows["Internet"]} text={"Internet"} setOpenBindows={setOpenBindows} bindows={bindows} setBindows={setBindows} /> : null}
            {openBindows["E-mail"].open ? <OpenBindowsFrame url='/contactus' open={openBindows["E-mail"]} text={"E-mail"} subtext={"Contact Us"} setOpenBindows={setOpenBindows} bindows={bindows} setBindows={setBindows} /> : null}
            {openBindows["About"].open ? <OpenBindowsFrame url='/about' open={openBindows["About"]} text={"About"} setOpenBindows={setOpenBindows} bindows={bindows} setBindows={setBindows} /> : null}
            {openBindows["Our Team"].open ? <OpenBindowsFrame url='/crew' open={openBindows["Our Team"]} text={"Our Team"} setOpenBindows={setOpenBindows} bindows={bindows} setBindows={setBindows} /> : null}
            {openBindows["My Projects"].open ? <OpenBindowsFrame url='/projects' open={openBindows["My Projects"]} text={"My Projects"} setOpenBindows={setOpenBindows} bindows={bindows} setBindows={setBindows} /> : null}
            {openBindows["Contact"].open ? <OpenBindowsFrame url='/contactus' open={openBindows["Contact"]} text={"Contact"} setOpenBindows={setOpenBindows} bindows={bindows} setBindows={setBindows} /> : null}


            {standby && (
                <div onClick={() => {
                    setStandby(false)
                    setPower(false)
                }} className='fixed bg-black top-0 z-[99999] h-screen w-screen'></div>
            )}
            <div id='start-menu'
                style={{
                    boxShadow: "2px 6px 10px #333, -2px 0px 5px rgba(20, 20, 20, 0.6) inset, 2px 0px 3px #7fbce8 inset"
                }}
                className={`${open ? "block" : "hidden"} z-0 h-[550px] w-[380px] bg-white absolute left-0 rounded-t-lg bottom-[32px] `}>
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
                        <StartMenuButton image={"/assets/bindows/ie.png"} url='/nav' text={"Internet"} subtext={"Internet Explorer"} openBindows={openBindows} setOpenBindows={setOpenBindows} bindows={bindows} setBindows={setBindows} />
                        <StartMenuButton image={"/assets/bindows/outlook.png"} url='/contactus' text={"E-mail"} subtext={"Contact Us"} openBindows={openBindows} setOpenBindows={setOpenBindows} bindows={bindows} setBindows={setBindows} />

                        <Divider />
                        <div className=' flex-grow'>
                            <StartMenuButton image={"/assets/bindows/about.png"} url='/about' text={"About"} openBindows={openBindows} setOpenBindows={setOpenBindows} bindows={bindows} setBindows={setBindows} />
                            <StartMenuButton image={"/assets/bindows/team.png"} url='/crew' text={"Our Team"} openBindows={openBindows} setOpenBindows={setOpenBindows} bindows={bindows} setBindows={setBindows} />
                            <StartMenuButton image={"/assets/bindows/My Pictures.png"} url='/projects' text={"My Projects"} openBindows={openBindows} setOpenBindows={setOpenBindows} bindows={bindows} setBindows={setBindows} />
                            <StartMenuButton image={"/assets/bindows/outlook.png"} url='/contactus' text={"Contact"} openBindows={openBindows} setOpenBindows={setOpenBindows} bindows={bindows} setBindows={setBindows} />
                        </div>
                        <Divider />
                        <div className='group w-full p-2 flex justify-center gap-2 hover:text-white hover:bg-[#3d64bd] cursor-pointer'>
                            <p className='font-bold'>All Programs</p>
                            <Image src="/assets/bindows/startarrow.png" height={20} width={20} />
                            <div className='hidden group-hover:block h-[300px] w-2/3 bg-white text-black border-l-4 border-[#245edb] absolute bottom-[53.5px] left-[150px]'>
                                <div className='flex items-center justify-between w-full text-sm hover:text-white hover:bg-[#3d64bd]'>
                                    <div className='flex items-center gap-2'><Image src="/assets/bindows/folder.png" height={30} width={30} />
                                        <p>Desktop</p></div>
                                    <div className='text-lg'><GoTriangleRight /></div>
                                </div>
                                <div className='flex items-center justify-between w-full text-sm hover:text-white hover:bg-[#3d64bd]'>
                                    <div className='flex items-center gap-2'><Image src="/assets/bindows/folder.png" height={30} width={30} />
                                        <p>About</p></div>
                                    <div className='text-lg'><GoTriangleRight /></div>
                                </div>
                                <div className='flex items-center justify-between w-full text-sm hover:text-white hover:bg-[#3d64bd]'>
                                    <div className='flex items-center gap-2'><Image src="/assets/bindows/folder.png" height={30} width={30} />
                                        <p>Cursor</p></div>
                                    <div className='text-lg'><GoTriangleRight /></div>
                                </div>
                                <div className='flex items-center justify-between w-full text-sm hover:text-white hover:bg-[#3d64bd]'>
                                    <div className='flex items-center gap-2'><Image src="/assets/bindows/folder.png" height={30} width={30} />
                                        <p>Loading</p></div>
                                    <div className='text-lg'><GoTriangleRight /></div>
                                </div>
                                <StartMenuButton image={"/assets/bindows/ie.png"} url='/nav' text={"Internet"} openBindows={openBindows} setOpenBindows={setOpenBindows} bindows={bindows} setBindows={setBindows} />
                                <StartMenuButton image={"/assets/bindows/outlook.png"} url='/contactus' text={"E-mail"} openBindows={openBindows} setOpenBindows={setOpenBindows} bindows={bindows} setBindows={setBindows} />
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 h-full flex flex-col items-center border-l text-left text-xs border-[#95bdee] bg-[#d3e5fa] p-2 cursor-pointer'>
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
                    className='h-[45px] w-full bg-blue-200 flex items-center justify-end px-4'>
                    <div onClick={() => setPower(true)} className='flex items-center gap-2 text-white cursor-pointer'>
                        <Image src="/assets/bindows/Power.png" height={30} width={30} />
                        <div>Power Off</div>
                    </div>
                </div>
            </div>
            {power && (
                <div className='w-[500px] h-[300px] absolute rounded-2xl bg-[#85bdff] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '>
                    <div
                        style={{
                            boxShadow: "3px 2px 3px #7fbce8 inset",
                            background: 'linear-gradient(to bottom, #245edb 0%, #0c8dea 100%)'
                        }}


                        className='w-full h-[60px] flex justify-between items-center px-4 text-white text-2xl'>
                        <p>Turn Off Computer</p>
                        <Image src="/assets/bindows/logo.png" height={50} width={50} />
                    </div>
                    <div className='w-full h-[180px] flex justify-evenly items-center'>
                        <div onClick={() => setStandby(true)} className='flex flex-col gap-2 text-white items-center cursor-pointer'>
                            <Image src="/assets/bindows/Standby.png" height={50} width={50} />
                            <p>Stand By</p>
                        </div>
                        <div onClick={handlePowerOff} className='flex flex-col gap-2 text-white items-center cursor-pointer'>
                            <Image src="/assets/bindows/Power.png" height={50} width={50} />
                            <p>Turn Off</p>
                        </div>
                        <div onClick={handleRestart} className='flex flex-col gap-2 text-white items-center cursor-pointer'>
                            <Image src="/assets/bindows/Restart.png" height={50} width={50} />
                            <p>Restart</p>
                        </div>

                    </div>
                    <div
                        style={{
                            background: "linear-gradient(to top, #245edb 0%, #0c8dea 100%)"
                        }}


                        className='w-full h-[60px] flex items-center justify-end px-4'>
                        <div onClick={() => setPower(false)} className='bg-white px-2 cursor-pointer'>Cancel</div>
                    </div>
                </div>
            )}
        </>
    )
}

export default StartMenu