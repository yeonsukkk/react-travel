import bgTravel from './img/bg/bg_web.jpg'

const Side = () => {
    return(
        <div id="desktop">
            <h2><i>T</i>ravel</h2>
            <p><img src={bgTravel} alt="여행이미지" /></p>
            {/* <div className="qr">
                <img src="" alt="QR코드" />
                <p>모바일에서 확인하세요~!</p>
            </div> */}
        </div>
    )
}

export default Side;