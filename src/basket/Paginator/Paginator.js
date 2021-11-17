import React, {useState} from 'react'
import styleUM from './Paginator.module.css'
import cn from "classnames"


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
        {portionNumber > 1 && <button onClick={()=>{setPortionNumber(portionNumber-1)}}>Rest</button>}
            {pages
                .filter(p => p >= leftPortionPage && p<=rightPortionPage)
                .map(p =>  {
                return <span className={cn({[styleUM.selectedPage]: currentPage === p} ,styleUM.pageNumber)}
                             key ={p}
                             onClick={(e) => {onPageChanged(p);}}>{p}</span>})}

        {portionCount > portionNumber && <button onClick={()=>{setPortionNumber(portionNumber+1)}}>Next</button>}

    </div>

};

export default Paginator;