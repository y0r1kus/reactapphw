import React from 'react';
import {lessons} from "../database/database";

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

const Adv = () => {
    const lessonsAdv = lessons.slice(10,20);

    return (
        <div>
            <h1>Дополнительный курс</h1>
            {
                lessonsAdv.map(({id, title, body, img, video }) => {
                    return <Lesson key={id} title={title} body={body} img={img} video={video} /> })
            };
        </div>
    );
};

export {Adv};
