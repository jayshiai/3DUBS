
const ParticleTunnel = () => {
    return (
        <>
            <div className='h-screen w-screen absolute top-0 left-0 '>
                <canvas id="scene"></canvas>
            </div>
            <script src='./js/three.min.js'></script>
            <script src='./js/TweenMax.min.js'></script>
            <script src='./js/particleTunnel.js'></script></>
    )
}

export default ParticleTunnel