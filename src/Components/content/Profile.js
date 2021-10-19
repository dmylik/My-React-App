import React from 'react'
import pm from '../../Style/content/Profile.module.css'
import Post from "./Post";


const Profile = () => {

    let ollPostArray = [
        {id: 1, post: 'Hello Pes', likes: 234},
        {id: 2, post: 'This is first React project', likes: 1},
        {id: 3, post: 'I am lus', likes: 941},
        {id: 4, post: 'This is bad idea', likes: 6},
        {id: 5, post: 'I know((', likes: 23},
        {id: 6, post: 'oh no', likes: 1}
    ];

    let ollPostElement = ollPostArray.map(p =>   <Post message={p.post} like={p.likes}/>);

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
                {ollPostElement}
                {/*<Post message={ollPostArray[0].post} like={ollPostArray[0].likes}/>*/}
            </div>

        </div>
    )
}


export default Profile