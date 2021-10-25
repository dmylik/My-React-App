import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./Components/Headep";
import Navbar from "./Components/Nav";
import Profile from "./Components/content/Profile";
import Dialogs from "./Components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar navFr ={props.state.navPage.navFriends}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={()=><Dialogs state = {props.state.messagesPage}
                                                                dispatch={props.dispatch}/>} />

                    <Route path='/profile' render={()=><Profile ollPost={props.state.profilePage}
                                                                dispatch={props.dispatch}/>} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
