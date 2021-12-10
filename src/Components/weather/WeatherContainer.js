import React from 'react';
import Weather from "./Weather";
import { weatherCity} from "../../redux/reducers/weather-reducer";
import {connect} from "react-redux";

class WeatherAPI extends React.Component {
    componentDidMount() {
        this.props.weatherCity(629634)
    }

    render() {return <Weather weather = {this.props.weather}/>}
}

let mapStateToProps = (state)=> {
    return {
        weather: state.weather.weatherCity,
    }

}

let mapDispatchToProps = {
    weatherCity
}

const WeatherContainer = connect(mapStateToProps, mapDispatchToProps)(WeatherAPI);


export default WeatherContainer