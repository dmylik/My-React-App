import React from 'react';
import Nav from "./Nav";
import {connect} from "react-redux";
import {getUserFriendsProfileTC} from "../../redux/reducers/nav-reducer";



class NavAPI extends React.Component {
    componentDidMount() {this.ollUser()}

    ollUser () {
        this.props.getUserFriend(2,0);
        this.props.getUserFriend(20000,1);
        this.props.getUserFriend(19223,2);
    }

    render() {
        return<><Nav navPage = {this.props.navPage}/></>
    }
}

let mapStateToProps = (state)=> {
    return {
        navPage: state.navPage,
    }
};

let objectAC = {
    getUserFriend: getUserFriendsProfileTC

};

// let mapDispatchToProps = ()=>{return {}};

const NavContainer = connect(mapStateToProps, objectAC)(NavAPI);

export default NavContainer