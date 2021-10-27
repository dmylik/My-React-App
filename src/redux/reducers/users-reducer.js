const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET-USERS';

//Инициализация данных по умолчанию пока не были переданный другие данные
let initialState = {users: []};

//Reducer для диалогов, принимает:
//state - только для себя (profilePage) и
//action - набор всех возможных команд
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state,
                users: state.users.map(u=> {
                    if(u.id === action.userID)
                        return {...u, followed: true};
                    return u})};
        case UN_FOLLOW:
            return {...state,
            users: state.users.map(u=> {
                if(u.id === action.userID)
                    return {...u, followed: false};
                return u})};
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};


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


export default usersReducer