import {headerAPI, loginAPI, securityAPI} from "../../api/api";
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_URL= 'SET_CAPTCHA_URL';

//Инициализация данных по умолчанию пока небыли переданный другие данные
let initialState = {
    resultCode: 0,
    messages: [],
    userId: null,
    email: null,
    login: null,
    password: null,
    isAuth: false,
    captchaURL: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL: {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
            return state;
    }
};


export let setAuthUserData = (userId, email, login, isAuth) => (
    {type: SET_USER_DATA, payload:{userId, email, login, isAuth}});

export let setCaptchaURL = (captchaURL) => (
    {type: SET_CAPTCHA_URL, payload:{captchaURL}});


export const authMeThunk = () => async (dispatch) => {
    let data = await headerAPI.authMe();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};


export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await loginAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0)
        dispatch(authMeThunk());
    else {
        if (data.resultCode === 10){
            dispatch(getCaptchaURL())}

        let message = data.messages.length > 0 ? data.messages[0] : " Some Error ";
        dispatch(stopSubmit("login", {_error: message}));
    }
};

export const getCaptchaURL = () => async (dispatch)=>{
    const response = await securityAPI.getCaptchaURL();
    const captchaURL = response.data.url;
    debugger;

    dispatch(setCaptchaURL(captchaURL));
};





export const logout = ()=> async (dispatch) => {
    let data = await loginAPI.logout();
            if(data.resultCode ===0 )
                dispatch(setAuthUserData( null, null, null, false ));
};

export default authReducer