import React from 'react';
import { Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import './Courses.css';
import SwiperCore, {Navigation, Pagination, Keyboard} from 'swiper';
import {lessons} from '../database/database'

const Lesson = ({ title, body, img, video }) => {
    SwiperCore.use([Navigation, Keyboard, Pagination]);

    return (
        <div className="slider-wrapper">
            <span className="slider-title">{title}</span>
            <span className="slider-body">{body}</span>
            <video className='slider-video' controls poster={img}><source src={video}/> </video>
        </div>
    );
};

const Base = () => {
    const lessonsBase = lessons.slice(0,10);

    return (
    <body className='page'>
            <h3 className='course-title'>Основной курс. Как ходят фигуры.</h3>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                centeredSlides
                  keyboard={{"enabled": true}}
            onSlideChange={() => {
              const media = document.getElementsByClassName('slider-video');
             for (let i = 0; i < media.length; i++) {
                 console.log(media[i]);
                if (media[i].play) {media[i].pause();}
             }
            }}
            navigation
            pagination={
                    {"clickable": true,
                        renderBullet: function (index, className)
                        {return '<span class="' + className + '">' + (index+1) + '</span>'}}
            }
            grabCursor={true}
            >
            {lessonsBase.map(({id, title, body, img, video }) => {
                        return  <SwiperSlide>
                                         <Lesson key={id} title={title} body={body} img={img} video={video} />
                                </SwiperSlide>})
            };
            </Swiper>
    </body>
    );
};

export {Base};

