import {usersAPI} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

//Инициализация данных по умолчанию пока небыли переданный другие данные
let initialState = {
    resultCode: 0,
    messages: [],
    userId: null,
    email: null,
    login: null,
    isAuth: false

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};


export let setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data:{userId, email, login}});

export const authMeThunk = ()=>(dispatch) => {
    usersAPI.authMe()
        .then(data=>{
            if(data.resultCode ===0 ){
                let {id, email, login} = data.data;
                dispatch(setAuthUserData( id, email, login ));}
    });

};

export default authReducer