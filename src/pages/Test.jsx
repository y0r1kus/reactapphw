import React from 'react';
import { Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import './test.css';
import SwiperCore, {Navigation, Pagination, EffectFlip, Keyboard} from 'swiper';



const Test= () => {

    SwiperCore.use([Navigation, Keyboard]);
    SwiperCore.use([Pagination]);
    SwiperCore.use([EffectFlip]);
    return (
        <div>
            <h1> Test</h1>
            <p> Test</p>

            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                centeredSlides
                effect={'flip'}
                keyboard={{
                    "enabled": true
                }}
                onSlideChange={() => console.log("slide change")}
                navigation
                pagination={{
                    "type": "fraction"
                }}
                grabCursor={true}

            >
                <SwiperSlide>
                    <img
                        src='../../images/base_1_the-king-and-the-goal.jpg'
                        alt='text'

                    />
                </SwiperSlide>
                <SwiperSlide > <img
                    src='../../images/base_1_the-king-and-the-goal.jpg'
                    alt='text'
                /></SwiperSlide>
                <SwiperSlide > <img
                    src='../../images/base_1_the-king-and-the-goal.jpg'
                    alt='text'
                /></SwiperSlide>
                <SwiperSlide > <img
                    src='../../images/base_1_the-king-and-the-goal.jpg'
                    alt='text'
                /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export {Test};




