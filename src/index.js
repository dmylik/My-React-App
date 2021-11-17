import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import MainApp from "./App";


// let h1 = document.createElement("h1");
// h1.innerHTML = "New Element Virtual DOM";
// document.querySelector('body').appendChild(h1);

ReactDOM.render(<MainApp/>,document.getElementById('root'));

reportWebVitals();
