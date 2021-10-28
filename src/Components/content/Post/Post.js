import React from 'react'
import pm from './Post.module.css'


const Post = (props) => {
    return(
        <div className={pm.item}>
            <img className={pm.img} src='https://img4.goodfon.ru/original/960x800/1/51/lili-reinkhart-lili-reinhart-pevitsa-aktrisa-shatenka-fon-po.jpg' />
            {props.message}
            <div><span>Like {props.like}</span></div>
        </div>
    )
};

export default Post