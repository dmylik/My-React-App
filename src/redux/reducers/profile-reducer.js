import {profileAPI} from "../../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS= 'SET-USER-STATUS';

//Инициализация данных по умолчанию пока небыли переданный другие данные
let initialState = {
        postArray: [
            {id: 1, post: 'Hello Pes', likes: 234},
            {id: 2, post: 'This is first React project', likes: 1},
            {id: 3, post: 'I am lus', likes: 941},
            {id: 4, post: 'This is bad idea', likes: 6},
            {id: 5, post: 'I know((', likes: 23},
            {id: 6, post: 'oh no', likes: 1}],
        newPostText: ' ',
        profile: null,
        status: ''
    };

//Reducer для диалогов, принимает:
//state - только для себя (profilePage) и
//action - набор всех возможных команд
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                post: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                postArray: [...state.postArray, newPost],
                newPostText: ''};
        case UPDATE_NEW_POST_TEXT:
            // возвращение копии state и при этом в newPostText запиывается
            //данные из обекта action (dispatch()) с отрибутом textPostNew
            return {...state, newPostText: action.textPostNew};
        case SET_USER_PROFILE: return {...state, profile: action.profile};
        case SET_USER_STATUS: return {...state ,status:  action.status};


        default:  return state;
    }
};
// Если Reducer-е есть нужная команда из action
// она выполнится и вернет свой state для изменения
// Если команд не обнаружено, вохвращается state без изменения

// создание элементов action для каждой команды
export let addPostActionCreator = () => ({type: ADD_POST});
export let updateNewTextPostActionCreator = (text) => {return {type: UPDATE_NEW_POST_TEXT, textPostNew: text}};
export let setUserProfileAC = (profile) => {return {type: SET_USER_PROFILE, profile}};

export const getUserProfileThunkCreater = (userID) => {
    const getUserProfileThunk = (dispatch) => {
        profileAPI.getUserProfile(userID)
            .then(data => {
                dispatch(setUserProfileAC(data));
            });
    };
    return getUserProfileThunk
};

export let setStatus = (status) => {return {type: SET_USER_STATUS, status}};

export const getStatusThunkCreator = (userId) =>  (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data))
        });
};

export const updateStatusThunkCreator = (status) =>  (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if(data.resultCode ===0)
                dispatch(setStatus(status))
        });
};


export default profileReducer