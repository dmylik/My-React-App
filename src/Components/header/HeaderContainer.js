import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {authMeThunk} from "../../redux/reducers/auth-reducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component{
    componentDidMount() {this.props.authMeThunk();}
    render() {return <Header {...this.props}/>}
}

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,

});




export default connect(mapStateToProps, { authMeThunk} )(HeaderContainer);