import React from 'react'
import dm from '../../Style/gialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={dm.dialogModule}>
            <div className={dm.dialogsItem}>
                <DialogItem name='Dmitry' id='1'/>
                <DialogItem name='Viktor' id='2'/>
                <DialogItem name='Nikola' id='3'/>
                <DialogItem name='Stanislav' id='4'/>
                <DialogItem name='Kirill'   id='5'/>
                <DialogItem name='Aleksii' id='6'/>
                <DialogItem name='Leha'     id='7'/>

            </div>
            <div className={dm.messages}>
                <Message message = 'Hello Kola'/>
                <Message message = 'How Are you'/>
                <Message message = 'I am bad'/>
            </div>

        </div>)

}

const DialogItem =(props) =>{
    return(
        <div className={dm.dialog}><NavLink to={'/dialogs/d' + props.id}>{props.name} </NavLink></div>
    )
}

const Message = (props) =>{
    return(
        <div className={dm.message}>{props.message}</div>

    )
}

export default Dialogs