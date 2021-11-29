import React from 'react'
import wall from "./Wall.module.css";
import {Field, reduxForm} from "redux-form";
import Post from "./Post/Post";
import {maxLengthCreator, requiredField} from "../../../basket/validators/validators";
import {Textarea} from "../../../basket/FormsControls/FormsControls";
import btn from "../../../Style/Button.module.css";
import cn from "classnames";

let maxLength =  maxLengthCreator(100);

const Wall = React.memo( (props)=>{
    const onSubmit = (formData) =>{props.addPost(formData.posts);};
    let ollPost = props.ollPostElement.map(p => <Post profile={props.profile} message={p.post} like={p.likes} key={p.id}/>);

    return (
    <div>
        <div className={wall.posts}>
            <h3>My Post</h3>
            <InputNewPostReduxForm onSubmit={onSubmit}/>
            <div>
                {ollPost}
            </div>
        </div>
    </div>)
});



const InputNewPost = React.memo((props) => {
    return  <form onSubmit={props.handleSubmit}>
        <div className={wall.writePost}>
            <div className={wall.block}>
                <Field className={wall.textarea}  placeholder={"Post"} name={"posts"} component={Textarea} validate={[requiredField, maxLength]} />
            </div>
            <div className={ cn([wall.block],wall.blockBtn )}>
                <button className={cn([btn.button],wall.buttonWail )}>Send Post</button>
            </div>
        </div>
    </form>
});

const InputNewPostReduxForm = reduxForm({
    // a unique name for the form
    form: 'posts'
})(InputNewPost);


export default Wall;