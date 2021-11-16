import React from 'react'
import styleUM from './Paginator.module.css'

// Функциональная (для Контейнерной) компанента
let Paginator = ({totalCount, pageSize, currentPage,onPageChanged }) =>{
    let pageCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {pages.push(i);}

    return <div>
            {pages.map(p => {
                return <span className={currentPage === p && styleUM.selectedPage}
                             onClick={(e) => {onPageChanged(p);}}>{p}</span>})}
        </div>

};

export default Paginator;