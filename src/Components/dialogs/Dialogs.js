import React from 'react'
import dm from '../../Style/gialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";


class Dialogs extends React.Component{
    dialogsArray = this.props.ollMess.dialogsArray.map(d => <DialogItem name= {d.name} id={d.id} key ={d.id}/>);
    messagesElement =this.props.ollMess.messagesArray.map(m =>  <Message message={m.message} key ={m.id}/> );
    newMessageBody =  this.props.ollMess.newMessageBody;

    newMessageElement = (txt) => {this.props.updateNewMesBody(txt);};
    onSendMessageClick =()=> {this.props.sendMessage();};

    render() {
        return (
            <div className={dm.dialogModule}>
                <div className={dm.dialogsItem}>
                    {this.dialogsArray}
                </div>
                <div className={dm.messages}>
                    <div>{this.messagesElement}</div>
                    <div className={dm.addMessage}>
                        <div>
                        <textarea value={this.newMessageBody}
                                  // onChange={newMessageElement}
                                  onChange={(e)=>{this.newMessageElement(e.target.value)}}
                                  placeholder='Enter your message'></textarea>
                        </div>
                        <div>
                            {/*<button onClick={onSendMessageClick}>Send Message</button>*/}
                            <button onClick={(e)=>{this.onSendMessageClick()}}>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>)
    }
};


// Презентационная (функциональная) компонента
const Dialogs1 = (props) => {
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

const Message = (props) => {
    return (
        <div className={dm.message}>{props.message}</div>
    )
};

export default Dialogs1