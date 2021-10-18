import React from 'react'
import pm from '../../Style/content/Profile.module.css'
import Post from "./Post";


const Profile = () => {
    return (
        <div className={pm.item}>
            <div className={pm.logoImage}>
                <img src='https://img4.goodfon.ru/original/1920x1200/5/8f/ford-mustang-boss-302-muscle-classic-1969.jpg'></img>
            </div>
            <div>
                ProfileInfo
            </div>
            <div className={pm.posts}>
                <h3>My Post</h3>
                <div className={pm.addPost}>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add Post</button>
                    </div>

                </div>
                <Post message='Hi, how are you?' like='32'/>
                <Post message='this is my first post' like='234'/>
                <Post message='Props it very god' like='1'/>
                <Post message='o Kurva' like='9999'/>

            </div>

        </div>
    )
}


export default Profile