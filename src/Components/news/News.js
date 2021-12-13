import React from 'react';
import news from './News.module.css'
import Weather from "./weather/Weather";
import Rate from "./rate/Rate";

const News = ({weather, rate}) =>{
    console.log(rate)
    return <div className={news.News}>
        <div className={news.Weather}>
            <Weather weather={weather}/>
        </div>
        <div className={news.Rate}>
            <Rate rate={rate}/>
        </div>
</div>
}

export default News



