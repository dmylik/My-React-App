import React from 'react';
import Preloader from "../../../basket/Preloader/Preloader";


const Rate = ({rate}) => {


    return <>
        {rate == undefined
            ? <Preloader/>
            : <div>
                <b>{rate.source}</b>
                <div>
                    <p>{rate.quotes.USDBYN}</p>
                    <p>{rate.quotes.USDEUR}</p>
                    <p>{rate.quotes.USDGBP}</p>
                    <p>{rate.quotes.USDPLN}</p>
                    <p>{rate.quotes.USDRUB}</p>
                </div>

            </div>}</>
}

export default Rate