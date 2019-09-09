import React, { useEffect, useState } from 'react';
import { SliderContainer } from './style';
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";

function Slider(props) {
    const [sliderSwiper, setSliderSwiper] = useState(null);
    const { bannerList } = props;

    useEffect(() => {
        if (bannerList.length && !sliderSwiper) {
            let sliderSwiper = new Swiper(".slider-container", {
                loop: true,  // 开启环路
                autoplay: {
                    delay: 3000,  // 自动播放（3000ms）
                    stopOnLastSlide: false,  // 图片在最后一张时回到第一张继续播放
                    disableOnInteraction: false,  // 用户操作后不会停止自动播放
                },
                pagination: { el: '.swiper-pagination', type: 'bullets', },  // 使用分页器导航
            });
            setSliderSwiper(sliderSwiper);
        }
    }, [bannerList.length, sliderSwiper]);

    return (
        <SliderContainer>
            <div className="before"></div>
            <div className="slider-container">
                <div className="swiper-wrapper">
                    {/* 图片展示 */}
                    {
                        bannerList.map((slider, index) => {
                            return (
                                <div key={index} className="swiper-slide">
                                    <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                                </div>

                            );
                        })
                    }
                </div>
                {/* 分页器。如果放置在swiper-container外面，需要自定义样式。 */}
                <div className="swiper-pagination"></div>
            </div>
        </SliderContainer>
    );
}

export default React.memo(Slider)