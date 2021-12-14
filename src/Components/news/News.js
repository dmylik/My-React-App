import React from 'react';
import news from './News.module.css'
import Weather from "./weather/Weather";
import Rate from "./rate/Rate";
import Preloader from "../../basket/Preloader/Preloader";

const News = ({weather, rate, currency}) =>{
    return <div className={news.News}>
        <div className={news.Weather}>
            {weather == undefined
                ? <Preloader/>
                :<Weather weather={weather}/>}
        </div>
        <div className={news.Rate}>
            {rate == undefined
                ? <Preloader/>
                :<Rate rate={rate}
                       currency={currency}
                />}
        </div>
</div>
}

export default News



