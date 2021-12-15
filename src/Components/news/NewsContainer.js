import React from 'react';
import News from "./News";
import {rateUSD, setNewRateAC, weatherCity} from "../../redux/reducers/news-reducer";
import {connect} from "react-redux";

class WeatherAPI extends React.Component {
    componentDidMount() {
        this.props.weatherCity(629634)
        this.props.rateUSD(this.props.arrayRate)
    }


    render() {return <News weather = {this.props.weather}
                           rate = {this.props.rate}
                           currency = {this.props.currency}
                           setNewRateAC = {this.props.setNewRateAC}
                           arrayRate = {this.props.arrayRate}
                           rateUSD = {this.props.rateUSD}
    />}
}

let mapStateToProps = (state)=> {
    return {
        weather: state.news.weatherCity,
        rate: state.news.rateUSD,
        currency: state.news.currency,
        arrayRate: state.news.arrayRate
    }
}

let mapDispatchToProps = {
    weatherCity, rateUSD, setNewRateAC
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(WeatherAPI);


export default NewsContainer