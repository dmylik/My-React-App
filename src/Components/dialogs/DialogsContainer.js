import React from 'react'
import {sendMessageCreator, updateNewMessageTexeCreator} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


//Контейнерная компанента для през.Компаненты (функциональная) Dialogs
// const DialogsContainer = (props) => {
//
//     let state = props.store.getState();
//
//     let onSendMessageClick = ()=> props.store.dispatch(sendMessageCreator());
//
//     let newMessageElement = (body) =>{
//         props.store.dispatch(updateNewMessageTexeCreator(body))
//     };
//
//     return (<Dialogs sendMessage={onSendMessageClick}
//                      updateNewMesBody = {newMessageElement}
//                      newMessageBody = {state.messagesPage.newMessageBody}
//                      ollMess = {state.messagesPage}/>)
//
// }

// const DialogsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState();
//
//                 let onSendMessageClick = () => store.dispatch(sendMessageCreator());
//
//                 let newMessageElement = (body) => {
//                     store.dispatch(updateNewMessageTexeCreator(body))
//                 };
//
//                 return (<Dialogs sendMessage={onSendMessageClick}
//                                  updateNewMesBody={newMessageElement}
//                                  newMessageBody={state.messagesPage.newMessageBody}
//                                  ollMess={state.messagesPage}/>)
//             }
//             }
//         </StoreContext.Consumer>)
//
// };

let mapStateToProps = (state) =>{
    return { ollMess: state.messagesPage}
};

let mapDispatchToProps =(dispatch) =>{
    return {
        sendMessage: ()=>{ dispatch(sendMessageCreator());},
        updateNewMesBody: (body)=>{ dispatch(updateNewMessageTexeCreator(body))}
    }
};

//Контейнерная компанента для през.Компаненты (функциональная) Dialogs
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer