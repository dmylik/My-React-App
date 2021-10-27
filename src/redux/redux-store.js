import {combineReducers, createStore} from "redux";

import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import navReducer from "./reducers/nav-reducer";
import usersReducer from "./reducers/users-reducer";

// Redux вызов reducers(редьюсеров) файлов
// название : вызов reducer
let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    navPage: navReducer,
    usersPage: usersReducer
});

//игициалихация store с использование Redux
//getState, subscribe,  dispatch(action) вызываются сами
//объявлять их не нужно
let store = createStore(reducers);

export default store;