import React from 'react'
import {sendMessageCreator} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


class DialogsAPI extends React.Component{
    onSendMessageClick =(txt)=> {this.props.sendMessage(txt);};

    render() {
        return (<Dialogs onSendMessageClick={this.onSendMessageClick}
                         newMessageBody ={this.props.ollMess.newMessageBody}
                         dialogsArray = {this.props.ollMess.dialogsArray}
                         messagesElement ={this.props.ollMess.messagesArray}
        />)
    }
};

let mapStateToProps = (state) =>{return { ollMess: state.messagesPage}};

let objectDispatchToProps = {sendMessage: sendMessageCreator};

// compose(
//     connect(mapStateToProps, objectDispatchToProps),
//     withAuthRedirect
// )(DialogsAPI);
//

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

