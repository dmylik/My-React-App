import React from 'react'
import {connect} from "react-redux";
import {
    followAC, getUsersThunkCreator,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    toggleIsFetchingAC, toggleIsFollowingAC, unFollowThunkCreator,
    unfollowAC, followThunkCreator
} from "../../redux/reducers/users-reducer";
import Users from "./Users";
import Preloader from "../../basket/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

// Класовая компанента
class UsersAPI extends React.Component {
    // Метод componentDidMount() запускается после того,
    // как компонент отрендерился в DOM
    // componentDidMount() метод жизненного цикла в класс
    componentDidMount() {
        // "Санка" заменила тучу вызовов ActionCreater
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize, false);
        // // Вызов preloader (изображение загрузки при слабои инете)
        // this.props.toggleIsFetching(true);
        // // axion запросы с json данных
        // // alert("New object"); отрабатывет один раз
        // // get запрос находится в api в getUsers
        // getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.setUsers(data.items);
        //         this.props.setTotalCount(data.totalCount);
        //         this.props.toggleIsFetching(false);
        //     });
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize, true);};

    render() {
        return <>
            {this.props.isFetching ? <Preloader/>: null}
        <Users totalCount={this.props.totalCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               isFetching={this.props.isFetching}
               folProgress={this.props.folProgress}
               folProg={this.props.folProg}
               unFollowTC={this.props.unFollowTC}
               followTC={this.props.followTC}
        />
        </>
    };
}

// Контейнерная логика
let mapStateToProps = (state)=> {
    return {
        // объект
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        folProg: state.usersPage.followingProgress
    }
};

let objectAC = {
    // объект ActionCreater-ов
    follow: followAC,
    unfollow: unfollowAC,
    folProgress: toggleIsFollowingAC,
    getUsersTC: getUsersThunkCreator,
    unFollowTC: unFollowThunkCreator,
    followTC: followThunkCreator
    // setUsers:setUsersAC,
    // setCurrentPage:setCurrentPageAC,
    // setTotalCount: setTotalCountAC,
    // toggleIsFetching: toggleIsFetchingAC
};

// повторение нижнего (цепочка вызовов)
export default compose(
    connect(mapStateToProps, objectAC),
    withAuthRedirect)
(UsersAPI);

// HOC хок для проверки подкиски
let AuthRedirectComponent = withAuthRedirect(UsersAPI);

const UsersContainer = connect(mapStateToProps, objectAC)(AuthRedirectComponent);

// export default UsersContainer;