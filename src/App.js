import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./Components/Headep";
import Navbar from "./Components/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import ProfileContainer from "./Components/content/ProfileContainer";
import DialogsContainer from "./Components/dialogs/DialogsContainer";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                {/*<Navbar navFr ={props.state.navPage.navFriends}/>*/}
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' render={()=><DialogsContainer store={props.store}/>} />*/}
                    {/*<Route path='/profile' render={()=><ProfileContainer store={props.store}/>} />*/}

                    <Route path='/dialogs' render={()=><DialogsContainer/>} />
                    <Route path='/profile' render={()=><ProfileContainer/>} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
