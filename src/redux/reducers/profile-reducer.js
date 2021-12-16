import {profileAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS= 'SET-USER-STATUS';
const SAVE_PHOTO= 'SAVE-PHOTO';

//Инициализация данных по умолчанию пока небыли переданный другие данные
let initialState = {
        postArray: [
            {id: 1, post: 'Hello Pes', likes: 234},
            {id: 2, post: 'This is first React project', likes: 1},
            {id: 3, post: 'I am lus', likes: 941},
            {id: 4, post: 'This is bad idea', likes: 6},
            {id: 5, post: 'I know((', likes: 23},
            {id: 6, post: 'oh no', likes: 1}],
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
                post: action.textPostNew,
                likes: 0
            };
            return {
                ...state,
                postArray: [...state.postArray, newPost]};
        case SET_USER_PROFILE: return {...state, profile: action.profile};
        case SET_USER_STATUS: return {...state ,status:  action.status};
        case SAVE_PHOTO: return {
            ...state ,postArray: {...state.postArray, photos: action.photos}};
        default:  return state;
    }
};
// Если Reducer-е есть нужная команда из action
// она выполнится и вернет свой state для изменения
// Если команд не обнаружено, вохвращается state без изменения

// создание элементов action для каждой команды
export let addPostActionCreator = (text) => ({type: ADD_POST, textPostNew: text});
export let setUserProfileAC = (profile) => {return {type: SET_USER_PROFILE, profile}};
export let savePhotoAC = (photos) => {return {type: SAVE_PHOTO, photos}};
export let setStatus = (status) => {return {type: SET_USER_STATUS, status}};

// export const updateStatusThunkCreator = (status) =>  (dispatch) => {
//         profileAPI.updateStatus(status).then(data => {
//             if(data.resultCode ===0)
//                 dispatch(setStatus(status))
//         });
// };


// async - перевод в асинхронную функцию
// await - замена .then ов более приветствуется
export const getUserProfileThunkCreater = (userID) => async (dispatch) => {
        let data = await profileAPI.getUserProfile(userID);
        dispatch(setUserProfileAC(data));
};



export const getStatusThunkCreator = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
};

export const updateStatusThunkCreator = (status) => async (dispatch) => {
    try { // если запрос выполняется без ошибки, то выполнится
        let data = await profileAPI.updateStatus(status);
        if (data.data.resultCode === 0) dispatch(setStatus(status));
    } catch (error) {
        // В результате ошибки
        // сделать dispatch и вывести ошибку пользователю
        console.log(error.messages)
    }

};

export const savePhotoThunkCreator = (file) => async (dispatch) => {
    let data = await profileAPI.savePhoto(file);
    if (data.data.resultCode === 0)
        dispatch(savePhotoAC(data.data.photos));
};

export const saveUserInfoThunkCreator = (profile) => async (dispatch, getState) => {
    let data = await profileAPI.saveUserInfo(profile);
    let userId = getState().authReducer.userId;

    if (data.data.resultCode === 0)
        dispatch(getUserProfileThunkCreater(userId));
    else {
        let message = data.data.messages.length > 0 ? data.data.messages[0] : " Some Error ";
        dispatch(stopSubmit("userData", {_error: message}));
        return Promise.reject(data.data.messages[0]);
        // dispatch(stopSubmit("userData", {"contacts" :{"vk ": message}}));
        // dispatch(stopSubmit("userData", {"contacts" :{"facebook": message}}));
    }
};


export default profileReducer