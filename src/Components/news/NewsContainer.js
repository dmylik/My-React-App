import React from 'react';
import News from "./News";
import {rateUSD, setNewIdCityAC, setNewRateAC, weatherCity} from "../../redux/reducers/news-reducer";
import {connect} from "react-redux";

class WeatherAPI extends React.Component {
    componentDidMount() {
        this.props.weatherCity(this.props.startCity)
        this.props.rateUSD(this.props.arrayRate)
    }

    render() {return <News weather = {this.props.weather}
                           rate = {this.props.rate}
                           currency = {this.props.currency}
                           setNewRateAC = {this.props.setNewRateAC}
                           arrayRate = {this.props.arrayRate}
                           rateUSD = {this.props.rateUSD}
                           setNewIdCityAC = {this.props.setNewIdCityAC}
                           weatherCity = {this.props.weatherCity}
                           startCity = {this.props.startCity}
    />}
}

let mapStateToProps = (state)=> {
    return {
        weather: state.news.weatherCity,
        rate: state.news.rateUSD,
        currency: state.news.currency,
        arrayRate: state.news.arrayRate,
        startCity: state.news.startCity
    }
}

let mapDispatchToProps = {
    weatherCity, rateUSD, setNewRateAC, setNewIdCityAC
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(WeatherAPI);


export default NewsContainer