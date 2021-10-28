import React from 'react'
import styleUM from './style/Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/photo/user1.png'
import userPhotoE from '../../assets/photo/photoElizabetOlsen.jpg'

// Класовая компанента
class Users extends React.Component {
    // Метод componentDidMount() запускается после того,
    // как компонент отрендерился в DOM
    // componentDidMount() метод жизненного цикла в класс
    componentDidMount() {
        // axion запросы с json данных
        // alert("New object"); отрабатывет один раз
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);});
    }


    render() {
        let pageCount = this.props.totalCount / this.props.pageSize;
        let pages = [];
        for(let i=1; i<=pageCount; i++){
            pages.push(i);
        }
        return <div>
            <div>
                {pages.map(p=> {
                    return <span className={this.props.currentPage===p && styleUM.selectedPage}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div className={styleUM.userImage}>
                        <img src={u.photos.small != null ? u.photos.small : userPhotoE}/>
                    </div>
                    <div>
                        {u.followed
                            // onClick вызови анонимную стрелочную функцию
                            // внутри  обращение к this.props
                            // из this.props берется
                            ? <button onClick={() => {this.props.unfollow(u.id)}}>UnFollow</button>
                            : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>
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

    }


}

export default Users;