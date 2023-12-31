
const TraingleTunnel = () => {
    return (
        <>
            <div className='h-screen w-screen absolute top-0 left-0 '>
                <canvas id="scene"></canvas>
            </div>
            <script src='./js/three.min.js'></script>
            <script src='./js/perlin.js'></script>
            <script src='./js/triangleTunnel.js'></script>
        </>
    )
}

export default TraingleTunnel