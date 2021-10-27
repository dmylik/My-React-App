const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

//Инициализация данных по умолчанию пока небыли переданный другие данные
let initialState = {
        dialogsArray: [
            {if: 1, name: 'Dmitry'},
            {if: 2, name: 'Viktor'},
            {if: 3, name: 'Nikola'},
            {if: 4, name: 'Stanislav'},
            {if: 5, name: 'Kirill'},
            {if: 6, name: 'Aleksii'},
            {if: 7, name: 'Leha'}],

        messagesArray: [
            {id: 1, message: 'Hello Pes'},
            {id: 2, message: 'How Are you'},
            {id: 3, message: 'I am bad'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}],

        newMessageBody: ' '
};

//Reducer для диалогов, принимает:
//state - только для себя (messagesPage) и
//action - набор всех возможных команд
const dialogsReducer = (state = initialState, action) => {

    let stateCopy ;



    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            stateCopy = {
                ...state,
                messagesArray: [...state.messagesArray, {id: 6, message: body}],
                newMessageBody:  ''
            };
            // stateCopy.messagesArray.push({id: 6, message: body});
            // stateCopy.newMessageBody = '';
            return stateCopy;

        case UPDATE_NEW_MESSAGE_TEXT:
            //можно сразу возвращать объект
            return  {
                ...state,
                newMessageBody: action.textMessageNew
            };
            // stateCopy.newMessageBody = action.textMessageNew;
            // return stateCopy;
        default:
            return state;
    }
};

// Если Reducer-е есть нужная команда из action
// она выполнится и вернет свой state для изменения
// Если команд не обнаружено, вохвращается state без изменения

// создание элементов action для каждой команды
export let sendMessageCreator = () => ({type: SEND_MESSAGE});
export let updateNewMessageTexeCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, textMessageNew: text}
};

export default dialogsReducer;