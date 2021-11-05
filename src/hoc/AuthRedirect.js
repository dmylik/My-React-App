import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

// для отдельной передачи данных о авторизации
let withAuthR = (state) => {
    return{isAuth: state.authReducer.isAuth}};

// HOC для проверки авторизации
// При положительном результат вернет пришедшую component
// При отрицательном, произойдет переброс на login (Redirect)
export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }

    // Второй оборот компоненты для конекта со store (двойной оборот)
    let ConnectRedirectComponent = connect(withAuthR)(RedirectComponent);

    return  ConnectRedirectComponent;
};