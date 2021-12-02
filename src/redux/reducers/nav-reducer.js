//Инициализация данных по умолчанию пока небыли переданный другие данные
import {profileAPI} from "../../api/api";

const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
        navFriends: [
            {nameFriend: 'Elsa'},
            {nameFriend: 'Emma'},
            {nameFriend: 'Emilia'}],
        profileFriends: [
            {id: 1, profile: {}}
        ]
    };

//Reducer для диалогов, принимает:
//state - только для себя (navPage) и
//action - набор всех возможных команд
const navReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {return {...state,
            profileFriends:[...state.profileFriends, {id: action.arrUser[0], profile: action.arrUser[1]}]}}
        default:  return state;
    }
};

export let setUserProfileAC = (profile, id) => {
    let arrUser = [id, profile];
    return {type: SET_USER_PROFILE, arrUser}};

export const getUserFriendsProfileTC = (userID, id) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userID);
    debugger
    dispatch(setUserProfileAC(data, id));
};


// Если Reducer-е есть нужная команда из action
// она выполнится и вернет свой state для изменения
// Если команд не обнаружено, вохвращается state без изменения


export default navReducer;