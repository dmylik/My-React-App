import React from 'react'
import pm from './Profile.module.css'
import Post from "./Post/Post";
import fordMustang from '../../assets/photo/ford.mustamg69.jpg'
import Preloader from "../../basket/Preloader/Preloader";
import UserInformation from "./UserInformation/UserInformation";
import Wall from "./Wall/Wall";

const Profile = React.memo(({profile, status, updateStatus,
                                ollPostElement, addPost, isOwner, savePhoto,
                                saveUserInfo }) => {
    if(!profile ){
        return <Preloader/>
    } else
    return(
        <div className={pm.item}>
            <UserInformation profile={profile}
                             status ={status}
                             updateStatus={updateStatus}
                             isOwner = {isOwner}
                             savePhoto = {savePhoto}
                             saveUserInfo = {saveUserInfo}
            />

            <Wall ollPostElement={ollPostElement}
                  profile={profile}
                  addPost={addPost}
            />
        </div>
    )
});


// Презентационная (функциональная) компонента Profile
const ProfileFunction = (props) => {
    let ollPostElement = props.ollPost.postArray.map(p => <Post message={p.post} like={p.likes} key ={p.id}/>);
    let newPostElement = props.newPostText;

    let onAddPost = ()=> {
        // props.dispatch(addPostActionCreator());
        props.addPost();
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        // props.dispatch (updateNewTextPostActionCreator(text));
        props.upTxtP(text);
    };

    return (
        <div className={pm.item}>
            <div className={pm.logoImage}>
                <img src={fordMustang}/>
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
                        <button onClick={onAddPost}>Add Post</button>
                    </div>
                </div>
                {ollPostElement}
            </div>
        </div>
    )
};


export default Profile
// export default ProfileFunction