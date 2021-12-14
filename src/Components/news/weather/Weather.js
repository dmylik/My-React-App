import React from 'react';
import w from './Weather.module.css'
import wind from '../../../assets/windPNG/pngwing.com.png'
import {convertToDate} from "../../../basket/convert/ConvertToDate";

const Weather = ({weather}) =>{
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
    return  <div className={w.News}>
                <div className={w.Weather}>
                    <div className={w.Name}>
                        <small>{convertToDate(weather.dt)}</small>
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
            </div>
}

export default Weather



