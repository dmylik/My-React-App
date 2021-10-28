import React from 'react'
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducers/users-reducer";
import Users from "./UsersClass";
// import Users from "./Users";

let mapStateToProps = (state)=> {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage

    }
};

let mapDispatchToProps = (dispatch)=>{
    return {
        follow: (userID) => {dispatch(followAC(userID));},
        unfollow: (userID) => {dispatch(unfollowAC(userID));},
        setUsers: (users) => dispatch(setUsersAC(users))
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;