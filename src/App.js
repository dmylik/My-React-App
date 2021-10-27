import './App.css';
import React from "react";
import Header from "./Components/Headep";
import {BrowserRouter, Route} from "react-router-dom";
import ProfileContainer from "./Components/content/ProfileContainer";
import DialogsContainer from "./Components/dialogs/DialogsContainer";
import NavContainer from "./Components/nav/NavContainer";
import UsersContainer from "./Components/users/UsersContainer";



const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavContainer/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={()=><DialogsContainer/>} />
                    <Route path='/profile' render={()=><ProfileContainer/>} />
                    <Route path='/users' render={()=> <UsersContainer/>} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
