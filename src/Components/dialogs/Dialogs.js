import React from 'react'
import dm from '../../Style/gialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../basket/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../basket/validators/validators";

let maxLength =  maxLengthCreator(50);


const Dialogs = (props) => {
    let dialogsArray = props.dialogsArray.map(d => <DialogItem name= {d.name} id={d.id} key ={d.id}/>);
    let messagesElement =props.messagesElement.map(m =>  <Message message={m.message} key ={m.id}/> );
    let newMessageBody =  props.newMessageBody;

    const onSubmit = (formData) =>{props.onSendMessageClick(formData.message);};

    return (
        <div className={dm.dialogModule}>
                <div className={dm.dialogsItem}>
                    {dialogsArray}
                </div>
                <div className={dm.messages}>
                    <div>{messagesElement}</div>
                    <div className={dm.addMessage}>
                        <InputMessageReduxForm  onSubmit={onSubmit}/>
                    </div>
                </div>
            </div>)
};

const InputTextMessage = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field  placeholder={"Text"} name={"message"} component={Textarea}
                    validate={[requiredField, maxLength]}/>
        </div>
        <button>
            Send Message
        </button>
    </form>
};

const InputMessageReduxForm = reduxForm({
    // a unique name for the form
    form: 'message'
})(InputTextMessage)



// Презентационная (функциональная) компонента
const  Dialogs1 = (props) => {
    let dialogsArray = props.ollMess.dialogsArray.map(d => <DialogItem name= {d.name} id={d.id} key ={d.id}/>);
    let messagesElement = props.ollMess.messagesArray.map(m =>  <Message message={m.message} key ={m.id}/> );
    let newMessageBody =  props.ollMess.newMessageBody;

    let onSendMessageClick = ()=> {
        props.sendMessage();
        // props.dispatch(sendMessageCreator())
    };

    let newMessageElement = (e) =>{
        let body = e.target.value;
        props.updateNewMesBody(body);
        // props.dispatch(updateNewMessageTexeCreator(body));
    };

    return (
        <div className={dm.dialogModule}>
            <div className={dm.dialogsItem}>
                {dialogsArray}
            </div>
            <div className={dm.messages}>
                <div>{messagesElement}</div>
                <div className={dm.addMessage}>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={newMessageElement}
                                  placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>)

}

const DialogItem = (props) => {
    return (
        <div className={dm.dialog}>
            <div className={dm.dialogsImg}>
                <img src='https://img1.badfon.ru/original/960x800/3/dc/enn-heteuey-anne-hathaway-7419.jpg'/>
            </div>
            <div className={dm.dialogsName}>
                <NavLink to={'/dialogs/d' + props.id}>{props.name} </NavLink>
            </div>
        </div>
    )
};

const Message = (props) => {return <div className={dm.message}>{props.message}</div>};

export default Dialogs