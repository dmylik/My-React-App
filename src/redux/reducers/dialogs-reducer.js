import {profileAPI} from "../../api/api";

const SEND_MESSAGE = 'SEND_MESSAGE';
const SET_USER_DIALOG = 'SET_USER_DIALOG';
const SET_ID_DIALOG = 'SET_ID_DIALOG';

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
        dialogUser: [],
        ArrayUserIdToDialog: [19223, 20330, 19788, 20336, 19626, 19348, 2],
        dialogId: 2,
        messagesArray: [
            {id: 1, message: 'Hello Pes'},
            {id: 2, message: 'How Are you'},
            {id: 3, message: 'I am bad'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}]
};

//Reducer для диалогов, принимает:
//state - только для себя (messagesPage) и
//action - набор всех возможных команд
const dialogsReducer = (state = initialState, action) => {
    let stateCopy ;
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.textMessageNew;
            stateCopy = {...state,
                messagesArray: [...state.messagesArray, {id: 6, message: body}],
            };
            // stateCopy.messagesArray.push({id: 6, message: body});
            // stateCopy.newMessageBody = '';
            return stateCopy;
        case SET_USER_DIALOG: {
            return {...state,
            dialogUser:[...state.dialogUser, {id: action.arr[0], user: action.arr[1]}]}}
        case SET_ID_DIALOG: {
            debugger
            return {...state, dialogId:  action.dialogId}}


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
export let sendMessageCreator = (text) => ({type: SEND_MESSAGE, textMessageNew: text});
export let setDialogIdCreater = (dialogId) => ( {type: SET_ID_DIALOG, dialogId});


export let setDialogUserAC = (arrTC, id) => {
    let arr = [id, arrTC];
    return {type: SET_USER_DIALOG, arr}};

export let getDialogUserThunkCreater = (userID, id) => async (dispatch) => {
        let data = await profileAPI.getUserProfile(userID);
        let arrTC= { name: data.fullName, userId: data.userId, small: data.photos.small}
        dispatch(setDialogUserAC(arrTC, id));
}

export default dialogsReducer;