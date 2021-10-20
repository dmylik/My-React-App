import React from 'react'
import dm from '../../Style/gialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    let dialogsData = props.ollDialogs;
    let MessagesArray = props.ollMessage;

    let dialogsArray = dialogsData.map(d => <DialogItem name= {d.name} id={d.id}/>);

    let messagesElemrnt = MessagesArray.map(m =>  <Message message={m.message}/> );

    return (
        <div className={dm.dialogModule}>
            <div className={dm.dialogsItem}>
                {dialogsArray}
                {/*<DialogItem name= {dialogsData[0].name} id={dialogsData[0].id}/>*/}
            </div>
            <div className={dm.messages}>
                {/*<Message message={Messages[0].message}>*/}
                {messagesElemrnt}
            </div>
        </div>)

}

const DialogItem = (props) => {
    return (
        <div className={dm.dialog}><NavLink to={'/dialogs/d' + props.id}>{props.name} </NavLink></div>
    )
}

const Message = (props) => {
    return (
        <div className={dm.message}>{props.message}</div>

    )
}

export default Dialogs