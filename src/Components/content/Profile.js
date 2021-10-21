import React from 'react'
import pm from '../../Style/content/Profile.module.css'
import Post from "./Post";


const Profile = (props) => {
    let ollPostElement = props.ollPost.postArray.map(p =>
        <Post message={p.post} like={p.likes}/>);

    let newPostElement = React.createRef();

    let addPost = ()=> {
        props.addPost();}

    let onPostChange = ()=>{
        debugger;
        let textNew = newPostElement.current.value;
        props.upTxtP(textNew);
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
                        <textarea ref={newPostElement} onChange={onPostChange}/>
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