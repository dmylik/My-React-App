import React, {useState} from 'react'
import styleUM from './Paginator.module.css'
import cn from "classnames"
import arrowRest   from '../../assets/photo/angle-double-left.png'
import arrowNext from '../../assets/photo/angle-double-right.png'


// Функциональная (для Контейнерной) компанента
let Paginator = ({totalCount, pageSize, currentPage,onPageChanged, portionSize=10}) =>{
    let pageCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {pages.push(i);}

    let portionCount = Math.ceil(pageCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPage = (portionNumber -1) * portionSize +1;
    let rightPortionPage = portionNumber * portionSize ;

    return <div className={styleUM.paginator}>
        {portionNumber > 1 && <img src={arrowRest} onClick={()=>{setPortionNumber(portionNumber-1)}}/> }

            {pages
                .filter(p => p >= leftPortionPage && p<=rightPortionPage)
                .map(p =>  {
                return <span className={cn({[styleUM.selectedPage]: currentPage === p} ,styleUM.pageNumber)}
                             key ={p}
                             onClick={(e) => {onPageChanged(p);}}><b>{p}</b></span>})}


        {portionCount > portionNumber && <img src={arrowNext} onClick={()=>{setPortionNumber(portionNumber+1)}}/>}

    </div>

};

export default Paginator;