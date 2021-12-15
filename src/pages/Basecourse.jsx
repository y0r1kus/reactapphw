import React from 'react';
import {lessons} from '../database/database'

const Lesson = ({ title, body, img, video }) => {
    return (
        <div>
            <p>{title}</p>
            <img src={img} width="189" height="255"  alt={title}></img>
            <span>{body}</span>
            <video width="189" height="255" controls><source src={video}/> </video>
        </div>
    );
};

const Base = () => {
    const lessonsBase = lessons.slice(0,10);

    return (
        <div>
            <h1>Основной курс</h1>
            {
                lessonsBase.map(({id, title, body, img, video }) => {
                return <Lesson key={id} title={title} body={body} img={img} video={video} /> })
            };
        </div>
    );
};

export {Base};

