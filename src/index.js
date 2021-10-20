import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let ollPostArray = [
    {id: 1, post: 'Hello Pes', likes: 234},
    {id: 2, post: 'This is first React project', likes: 1},
    {id: 3, post: 'I am lus', likes: 941},
    {id: 4, post: 'This is bad idea', likes: 6},
    {id: 5, post: 'I know((', likes: 23},
    {id: 6, post: 'oh no', likes: 1}
];

let dialogsData = [
    {if: 1, name: 'Dmitry'},
    {if: 2, name: 'Viktor'},
    {if: 3, name: 'Nikola'},
    {if: 4, name: 'Stanislav'},
    {if: 5, name: 'Kirill'},
    {if: 6, name: 'Aleksii'},
    {if: 7, name: 'Leha'}    ];

let MessagesArray = [
    {message: 'Hello Pes'},
    {message: 'How Are you'},
    {message: 'I am bad'},
    {message: 'Yo'},
    {message: 'Yo'}
];

ReactDOM.render(
  <React.StrictMode>
    <App ollPostApp = {ollPostArray} ollDialogsApp = {dialogsData} ollMessageApp ={MessagesArray}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
