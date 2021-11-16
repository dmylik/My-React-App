import {usersAPI} from "../../api/api";
import {updateObjInArray} from "../../basket/utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_SVG = 'TOGGLE-IS-SVG';
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING';

//Инициализация данных по умолчанию пока не были переданный другие данные
let initialState = {
    users: [],
    pageSize: 20,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: []

};

//Reducer для диалогов, принимает:
//state - только для себя (profilePage) и
//action - набор всех возможных команд
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjInArray(state.users, action.userID, "id", {followed: true})

            };
        case UN_FOLLOW:
            return {
                ...state,
                users: updateObjInArray(state.users, action.userID, "id", {followed: false})
            };
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount > 500 ? 500 : action.totalCount};
        case TOGGLE_IS_SVG:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING:
            return {...state,
                 followingProgress: action.isFetching
                     ? [...state.followingProgress, action.userID]
                     : state.followingProgress.filter(id=> id!= action.userID)};
        default:
            return state;
    }
};
// Если Reducer-е есть нужная команда из action
// она выполнится и вернет свой state для изменения
// Если команд не обнаружено, вохвращается state без изменения

// создание элементов action для каждой команды
export let followAC = (userID) => ({type: FOLLOW, userID});
export let unfollowAC = (userID) => ({type: UN_FOLLOW, userID});
export let setUsersAC = (users) => ({type: SET_USERS, users});
export let setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export let setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export let toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_SVG, isFetching});
export let toggleIsFollowingAC = (isFollPr, userID) => ({type: TOGGLE_IS_FOLLOWING, isFollPr, userID});


export const getUsersThunkCreator = (currentPage, pageSize, isCurentPage) => {
    //thunk санка, которая возвращает users
    return  async (dispatch) => {
        // Вызов preloader (изображение загрузки при слабои инете)
        dispatch(toggleIsFetchingAC(true));

        if (isCurentPage === true)
            dispatch(setCurrentPageAC(currentPage));

        // axion запросы с json данных
        // alert("New object"); отрабатывет один раз
        // get запрос находится в api в getUsers
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setUsersAC(data.items));
        dispatch(setTotalCountAC(data.totalCount));

        dispatch(toggleIsFetchingAC(false));

    };
};


//  Одинаковый код двух санок вынесли в одну функцию (рефакторинг)
// Дублирующаяся Логика
const followUnFlow = async (dispatch, userID, apiMethod, actionCreater) => {
    dispatch(toggleIsFollowingAC(true, userID));
    let data = await apiMethod(userID);
    if (data.resultCode === 0)
        dispatch(actionCreater(userID));
    dispatch(toggleIsFollowingAC(false, userID));

}

// Санка отписки
export const unFollowThunkCreator = (userID) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.userDeleteFollow.bind(userID);
        let actionCreater = unfollowAC;

        followUnFlow(dispatch, userID, apiMethod, actionCreater);

        // dispatch(toggleIsFollowingAC(true, userID));
        // let data = await apiMethod(userID);
        // if (data.resultCode === 0)
        //     dispatch(actionCreater(userID));
        // dispatch(toggleIsFollowingAC(false, userID));
    };
};


// Санка подписки
//  Одинаковый код двух санок вынесли в одну функцию (рефакторинг)
export const followThunkCreator = (userID) => {
    return async (dispatch) => followUnFlow(dispatch, userID, usersAPI.userPostFollow.bind(userID), followAC);
};


// Санка подписки
// export const followThunkCreator = (userID)=> (dispatch) => {
//         dispatch(toggleIsFollowingAC(true, userID));
//         usersAPI.userPostFollow(userID)
//             .then(data => {
//                 if (data.resultCode === 0)
//                     dispatch(followAC(userID));
//                 dispatch(toggleIsFollowingAC(false, userID));
//             });
//
// };


export default usersReducer