import React from 'react';
import { Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import './Courses.css';
import SwiperCore, {Navigation, Pagination, EffectFlip, Keyboard} from 'swiper';
import {Link} from 'react-router-dom';
import {course} from '../database/course'

const LessonCurrent = ({ note, title, body, img, link }) => {
    SwiperCore.use([Navigation, Keyboard]);
    SwiperCore.use([Pagination]);
    SwiperCore.use([EffectFlip]);

    return (
        <div className="slider-about__wrapper">
            <span className='slider-about__note'>{note}</span>
            <span className="slider-about__title">{title}</span>
            <span className="slider-about__body">{body}</span>
             <Link to={link}><img className='slider-about__img' src={img} alt={title}/></Link>
         </div>
    );
};

const LessonSoon = ({ note, title, body, img }) => {
    SwiperCore.use([Navigation, Keyboard]);
    SwiperCore.use([Pagination]);
    SwiperCore.use([EffectFlip]);
    return (
        <div className="slider-about__wrapper_soon">
            <span className='slider-about__note_soon'>{note}</span>
            <span className="slider-about__title_soon">{title}</span>
            <span className="slider-about__body_soon">{body}</span>
            <img className='slider-about__img_soon' src={img} alt={title}/>
        </div>
    );
};

const About = () => {
    const courseCurrent = course.slice(0,2);
    const courseSoon = course.slice(2,18);

    return (
    <body className='page'>
        <h3 className='course-title'>О нашей школе</h3>
        <h5 className='course-current'>Доступные курсы</h5>
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            keyboard={{"enabled": true}}
            navigation
            breakpoints={{
                "1024": {"slidesPerView": 2,"spaceBetween": 20}}}
            grabCursor={true}
        >
            {courseCurrent.map(({id, note, title, body, img, link }) => {
                    return  <SwiperSlide>
                        <LessonCurrent key={id} note={note} title={title} body={body} img={img} link={link} />
                            </SwiperSlide>})
            };
        </Swiper>

        <h5 className='course-soon'>Скоро в нашей школе</h5>
        <Swiper
            slidesPerView={2}
            spaceBetween={0}
            keyboard={{"enabled": true}}
            navigation
            pagination={{"clickable": true, renderBullet: function (index, className)
                {return '<span class="' + className + '">' + (index+1) + '</span>'}
            }}
            breakpoints={{"1024": {"slidesPerView": 4,"spaceBetween": 20}}}
        >
        {courseSoon.map(({id, note, title, body, img , link}) => {
                return  <SwiperSlide>
                                <LessonSoon key={id} note={note} title={title} body={body} img={img} link={link} />
                        </SwiperSlide>})
            };
        </Swiper>

    </body>
    );
};

export {About};

