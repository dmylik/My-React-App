import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import {addPost, subscribe, upTxtP} from "./redux/state";
import state from './redux/state'


let rerenderEntireTree = (state)=> {
    ReactDOM.render(
        <React.StrictMode>

            <App state={state}
                 addPost={addPost}
                 upTxtP={upTxtP}/>


        </React.StrictMode>,
        document.getElementById('root')
    );
};



rerenderEntireTree(state);

subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
