import React from 'react';
import { Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import './Courses.css';
import SwiperCore, {Navigation, Pagination, EffectFlip, Keyboard} from 'swiper';

import {lessons} from '../database/database'

const Lesson = ({ title, body, img, video }) => {
    SwiperCore.use([Navigation, Keyboard]);
    SwiperCore.use([Pagination]);
    SwiperCore.use([EffectFlip]);

    return (
        <div className="slider-wrapper">
                <p className="slider-title">{title}</p>
                <span className="slider-body">{body}</span>
                <video className='slider-video' controls poster={img}><source src={video}/> </video>
        </div>
    );
};

const Adv = () => {
    const lessonsAdv = lessons.slice(10,20);

    return (
        <body className='page'>
        <h3 className='course-title'>Продвинутый курс. Пора играть.</h3>
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides
            keyboard={{
                "enabled": true
            }}
            onSlideChange={() => {
                const media = document.getElementsByClassName('slider-video');
                for (let i = 0; i < media.length; i++) {
                    console.log(media[i]);
                    if (!media[i].currentTime == 0) {
                        media[i].pause();
                    }  }
            }}
            navigation
            pagination={
                {"clickable": true,
                    renderBullet: function (index, className)
                    {return '<span class="' + className + '">' + (index+1) + '</span>'}}

            }
            grabCursor={true}
        >
            {
                lessonsAdv.map(({id, title, body, img, video }) => {
                    return  <SwiperSlide>
                        <Lesson key={id} title={title} body={body} img={img} video={video} />
                    </SwiperSlide>})
            };
        </Swiper>
        </body>
    );
};

export {Adv};

