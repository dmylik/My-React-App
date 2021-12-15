import React, {useEffect, useState} from 'react';
import rateCss from './Rate.module.css'
import {convertToDate} from "../../../basket/convert/ConvertToDate";
import morePng from '../../../assets/ratePNG/more.png'


const Rate = ({rate, currency, setNewRateAC, arrayRate, rateUSD}) => {
    let currencyNew
    let findRateList
    let [find, setFind] = useState("")
    let [isAdd, setIsAdd] = useState(true)
    const onFindChange = (e) =>{setFind(e.currentTarget.value);}

    useEffect(()=>{rateUSD(arrayRate)}, [arrayRate])

    const addRateToList =(cod) => {
        setNewRateAC(cod)
        setFind('')
        if(arrayRate.length >= 9)
            setIsAdd(false)
    }

    let keyQuotes = [...Object.keys(rate.quotes)].map(value => {
        return <p><b>{value.substr(3)} </b> {rate.quotes[value]}</p>
    })


    if(find.length>1) {
        currencyNew = Object.entries(currency).filter(arr => {
            if (((arr[1].toLowerCase()).indexOf(find.trim().toLowerCase())) > -1) return arr})}

    if(find.length>1)
        findRateList = [...currencyNew].map(arr=> {return <FindRateList arr={arr}
                                                                        addRateToList={addRateToList}
                                                                        isAdd={isAdd}/>})

    return <div className={rateCss.Rate}>
        <small>{convertToDate(rate.timestamp)} </small>
        <h2>Rate Exchange for 1 {rate.source} </h2>

        <div className={rateCss.RateData}>
            <div className={rateCss.Number}>
                {keyQuotes}
            </div>
            <div className={rateCss.Find}>
                <h3>Add Rate:</h3>
                <input  onChange={onFindChange}
                        autoFocus={false}
                        value={find} />

                {findRateList}
            </div>

        </div>

        {/*<small>{rate.privacy}</small>*/}
    </div>
}

const FindRateList = ({arr, addRateToList, isAdd}) => {
    return <div className={rateCss.FindList} >
        <p><b>{arr[0]}</b>
            {arr[1]}
            {isAdd && <img src={morePng} onClick={()=>{addRateToList(arr[0])}}/>}
        </p>
    </div>

}

export default Rate