import {headerAPI, loginAPI} from "../../api/api";
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA';

//Инициализация данных по умолчанию пока небыли переданный другие данные
let initialState = {
    resultCode: 0,
    messages: [],
    userId: null,
    email: null,
    login: null,
    password: null,
    isAuth: false

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};


export let setAuthUserData = (userId, email, login, isAuth) => (
    {type: SET_USER_DATA, payload:{userId, email, login, isAuth}});

export const authMeThunk = ()=>(dispatch) => {
    return headerAPI.authMe()
        .then(data=>{
            if(data.resultCode ===0 ){
                let {id, email, login} = data.data;
                dispatch(setAuthUserData( id, email, login, true ));}
    });

};


export const login = (email, password, rememberMe)=>(dispatch) => {
    loginAPI.login(email, password, rememberMe)
        .then(data=>{
            if(data.resultCode ===0 ){
                dispatch(authMeThunk())
            }else {
                let message = data.messages.length> 0? data.messages[0] : " Some Error ";
                dispatch(stopSubmit("login", {_error: message}));
            }

        });

};

export const logout = ()=>(dispatch) => {
    loginAPI.logout()
        .then(data=>{
            if(data.resultCode ===0 ){
                dispatch(setAuthUserData( null, null, null, false ));
            }
        });

};

export default authReducer