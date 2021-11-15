import React from 'react'
import pm from "../Profile.module.css";
import {Field, reduxForm} from "redux-form";
import Post from "../Post/Post";
import {maxLengthCreator, requiredField} from "../../../basket/validators/validators";
import {Textarea} from "../../../basket/FormsControls/FormsControls";

let maxLength =  maxLengthCreator(10);

const Wall = React.memo( (props)=>{
    const onSubmit = (formData) =>{props.addPost(formData.posts);};
    let ollPost = props.ollPostElement.map(p => <Post message={p.post} like={p.likes} key={p.id}/>);

    return (
    <div>
        <div className={pm.posts}>
            <h3>My Post</h3>
            <InputNewPostReduxForm onSubmit={onSubmit}/>
            {ollPost}
        </div>
    </div>)
});



const InputNewPost = React.memo((props) => {
    return  <form onSubmit={props.handleSubmit}>
        <div>
            <Field  placeholder={"Post"} name={"posts"} component={Textarea} validate={[requiredField, maxLength]} />
        </div>
        <button>
            Send Post
        </button>
    </form>
});

const InputNewPostReduxForm = reduxForm({
    // a unique name for the form
    form: 'posts'
})(InputNewPost);


export default Wall;