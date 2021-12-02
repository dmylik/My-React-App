import React from 'react'
import styleUM from './style/Users.module.css'
import userPhotoE from '../../assets/photo/photoElizabetOlsen.jpg'
import {NavLink} from "react-router-dom";
import btn from '../../Style/Button.module.css'

// Функциональная (для Контейнерной) компанента
let User = ({user, folProg, unFollowTC, followTC}) =>{
    return <div className={styleUM.divRow}>
        <div>
            <div className={styleUM.userImage}>
                <NavLink to={'/profile/'+ user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhotoE}/>
                </NavLink>
            </div>

        </div>
                <div>
                    <span>
                        <div><b className={styleUM.Name}>{user.name}</b></div>
                        <div><b className={styleUM.Status}>{user.status}</b></div>
                    </span>

                    <div className={styleUM.ollBtn}>
                    {user.followed
                        // onClick вызови анонимную стрелочную функцию
                        // внутри  обращение к props
                        // из props берется
                        // для disable кнопки, пока не пернутся данные с сервера
                        ? <button className={btn.button} disabled={folProg.some(id => id===user.id)}
                                  onClick={() => {unFollowTC(user.id);}}>
                            Follow</button>

                        : <button className={btn.button} disabled={folProg.some(id => id===user.id)}
                                  onClick={() => {followTC(user.id);}}>
                            UnFollow</button>
                    }
                </div>
                </div>

            </div>

};

export default User;