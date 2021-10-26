import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import store from './redux/redux-store'
import {Provider} from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        {/*<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>*/}
        <App/>
    </Provider>
    ,document.getElementById('root')
);

// let rerenderEntireTree = (state)=> {
//
// };
// // переотрисовка UI каждый раз при изменении данных
// rerenderEntireTree(store.getState());
//
// store.subscribe(()=> {
//     let state = store.getState();
//     rerenderEntireTree(state )});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
