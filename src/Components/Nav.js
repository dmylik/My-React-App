import React from 'react'
import nm from '../Style/Nav.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return(
        <nav className={nm.nav}>
            <div className={nm.item}> <NavLink to="/profile" activeClassName={nm.active}>Profile</NavLink></div>
            <div className={nm.item}> <NavLink to="/dialogs" activeClassName={nm.active}>Message</NavLink></div>
            <div className={nm.item}> <NavLink to="/news" activeClassName={nm.active}>News </NavLink></div>
            <div className={nm.item}> <NavLink to="/music" activeClassName={nm.active}>Music </NavLink></div>
            <div className={nm.item}> <NavLink to="/settings" activeClassName={nm.active}>Settings </NavLink></div>
        </nav>
    )

}

export default Navbar