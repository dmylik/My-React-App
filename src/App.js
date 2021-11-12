import './App.css';
import React, {Component} from "react";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import ProfileContainer from "./Components/content/ProfileContainer";
import DialogsContainer from "./Components/dialogs/DialogsContainer";
import NavContainer from "./Components/nav/NavContainer";
import UsersContainer from "./Components/users/UsersContainer";
import HeaderContainer from "./Components/header/HeaderContainer";
import Login from "./Components/login/Login";
import {connect} from "react-redux";
import {authMeThunk} from "./redux/reducers/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./redux/reducers/app-reducer";
import Preloader from "./basket/Preloader/Preloader";


class App extends Component {
    componentDidMount() {this.props.initializeApp();}

    render() {
        if(!this.props.initialized)
            return <Preloader/>
        else
            return (<div className='app-wrapper'>
                        <HeaderContainer/>
                        <NavContainer/>
                        <div className='app-wrapper-content'>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                        </div>
                    </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter, connect(mapStateToProps, { initializeApp} ))(App)



