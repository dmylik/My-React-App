import React from 'react'
import styleUM from './style/Users.module.css'

let Users = (props) => {

    // проверка на наличие в масиве данных
    if (props.users.length === 0) {
        let imageElizabetURL = 'https://img1.goodfon.ru/original/960x854/d/36/elizabet-olsen-elizabeth-3196.jpg';
        props.setUsers([
            {
                id: 1,
                photoURL: imageElizabetURL,
                followed: false,
                fullName: 'Dima M',
                status: 'I am a Bigg Boss',
                location: {city: 'Brest', country: 'VKL'}
            },
            {
                id: 2,
                photoURL: imageElizabetURL,
                followed: true,
                fullName: 'Stas P',
                status: 'I am a Lus',
                location: {city: 'Moscow', country: 'USSR'}
            },
            {
                id: 3,
                photoURL: imageElizabetURL,
                followed: true,
                fullName: 'Dmitry Z',
                status: 'I am a broser',
                location: {city: 'Minsk', country: 'VKL'}
            },
            {
                id: 4,
                photoURL: imageElizabetURL,
                followed: false,
                fullName: 'Koly N',
                status: 'I am a fraend',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ]);
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div className={styleUM.userImage}>
                        <img src={u.photoURL}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status} </div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }

    </div>
};

export default Users;