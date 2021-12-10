import {weatherAPI} from "../../api/api";
const  WEATHER_CITY = "WEATHER_CITY"

let initialState = {};


const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case WEATHER_CITY: return {...state, weatherCity: action.weather}

        default: return state
    }


}

export const getWeatherCityAC = (weather) => ({type: WEATHER_CITY, weather})

export let weatherCity = (id) => async (dispatch) => {
    let data = await weatherAPI.getWeatherCity(id);
    dispatch(getWeatherCityAC(data))
}

export default weatherReducer