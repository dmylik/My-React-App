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
                    {/*<Route path='/dialogs' component={Dialogs} />*/}
                    {/*<Route path='/profile' component={Profile} />*/}

                    <Route path='/dialogs' render={()=><Dialogs ollMessage = {props.state.messagesPage.messagesArray}
                                                                ollDialogs = {props.state.messagesPage.dialogsArray}/>} />

                    <Route path='/profile' render={()=><Profile ollPost={props.state.profilePage}
                                                                addPost={props.addPost}
                                                                upTxtP={props.upTxtP}/>} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
