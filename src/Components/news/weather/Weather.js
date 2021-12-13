import React from 'react';
import w from './Weather.module.css'
import Preloader from "../../../basket/Preloader/Preloader";
import wind from '../../../assets/windPNG/pngwing.com.png'

const Weather = ({weather}) =>{
    let dataFormat = (timestamp) => {
        let d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
            dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
            hh = d.getHours(),
            min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
            time;

        time = `${dd}.${mm}.${yyyy} ${hh}:${min}`;
        return time;
    }
    let windWhere = (dec) => {
        if (dec >= 0 && dec < 23) return 'N'
        if (dec >= 23 && dec < 67) return 'NE'
        if (dec >= 67 && dec < 112) return 'E'
        if (dec >= 112 && dec < 158) return 'SE'
        if (dec >= 158 && dec < 202) return 'S'
        if (dec >= 202 && dec < 248) return 'SW'
        if (dec >= 248 && dec < 315) return 'W'
        if (dec >= 315 && dec < 337) return 'NW'
        if (dec >= 337 && dec < 360) return 'N'
    }

    // https://openweathermap.org/current#current_JSON
    return <>
        {weather == undefined
            ? <Preloader/>
            : <div className={w.News}>
                <div className={w.Weather}>
                    <div className={w.Name}>
                        <small>{dataFormat(weather.dt)}</small>
                        <h1>{weather.name}, {weather.sys.country}</h1>
                    </div>
                    <div className={w.Big}>
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                        <b>{Math.round(weather.main.temp - 273)}&deg;C</b>
                    </div>

                    <div className={w.Temp}>
                        <p>Feels like: <b>{Math.round(weather.main.feels_like - 273)}&deg;</b>. {weather.weather[0].main}.</p>
                        <p>Clouds: <b>{weather.clouds.all}%</b> Humidity: <b>{weather.main.humidity}%</b></p>
                        <p>At pressure: <b>{weather.main.pressure}hPa</b></p>
                        <p>Wind: <b>{weather.wind.speed} m/s</b>, {windWhere(weather.wind.deg)}</p>

                    </div>
                    <div className={w.Wind}>
                        <img src={wind} style={{transform: `rotate(${weather.wind.deg + 180}deg)`}}/>
                    </div>

                </div>
            </div>}</>
}

export default Weather



