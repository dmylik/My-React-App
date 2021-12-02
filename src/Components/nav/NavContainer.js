import React from 'react';
import Nav from "./Nav";
import {connect} from "react-redux";
import {getUserFriendsProfileTC} from "../../redux/reducers/nav-reducer";



class NavAPI extends React.Component {
    componentDidMount() {
        this.props.getUserFriend(2,2);
        this.props.getUserFriend(1034,3);
        this.props.getUserFriend(19490,4);
    }

    render() {
        return<>
                <Nav navPage = {this.props.navPage}/>
            </>
    }
}

let mapStateToProps = (state)=> {
    return {
        navPage: state.navPage
    }
};

let objectAC = {
    getUserFriend: getUserFriendsProfileTC

};

// let mapDispatchToProps = ()=>{return {}};

const NavContainer = connect(mapStateToProps, objectAC)(NavAPI);

export default NavContainer