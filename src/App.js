import './App.css';
import React, {Component} from "react";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import ProfileContainer from "./Components/content/ProfileContainer";
import HeaderContainer from "./Components/header/HeaderContainer";
import Login from "./Components/login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/reducers/app-reducer";
import Preloader from "./basket/Preloader/Preloader";
import store from "./redux/redux-store";
import NavContainer from "./Components/nav/NavContainer";
import {withSuspense} from "./hoc/withSuspense";

// import NavContainer from "./Components/nav/NavContainer";
// Пока вызова не будет загружаться эта страница не будет
// <React.Suspense> - необходим для временного пропуска данной загрузки
// позволяет не загружать редко используеммые страницы
const UsersContainer = React.lazy(()=> import("./Components/users/UsersContainer"));
const DialogsContainer = React.lazy(()=> import("./Components/dialogs/DialogsContainer"));


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized)
            return <Preloader/>
        else
            return (<div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavContainer/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/users' render= {withSuspense(UsersContainer)}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    </div>
                </div>
            )
    }
}

const mapStateToProps = (state) => {return {initialized: state.app.initialized}};

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp} ))
(App);

const MainApp = (props) => {
    return <Provider store={store}>
        <BrowserRouter>
            <AppContainer/>
        </BrowserRouter>
    </Provider>
};

export default MainApp

