
import {Swiper, SwiperSlide} from "swiper/react";
import { EffectFade } from 'swiper';
import SwiperCore, { Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/effect-fade';
import { useCallback, useEffect, useState } from "react";

SwiperCore.use([Autoplay])


const MainBanner = () => {
    // 메인배너 가져오기
    const [banner, setBanner] = useState([])
    const bannerFetchData = useCallback(() => {
        fetch('./mainBanner.json')
        .then(response => response.json())
        .then(data => setBanner(data))
    },[])
    useEffect(bannerFetchData, [bannerFetchData])
    return(
        <Swiper
            className='mainBanner'
            modules={[EffectFade]} effect="fade"
            autoplay={{ delay: 3000 }}
            loop={true}
        >
            {
                banner.map(item => {
                    return(
                        <SwiperSlide key={item.id}><img src={item.imgUrl} alt={item.title} /></SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default MainBanner;