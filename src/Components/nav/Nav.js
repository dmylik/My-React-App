import React from 'react';
import nm from './Nav.module.css';
import {NavLink} from "react-router-dom";
import NavFriends from "./navFriends/NavFriends";

const Nav = (props) => {
    let treeFr = props.navPage.profileFriends.reverse().map(
        f => <NavFriends name={f.profile.fullName} photo={f.profile.photos.small} userId ={f.profile.userId} key ={f.id}/>);

    return (
        <nav className={nm.nav}>
            <div>
                <div className={nm.item}><NavLink to="/profile" activeClassName={nm.active}>Profile</NavLink></div>
                <div className={nm.item}><NavLink to="/dialogs" activeClassName={nm.active}>Message</NavLink></div>
                <div className={nm.item}><NavLink to="/users" activeClassName={nm.active}>Friends</NavLink></div>
                <div className={nm.item}><NavLink to="/news" activeClassName={nm.active}>News </NavLink></div>
                <div className={nm.item}><NavLink to="/music" activeClassName={nm.active}>Music </NavLink></div>
                <div className={nm.item}> <br></br></div>
                <div className={nm.item}><NavLink to="/settings" activeClassName={nm.active}>Settings </NavLink></div>
            </div>
            <div>
                <h2>Friends</h2>
                <div className={nm.ollfrainds}>
                    {treeFr}
                </div>

            </div>
        </nav>
    )
};


export default Nav