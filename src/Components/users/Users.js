import React from 'react'
import Paginator from "../../basket/Paginator/Paginator";
import User from "./User";

// Функциональная (для Контейнерной) компанента
const Users = (props) => {
    return <div>
        <Paginator currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
                   totalCount={props.totalCount}
                   pageSize={props.pageSize}/>
        {
            [...props.users].reverse().map(u => <User user={u}
                                       folProg={props.folProg}
                                       unFollowTC={props.unFollowTC}
                                       followTC={props.followTC}/>)
        }
    </div>
};

export default Users;