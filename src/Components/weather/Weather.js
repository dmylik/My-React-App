import React from 'react';
import w from './Weather.module.css'
import Preloader from "../../basket/Preloader/Preloader";

const Weather = ({weather}) =>{
    let dataFormat = (timestamp) => {
        let d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
            dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2014-03-24, 3:00 PM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
        return time;
    }

    // https://openweathermap.org/current#current_JSON

    return <>
        {weather == undefined
            ? <Preloader/>
            : <div className={w.News}>
        <div className={w.Weather}>
            <h2>{weather.name}</h2>
            <b>11.11.1111 22:22</b>
            <div className={w.Temp}>
                <b>{Math.round(weather.main.temp - 273)} &deg;</b>
                <p>{weather.weather[0].description }</p>
            </div>
            <div>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
            </div>
            <div>
                <p>{dataFormat(weather.dt)}</p>
            </div>
            <div>
                <p>Облачность {weather.clouds.all} %</p>
                <p>Влажность {weather.main.humidity}</p>
                <p>Атмосферное давление  {weather.main.pressure}</p>
            </div>

        </div>



        <div className={w.Rate}>

            Cours
        </div>

    </div>}</>
}

export default Weather



