import React from 'react'
import dm from '../../Style/gialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";

// Презентационная (функциональная) компонента
const Dialogs = (props) => {
    let dialogsArray = props.ollMess.dialogsArray.map(d => <DialogItem name= {d.name} id={d.id}/>);
    let messagesElemrnt = props.ollMess.messagesArray.map(m =>  <Message message={m.message}/> );
    let newMessageBody =  props.newMessageBody;

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
                <div>{messagesElemrnt}</div>
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
                <img src='https://img1.goodfon.ru/original/800x480/4/6c/emma-watson-emma-uotson-3179.jpg'/>
            </div>
            <div className={dm.dialogsName}>
                <NavLink to={'/dialogs/d' + props.id}>{props.name} </NavLink>
            </div>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={dm.message}>{props.message}</div>
    )
}

export default Dialogs