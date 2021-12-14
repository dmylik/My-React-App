import React from 'react';
import News from "./News";
import {rateUSD, weatherCity} from "../../redux/reducers/news-reducer";
import {connect} from "react-redux";

class WeatherAPI extends React.Component {
    componentDidMount() {
        this.props.weatherCity(629634)
        this.props.rateUSD()
    }

    render() {return <News weather = {this.props.weather}
                           rate = {this.props.rate}
                           currency = {this.props.currency}
    />}
}

let mapStateToProps = (state)=> {
    return {
        weather: state.news.weatherCity,
        rate: state.news.rateUSD,
        currency: state.news.currency
    }
}

let mapDispatchToProps = {
    weatherCity, rateUSD
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(WeatherAPI);


export default NewsContainer