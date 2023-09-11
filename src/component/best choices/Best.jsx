import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import data from '../../utils/Slider.json';
import 'swiper/css';
import { sliderSettings } from '../../utils/common';

function Best() {
    return (
        <div className="best-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <h2>Best Choices</h2>
                    <h1>Popular Residencies</h1>
                </div>

                <Swiper {...sliderSettings}>
                    <SliderButtons/>
                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="r-card flexColStart">
                                <img src={card.image} alt="home" />
                                <span className="secondaryText r-price">
                                    <span style={{ color: "orange" }}>$</span><span>{card.price}</span>
                                </span>
                                <span className='primaryText'>
                                    {card.name}
                                </span>
                                <span className='secondaryText'>
                                    {card.detail}
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
}

export default Best

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className='flexCenter r-buttons'>
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    );
};