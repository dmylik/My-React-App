import React from 'react';
import rateCss from './Rate.module.css'
import {convertToDate} from "../../../basket/convert/ConvertToDate";


const Rate = ({rate, currency}) => {
    let keyQuotes = [...Object.keys(rate.quotes)].reverse().map(value => {
        return <p><b>{value.substr(3)} </b> {rate.quotes[value]}</p> })

    let newCurr = "Barbad"
    let currencyNew = Object.entries(currency).filter(arr => {
        if((arr[1].indexOf(newCurr.trim())) > -1) return arr
    })
    console.log(currencyNew)

    return  <div className={rateCss.Rate}>
                <small>{convertToDate(rate.timestamp)} </small>
                <h2>Rate Exchange for 1 {rate.source} </h2>

                <div className={rateCss.Number}>
                    {keyQuotes}
                </div>

                <small>{rate.privacy}</small>
            </div>
}

export default Rate