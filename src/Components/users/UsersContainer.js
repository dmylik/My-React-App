import React from 'react'
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../redux/reducers/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import preloder from '../../assets/svg/spinning-circles.svg'
import Preloader from "../../basket/Preloader/Preloader";
import {getUsers} from "../../api/api";

// Класовая компанента
class UsersAPI extends React.Component {
    // Метод componentDidMount() запускается после того,
    // как компонент отрендерился в DOM
    // componentDidMount() метод жизненного цикла в класс
    componentDidMount() {
        // Вызов preloader (изображение загрузки при слабои инете)
        this.props.toggleIsFetching(true);
        // axion запросы с json данных
        // alert("New object"); отрабатывет один раз
        // get запрос находится в api в getUsers
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.toggleIsFetching(false);

            });
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/>: null}
        <Users totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      isFetching={this.props.isFetching}
        />
        </>
    };

    // render (){
    // let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
    // let pages = [];
    // for (let i = 1; i <= pageCount; i++) {pages.push(i);}
    //
    // return <div>
    //     <div>
    //         {pages.map(p => {
    //             return <span className={this.props.currentPage === p && styleUM.selectedPage}
    //                          onClick={(e) => {
    //                              this.onPageChanged(p);
    //                          }}>{p}</span>
    //         })}
    //     </div>
    //     {
    //         this.props.users.map(u => <div key={u.id}>
    //         <span>
    //             <div className={styleUM.userImage}>
    //                 <img src={u.photos.small != null ? u.photos.small : userPhotoE}/>
    //             </div>
    //             <div>
    //                 {u.followed
    //                     // onClick вызови анонимную стрелочную функцию
    //                     // внутри  обращение к this.props
    //                     // из this.props берется
    //                     ? <button onClick={() => {
    //                         this.props.unfollow(u.id)
    //                     }}>UnFollow</button>
    //                     : <button onClick={() => {
    //                         this.props.follow(u.id)
    //                     }}>Follow</button>
    //                 }
    //
    //             </div>
    //         </span>
    //             <span>
    //             <span>
    //                 <div>{u.name}</div>
    //                 <div>{u.status} </div>
    //             </span>
    //             <span>
    //                 <div>{"u.location.country"}</div>
    //                 <div>{"u.location.city"}</div>
    //             </span>
    //         </span>
    //         </div>)
    // {/*    }*/}
    // {/*</div>*/}}
// }
}


// Контейнерная логика
let mapStateToProps = (state)=> {
    return {
        // объект
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching


    }
};


let objectAC = {
    // объект ActionCreater-ов
    follow: followAC,
    unfollow: unfollowAC,
    setUsers:setUsersAC,
    setCurrentPage:setCurrentPageAC,
    setTotalCount: setTotalCountAC,
    toggleIsFetching: toggleIsFetchingAC};

// старая запись объекта callbacks
let mapDispatchToProps = (dispatch)=>{
    return {
        // объект callback-od
        follow: (userID) => {dispatch(followAC(userID));},
        unfollow: (userID) => {dispatch(unfollowAC(userID));},
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (pageNumber)=>{dispatch(setCurrentPageAC(pageNumber));},
        setTotalCount: (totalCount)=>{dispatch(setTotalCountAC(totalCount));},
        toggleIsFetching: (isFetching)=>{dispatch(toggleIsFetchingAC(isFetching));}
    }
};


let objectUnAC = {
    // объект ActionCreater-ов
    // если переименовать все callbacks без "AC",
    // то можно сократить запись до такого кода
    // follow,unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching
    };

const UsersContainer = connect(mapStateToProps, objectAC)(UsersAPI);

export default UsersContainer;