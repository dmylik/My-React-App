import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/reducers/auth-reducer";
import {getUsers} from "../../redux/selectors/users-selectors";

class HeaderContainer extends React.Component{
    render() {return <Header {...this.props} />}
}

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
    email: state.authReducer.email

});


export default connect(mapStateToProps, {  logout} )(HeaderContainer);