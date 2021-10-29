const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_SVG = 'TOGGLE_IS_SVG';

//Инициализация данных по умолчанию пока не были переданный другие данные
let initialState = {
    users: [],
    pageSize: 20,
    totalCount: 0,
    currentPage: 1,
    isFetching: true

};

//Reducer для диалогов, принимает:
//state - только для себя (profilePage) и
//action - набор всех возможных команд
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID)
                        return {...u, followed: true};
                    return u
                })
            };
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID)
                        return {...u, followed: false};
                    return u
                })
            };
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount > 500 ? 500 : action.totalCount };
            case TOGGLE_IS_SVG:
            return {...state, isFetching: action.isFetching};
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


export default usersReducer