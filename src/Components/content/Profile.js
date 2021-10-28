import React from 'react'
import pm from '../../Style/content/Profile.module.css'
import Post from "./Post/Post";
import fordMustang from '../../assets/photo/ford.mustamg69.jpg'

// Класовая компанента Profile
class ProfileClass extends React.Component {
    ollPostElement = this.props.ollPost.postArray.map(p => <Post message={p.post} like={p.likes} key={p.id}/>);
    newPostElement = this.props.newPostText;

    onAddPost = () => {this.props.addPost();};
    onPostChange = (e) => {this.props.upTxtP(e.target.value);};

    render() {
        return(
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
                            <textarea value={this.newPostElement} onChange={this.onPostChange}/>
                        </div>
                        <div>
                            <button onClick={this.onAddPost}>Add Post</button>
                        </div>
                    </div>
                    {this.ollPostElement}
                </div>
            </div>)
    }
}

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
}


export default ProfileFunction