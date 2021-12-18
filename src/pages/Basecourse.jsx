import React from 'react';
import { Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import './test.css';
import SwiperCore, {Navigation, Pagination, EffectFlip, Keyboard} from 'swiper';

import {lessons} from '../database/database'

const Lesson = ({ title, body, img, video }) => {
    SwiperCore.use([Navigation, Keyboard]);
    SwiperCore.use([Pagination]);
    SwiperCore.use([EffectFlip]);

    return (
        <div className="slider-wrapper">
            <div className="slider-container">
            <p className="slider-title">{title}</p>
            <span className="slider-body">{body}</span>
            <video controls poster={img}><source src={video}/> </video>
            </div>
            </div>
    );
};

const Base = () => {
    const lessonsBase = lessons.slice(0,10);

    return (
        <body>
            <h3>Основной курс. Как ходят фигуры.</h3>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                centeredSlides
                effect={'flip'}
                keyboard={{
                    "enabled": true
                }}
            onSlideChange={() => {
                console.log("slide change")
            }}

             navigation
observer = {true}
                observerParents = {true}
                observerSlideChildren = {true}

                pagination={{
                    "type": "fraction"
                }}
                grabCursor={true}

            >
                {
                    lessonsBase.map(({id, title, body, img, video }) => {
                        return  <SwiperSlide>

                            <Lesson key={id} title={title} body={body} img={img} video={video} />

                        </SwiperSlide>})
                };

            </Swiper>

        </body>
    );
};

export {Base};

