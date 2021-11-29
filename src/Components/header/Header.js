import React from 'react'
import {NavLink} from "react-router-dom";
import userImage from '../../assets/photo/user1.png'
import btn from '../../Style/Button.module.css'
import hm from './Header.module.css'


const Header = (props) => {
    return (
        <header className={hm.header}>
            <div className={hm.loginBlock}>
                    {props.isAuth
                        ?
                        <div>
                            <div className={hm.block}>
                                <NavLink to={'/profile/'}>
                                    <img className={hm.image} src={userImage}/>
                                </NavLink>
                            </div>
                            <div className={hm.block}>
                                <NavLink to={'/profile/'}>
                                    <a>{props.login}</a>
                                </NavLink>
                            </div>
                            <div className={hm.btnOut}>
                                <button className={btn.button} onClick={props.logout}>Log Out</button>
                            </div>
                        </div>

                        : <NavLink to={'/login'}>
                            <button className={btn.button}> Log In</button>
                        </NavLink>}</div>
        </header>
    )
};

export default Header