import React from 'react';
import Nav from "./Nav";
import {connect} from "react-redux";


let mapStateToProps = (state)=> {
    return {
        navPage: state.navPage
    }
};

// let mapDispatchToProps = ()=>{return {}};

const NavContainer = connect(mapStateToProps)(Nav);

export default NavContainer