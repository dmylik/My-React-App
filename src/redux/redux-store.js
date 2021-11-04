import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import navReducer from "./reducers/nav-reducer";
import usersReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk"

// Redux вызов reducers(редьюсеров) файлов
// название : вызов reducer
let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    navPage: navReducer,
    usersPage: usersReducer,
    authReducer: authReducer
});

//игициалихация store с использование Redux
//getState, subscribe,  dispatch(action) вызываются сами
//объявлять их не нужно
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;