import React from 'react'
import styleUM from './style/Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/photo/user1.png'
import userPhotoE from '../../assets/photo/photoElizabetOlsen.jpg'
import {NavLink} from "react-router-dom";
import {userDeleteFollow, userPostFollow} from "../../api/api";

// Функциональная (для Контейнерной) компанента
let Users = (props) =>{
    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {pages.push(i);}

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styleUM.selectedPage}
                             onClick={(e) => {props.onPageChanged(p);}}>{p}</span>})}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div className={styleUM.userImage}>
                        <NavLink to={'/profile/'+ u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhotoE}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            // onClick вызови анонимную стрелочную функцию
                            // внутри  обращение к props
                            // из props берется
                            ? <button onClick={() => {
                                userDeleteFollow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                    });
                            }}>UnFollow</button>

                            : <button onClick={() => {
                                userPostFollow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                    });
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status} </div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

// Функциональная (для Контейнерной) компанента
let UsersF = (props) => {
    let imageElizabetURL = 'https://img1.goodfon.ru/original/960x854/d/36/elizabet-olsen-elizabeth-3196.jpg';
    // Side  Effect
    let getUsers = () => {
        // проверка на наличие в масиве данных
        if (props.users.length === 0) {
            // axion запросы с json данных
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            });

            // props.setUsers([
            //     {
            //         id: 1,
            //         photoURL: imageElizabetURL,
            //         followed: false,
            //         name: 'Dima M',
            //         status: 'I am a Bigg Boss',
            //         location: {city: 'Brest', country: 'VKL'}
            //     },
            //     {
            //         id: 2,
            //         photoURL: imageElizabetURL,
            //         followed: true,
            //         name: 'Stas P',
            //         status: 'I am a Lus',
            //         location: {city: 'Moscow', country: 'USSR'}
            //     },
            //     {
            //         id: 3,
            //         photoURL: imageElizabetURL,
            //         followed: true,
            //         name: 'Dmitry Z',
            //         status: 'I am a broser',
            //         location: {city: 'Minsk', country: 'VKL'}
            //     },
            //     {
            //         id: 4,
            //         photoURL: imageElizabetURL,
            //         followed: false,
            //         name: 'Koly N',
            //         status: 'I am a fraend',
            //         location: {city: 'Kiev', country: 'Ukraine'}
            //     }
            // ]);
        }
    };
    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div className={styleUM.userImage}>
                        <img src={u.photos.small != null ? u.photos.small : userPhotoE}/>
                    </div>
                    <div>
                        {u.followed
                            // onClick вызови анонимную стрелочную функцию
                            // внутри  обращение к props
                            // из props берется
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status} </div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }

    </div>
};

export default Users;