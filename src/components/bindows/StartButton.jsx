
import Image from 'next/image'
const StartButton = ({ open, setOpen }) => {

    return (
        <div onClick={() => setOpen(!open)} className='z-10 w-24 h-full rounded-r-xl text-xl italic text-white flex justify-center items-center gap-1 skew-x-3 pr-4 cursor-pointer'
            style={{
                textShadow: "1px 1px 1px #333",
                boxShadow: open ? "0px 0px 15px #333 inset" : "0px 5px 10px #79ce71 inset",
                background: 'radial-gradient(circle, #5eac56 0%, #3c873c 100%) center/cover no-repeat'
            }}
        >
            <Image src="/assets/bindows/logo.png" height={20} width={20} />
            <p>start</p>
        </div>
    )
}

export default StartButton