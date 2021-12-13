import {rateAPI, weatherAPI} from "../../api/api";
const  WEATHER_CITY = "WEATHER_CITY"
const  RATE_USD = "RATE_USD"

let initialState = {};


const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case WEATHER_CITY: return {...state, weatherCity: action.weather}
        case RATE_USD: return {...state, rateUSD: action.rate}

        default: return state
    }


}

export const getWeatherCityAC = (weather) => ({type: WEATHER_CITY, weather})
export const getRateUSDAC = (rate) => ({type: RATE_USD, rate})

export let weatherCity = (id) => async (dispatch) =>
    dispatch(getWeatherCityAC(await weatherAPI.getWeatherCity(id)))

export let rateUSD = () => async (dispatch) =>
    dispatch(getRateUSDAC(await rateAPI.getRateCity()))


export default newsReducer