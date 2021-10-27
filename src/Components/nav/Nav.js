import React from 'react';
import nm from '../../Style/Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    let treeFr = props.navPage.navFriends.map(f => <NavFriends name={f.nameFriend} key ={f.id}/>);

    return (
        <nav className={nm.nav}>
            <div>
                <div className={nm.item}><NavLink to="/profile" activeClassName={nm.active}>Profile</NavLink></div>
                <div className={nm.item}><NavLink to="/dialogs" activeClassName={nm.active}>Message</NavLink></div>
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

const NavFriends =(props)=>{
    return (
        <div className={nm.navfriends}>
            <div><img className={nm.img} src='https://img5.goodfon.ru/original/800x480/d/13/eiza-gonzalez-devushka-vzgliad-foto-aktrisa-krasotka.jpg'/></div>
            <div className={nm.nameFriend} ><h4>{props.name}</h4></div>
        </div>

    )
};

export default Nav