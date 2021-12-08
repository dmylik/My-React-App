import React from 'react'
import {
    addUserMessageCreater,
    dialogUserUpdateCreater,
    getDialogUserThunkCreater,
    sendMessageCreator,
    setDialogIdCreater
} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


class DialogsAPI extends React.Component{
    componentDidMount() {
        if(this.props.ollMess.ArrayUserIdToDialog.length > this.props.ollMess.dialogUser.length)
            this.props.getDialogUserTC(this.props.ArrayUserIdToDialog)
    }

    setID = (id) => {this.props.setDialogId(id)}

    onSendMessageClick =(txt)=> {this.props.sendMessage(txt);};

    render() {
        return <Dialogs onSendMessageClick={this.onSendMessageClick}
                        newMessageBody={this.props.ollMess.newMessageBody}
                        dialogsArray={this.props.ollMess.dialogsArray}
                        UserIdDialog={this.props.ollMess.UserIdDialog}
                        dialogUser={this.props.ollMess.dialogUser}
                        setID={this.setID}
                        dialogId={this.props.dialogId}
                        isUpdate={this.props.isUpdate}
                        addUserMessage={this.props.addUserMessage}

        />
    }
};

let mapStateToProps = (state) =>{return {
    ollMess: state.messagesPage,
    dialogId: state.messagesPage.dialogId,
    ArrayUserIdToDialog: state.messagesPage.ArrayUserIdToDialog,
    isUpdate: state.messagesPage.dialogUserUpdate
}};

let objectDispatchToProps = {
    sendMessage: sendMessageCreator,
    getDialogUserTC: getDialogUserThunkCreater,
    setDialogId: setDialogIdCreater,
    dialogUserUpdate: dialogUserUpdateCreater,
    addUserMessage: addUserMessageCreater
};

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

