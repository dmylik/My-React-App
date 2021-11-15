import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users;};

export const getPageSize = (state) => {
    return state.usersPage.pageSize;};


export const getTotalCount = (state) => {
    return state.usersPage.totalCount;};

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;};

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;};

export const getFollowingProgress = (state) => {
    return state.usersPage.followingProgress;};




export const getUsersSelector = (state) => {
    return getUsers(state).filter(u=>true);};

//reselect
// более сложный селекторо который использует данные
// из простого селеутора, принимает его как параметр
// getUsers
// SuperSelector посмотрит зависимости, изменения в памяти
// а только потом перезапустит вывод данных и произойдет переотрисовка
export const getUsersSuperSelector = createSelector(getUsers, getIsFetching,
    (users, isFetching)=>{
        if(isFetching)
            return  users.filter(u=> true);
    });

