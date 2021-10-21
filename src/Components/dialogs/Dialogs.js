import React from 'react'
import dm from '../../Style/gialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";
import pm from "../../Style/content/Profile.module.css";

const Dialogs = (props) => {
    let dialogsArray = props.ollDialogs.map(d => <DialogItem name= {d.name} id={d.id}/>);
    let messagesElemrnt = props.ollMessage.map(m =>  <Message message={m.message}/> );

    let newMessageElement = React.createRef();

    let onAddMessage = ()=> {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={dm.dialogModule}>
            <div className={dm.dialogsItem}>
                {dialogsArray}
                {/*<DialogItem name= {dialogsData[0].name} id={dialogsData[0].id}/>*/}
            </div>
            <div className={dm.messages}>
                {/*<Message message={Messages[0].message}>*/}
                {messagesElemrnt}

                <div className={dm.addMessage}>
                    Write text on new Message
                    <div>
                        <textarea ref={newMessageElement}></textarea>
                    </div>
                    <div>
                        <button onClick={onAddMessage}>Add Message</button>
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