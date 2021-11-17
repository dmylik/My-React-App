import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import navReducer from "./reducers/nav-reducer";
import usersReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer } from 'redux-form'
import appReducer from "./reducers/app-reducer";

// Redux вызов reducers(редьюсеров) файлов
// название : вызов reducer
let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    navPage: navReducer,
    usersPage: usersReducer,
    authReducer: authReducer,
    app: appReducer,
    form: formReducer
});


// Для Расширения
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

//игициалихация store с использование Redux
//getState, subscribe,  dispatch(action) вызываются сами
//объявлять их не нужно

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// window.store = store;

export default store;