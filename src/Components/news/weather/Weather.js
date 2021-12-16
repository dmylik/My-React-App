import React, {useEffect, useState} from 'react';
import w from './Weather.module.css'
import wind from '../../../assets/windPNG/pngwing.com.png'
import {convertToDate} from "../../../basket/convert/ConvertToDate";
import {windWhere} from '../../../basket/utils/windWhere'

const json = require('../../../basket/city/city.list.min');
const jsonSet = new Set([...json])

const Weather = ({weather, setNewIdCityAC, weatherCity, startCity}) => {
    let [findCity, setFindCity] = useState("")

    useEffect(() => {
        weatherCity(startCity)
    }, [startCity])

    let findID
    let cityIdNew

    const onFindChange = (e) => {
        setFindCity(e.currentTarget.value);
    }

    const newIdCity = (idCity) => {
        setNewIdCityAC(idCity)
        setFindCity('')
    }

    if (findCity.length !== 0)
    // findID = [...jsonSet].filter(arr => {if((arr.name.toLowerCase().indexOf(findCity.toLowerCase())) > -1) return arr})
        findID = [...jsonSet].filter(arr => {
            if ((arr.name.toLowerCase() === (findCity.toLowerCase()))) return arr})

    if (findID !== undefined)
        cityIdNew = findID.map(arr => {
            return <ListCity arr={arr} newIdCity={newIdCity}/>})

    return <div className={w.News}>
        <div className={w.Weather}>
            <div className={w.Name}>
                <small>{convertToDate(weather.dt)}</small>
                <h1>{weather.name}, {weather.sys.country}</h1>
            </div>
            <div className={w.Big}>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
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
            <div className={w.Find}>
                <h3>New City:</h3>
                <input onChange={onFindChange}
                       autoFocus={false}
                       value={findCity}/>
            </div>
            <div className={w.ListCity}>
                {cityIdNew}
            </div>
        </div>
    </div>
}

const ListCity = ({newIdCity,arr }) => {
    return <p onClick={() => {newIdCity(arr.id)}}>
            <b>{arr.country}{'\t'}</b>
            {arr.name}
        </p>
}

export default Weather



