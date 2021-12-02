import nm from "../Nav.module.css";
import nfm from "./nav.friends.module.css";
import React from "react";



const NavFriends =(props)=>{
    let EizaGonsalrzURL = 'https://img5.goodfon.ru/original/960x800/b/84/eiza-gonzalez-devushka-vzgliad-figura-krasotka-poza-aktrisa.jpg';
    return (
        <div className={nfm.navfriends}>
            <div><img className={nfm.img} src={EizaGonsalrzURL}/></div>
            <div className={nfm.nameFriend} ><h4>{props.name}</h4></div>
        </div>

    )
};

export default NavFriends