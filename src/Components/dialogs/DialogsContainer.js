import React from 'react'
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


class DialogsAPI extends React.Component{
    newMessageElement = (txt) => {this.props.updateNewMesBody(txt);};
    onSendMessageClick =()=> {this.props.sendMessage();};

    render() {
        return (<Dialogs newMessageElement={this.newMessageElement}
                         onSendMessageClick={this.onSendMessageClick}
                         newMessageBody ={this.props.ollMess.newMessageBody}
                         dialogsArray = {this.props.ollMess.dialogsArray}
                         messagesElement ={this.props.ollMess.messagesArray}
        />)
    }
};

let mapStateToProps = (state) =>{
    return { ollMess: state.messagesPage}};

let objectDispatchToProps = {
        sendMessage: sendMessageCreator,
        updateNewMesBody: updateNewMessageTextCreator
};

compose(
    connect(mapStateToProps, objectDispatchToProps),
    withAuthRedirect
)(DialogsAPI);


// // HOC хок для проверки подкиски
// let AuthRedirectComponent = withAuthRedirect(DialogsAPI);
// //Контейнерная компанента для през.Компаненты (функциональная) Dialogs
// const DialogsContainer = connect(mapStateToProps, objectDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer


//функция, которая принимает во (1,2)(DialogsAPI)
// и затем с ней выполняет функции из 2->1 из (1,2)(DialogsAPI)
export default compose(
    connect(mapStateToProps, objectDispatchToProps),
    withAuthRedirect
)(DialogsAPI);

