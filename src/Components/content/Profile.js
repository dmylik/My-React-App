import React from 'react'
import pm from '../../Style/content/Profile.module.css'
import Post from "./Post";
import {addPostActionCreator, updateNewTextPostActionCreator} from "../../redux/reducers/profile-reducer";

const Profile = (props) => {
    let ollPostElement = props.ollPost.postArray.map(p =>
        <Post message={p.post} like={p.likes}/>);

    // let newPostElement = React.createRef();
    let newPostElement = props.ollPost.newPostText;

    let addPost = ()=> {

        props.dispatch(addPostActionCreator());
        // props.addPost();
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch (updateNewTextPostActionCreator(text));
        // props.upTxtP(textNew);
    };

    return (
        <div className={pm.item}>
            <div className={pm.logoImage}>
                <img src='https://img4.goodfon.ru/original/1920x1200/5/8f/ford-mustang-boss-302-muscle-classic-1969.jpg'/>
            </div>
            <div>
                ProfileInfo
            </div>
            <div className={pm.posts}>
                <h3>My Post</h3>
                <div className={pm.addPost}>
                    <div>
                        <textarea value={newPostElement} onChange={onPostChange}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add Post</button>
                    </div>
                </div>
                {ollPostElement}
                {/*<Post message={ollPostArray[0].post} like={ollPostArray[0].likes}/>*/}
            </div>
        </div>
    )
}


export default Profile