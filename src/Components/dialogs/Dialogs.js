import React from 'react'
import dm from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../basket/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../basket/validators/validators";
import cn from "classnames"
import Preloader from "../../basket/Preloader/Preloader";

let maxLength =  maxLengthCreator(200);


const Dialogs = React.memo((props) => {
    // reverse() - мутирующая функция (нарушает имьютабильность), идя того, что бы не менять даные в global state
    // использовать нужно капию массива[...props.array].reverse() - мутирующая
    // let dialogsArray = [...props.dialogsArray].reverse().map(d => <DialogItem name= {d.name} id={d.id} key ={d.id}/>);
    // let messagesElement = [...props.messagesElement].reverse().map(m =>  <Message message={m.message} key ={m.id}/> );

    let dialogsArray = [];
    {props.dialogUser.length == 0
    ? <Preloader/>
    : dialogsArray = [...props.dialogUser].map(d => {
            return <DialogItem name= {d.user.name}
                        id={d.user.userId}
                        photo={d.user.small}
                        dialogId = {props.dialogId}
                        key ={d.user.id}
                        setID = {props.setID}/>});

    }

    let UserIdDialog = [...props.UserIdDialog[props.dialogId]].map(m =>  <Message message={m} key ={m}/> );

    const onSubmit = (formData) =>{props.addUserMessage( props.dialogId, formData.message)};

    return (
        <div className={dm.dialogModule}>

                <div className={dm.dialogsItem}>
                    {dialogsArray}
                </div>
                <div className={dm.messages}>
                    <div className={dm.ollMessage}>
                        {UserIdDialog}
                    </div>
                    <div className={dm.addMessage}>
                        <InputMessageReduxForm  onSubmit={onSubmit}/>
                    </div>
                </div>
            </div>)
});

const InputTextMessage = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={dm.textMessage}>
            <Field  placeholder={"Text"} name={"message"} component={Textarea} validate={[requiredField, maxLength]}/>
        </div>
        <button className={dm.buttonMessage}>
            Send Message
        </button>
    </form>
};

const InputMessageReduxForm = reduxForm({
    // a unique name for the form
    form: 'message'
})(InputTextMessage)


const DialogItem = (props) => {
    return (
        <div className={cn({[dm.dialogId]: props.dialogId ==  props.id }, dm.dialog) } onClick={()=>{props.setID(props.id)}}>
            <div className={dm.dialogsImg}>
                {props.photo != null
                 ? <img src={props.photo}/>
                 : <img src='https://img1.badfon.ru/original/960x800/3/dc/enn-heteuey-anne-hathaway-7419.jpg'/>}
            </div>
            <div className={dm.dialogsName}>
                <NavLink to={'/dialogs/d' + props.id}> <a >{props.name}</a> </NavLink>
            </div>
        </div>
    )
};

const Message = (props) => {
    return <div className={dm.divMessage}>
        <p className={dm.message}>
            {props.message}
        </p>
    </div>};

export default Dialogs