import React from 'react';
import news from './News.module.css'
import Weather from "./weather/Weather";
import Rate from "./rate/Rate";
import Preloader from "../../basket/Preloader/Preloader";

const News = ({weather, rate, currency,
                  setNewRateAC, arrayRate, rateUSD,
                  setNewIdCityAC, weatherCity, startCity}) =>{

    return <div className={news.News}>
        <div className={news.Weather}>
            {weather == undefined
                ? <Preloader/>
                :<Weather weather={weather}
                          setNewIdCityAC={setNewIdCityAC}
                          weatherCity={weatherCity}
                          startCity={startCity}
                />}
        </div>
        <div className={news.Rate}>
            {rate == undefined
                ? <Preloader/>
                :<Rate rate={rate}
                       currency={currency}
                       setNewRateAC={setNewRateAC}
                       arrayRate={arrayRate}
                       rateUSD={rateUSD}

                />}
        </div>
</div>
}

export default News



