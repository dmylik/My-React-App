import nm from "../Nav.module.css";
import nfm from "./nav.friends.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

let EizaGonsalrzURL = 'https://img5.goodfon.ru/original/960x800/b/84/eiza-gonzalez-devushka-vzgliad-figura-krasotka-poza-aktrisa.jpg';

const NavFriends =(props)=>{
    return (
        <div className={nfm.navfriends}>
            <NavLink to={'/profile/'+ props.userId}>
            {props.photo
                ? <div className={nfm.Photo}><img className={nfm.img} src={props.photo}/></div>
                : <div className={nfm.Photo}><img className={nfm.img} src={EizaGonsalrzURL}/></div>
            }
            </NavLink>
            <div className={nfm.nameFriend} ><b>{props.name}</b></div>
        </div>

    )
};

export default NavFriends