import React from 'react'
import dm from '../../Style/gialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    let dialogsData = [
        {if: 1, name: 'Dmitry'},
        {if: 2, name: 'Viktor'},
        {if: 3, name: 'Nikola'},
        {if: 4, name: 'Stanislav'},
        {if: 5, name: 'Kirill'},
        {if: 6, name: 'Aleksii'},
        {if: 7, name: 'Leha'}    ];

    let MessagesArray = [
        {message: 'Hello Pes'},
        {message: 'How Are you'},
        {message: 'I am bad'},
        {message: 'Yo'},
        {message: 'Yo'}
    ];

    let dialogsArray = dialogsData.map(d => <DialogItem name= {d.name} id={d.id}/>);

    let messagesElemrnt = MessagesArray.map(m =>  <Message message={m.message}/> );

    return (
        <div className={dm.dialogModule}>
            <div className={dm.dialogsItem}>
                {dialogsArray}

                {/*<DialogItem name= {dialogsData[0].name} id={dialogsData[0].id}/>*/}
                {/*<DialogItem name= {dialogsData[1].name} id={dialogsData[1].id}/>*/}


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