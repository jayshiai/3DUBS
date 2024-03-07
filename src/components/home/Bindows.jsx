"use client"
import DesktopIcon from '@/components/bindows/DesktopIcon'
import StartButton from '@/components/bindows/StartButton'
import StartMenu from '@/components/bindows/StartMenu'
import TaskButton from '@/components/bindows/TaskButton'
import TimeButton from '@/components/bindows/TimeButton'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Bindows = ({ completed }) => {
    const [open, setOpen] = useState(false)
    const [bindows, setBindows] = useState({})
    const pathname = usePathname()

    return (
        <div className='h-screen w-screen overflow-hidden '>
            <div onClick={() => setOpen(false)} id='screen' className=' h-[calc(100vh-32px)] bg-[url("/assets/bindows/windows_xp_bliss.jpg")] bg-cover'>

                <DesktopIcon url='/nav' image="/assets/bindows/my_computer.png" text="My Computer" bindows={bindows} setBindows={setBindows} />
                <DesktopIcon url='/about' image="/assets/bindows/about.png" text="About us" bindows={bindows} setBindows={setBindows} />
                <DesktopIcon url='/crew' image="/assets/bindows/team.png" text="Our Crew" bindows={bindows} setBindows={setBindows} />
                <DesktopIcon url='/projects' image="/assets/bindows/My Pictures.png" text="Projects" bindows={bindows} setBindows={setBindows} />
                <DesktopIcon url='/contactus' image="/assets/bindows/outlook.png" text="Contact Us" bindows={bindows} setBindows={setBindows} />
                <DesktopIcon url={pathname == "/bindows" ? '/bindows2' : '/bindows'} image="/assets/bindows/logo.png" text="Bindows Emulator" bindows={bindows} setBindows={setBindows} />
            </div>
            <div className='relative'>
                <StartMenu open={open} />
                <div id='taskbar' className='relative h-8 w-full flex' style={{
                    background: 'linear-gradient(to bottom, #245edb 0%, #3f8cf3 9%, #245edb 18%, #245edb 92%, #333 100%) center/cover no-repeat'
                }}>

                    <StartButton open={open} setOpen={setOpen} />
                    <div className='ml-4 flex-grow flex'>
                        {bindows && Object.keys(bindows).map((key, index) => {
                            return <TaskButton key={index} text={bindows[key].title} image={bindows[key].image} selected={bindows[key].selected} setBindows={setBindows} />
                        })}

                    </div>
                    <TimeButton />
                </div>
            </div>

        </div >
    )
}

export default Bindows