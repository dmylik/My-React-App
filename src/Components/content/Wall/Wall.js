import React from 'react'
import pm from "../Profile.module.css";

const Wall = (props)=>{
    return (
    <div>
        <div className={pm.posts}>
            <h3>My Post</h3>
            <div className={pm.addPost}>
                <div>
                    <textarea value={props.newPostElement} onChange={props.onPostChange}/>
                </div>
                <div>
                    <button onClick={props.onAddPost}>Add Post</button>
                </div>
            </div>
            {props.ollPostElement}
        </div>
    </div>)
};
export default Wall;