import {authMeThunk} from "./auth-reducer";

const SET_INITIALIZED = 'SET-INITIALIZED';

//Инициализация данных по умолчанию пока небыли переданный другие данные
let initialState = {
    initialized: false


};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};


export let initializedTrue = () => (
    {type: SET_INITIALIZED });

export const initializeApp = ()=>(dispatch) => {
    let promise = dispatch(authMeThunk());
    promise.then(()=> {
        dispatch(initializedTrue());})


};



export default appReducer