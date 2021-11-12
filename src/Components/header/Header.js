import React from 'react'
import hm from '../../Style/Header.module.css'
import {NavLink} from "react-router-dom";
import userImage from '../../assets/photo/user1.png'


const Header = (props) => {
    return(
        <header className={hm.header}>
            <img src={userImage}/>
            <div className={hm.loginBlock}>
                {props.isAuth
                    ? <div> {props.email} - <button onClick={props.logout}>Log Out</button></div>
                    : <NavLink to={'/login'}>Log In</NavLink>}
            </div>
        </header>
    )
};

export default Header