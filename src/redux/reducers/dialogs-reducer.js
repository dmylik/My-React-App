import {profileAPI} from "../../api/api";

const SEND_MESSAGE = 'SEND_MESSAGE';
const SET_USER_DIALOG = 'SET_USER_DIALOG';
const SET_ID_DIALOG = 'SET_ID_DIALOG';
const DIALOG_USER_UPDATE = 'DIALOG_USER_UPDATE';
const ADD_USER_MESSAGE = 'ADD_USER_MESSAGE';
const DIALOG_OLL_USER = 'DIALOG_OLL_USER';

//Инициализация данных по умолчанию пока небыли переданный другие данные
let initialState = {
    dialogUser: [],
    ArrayUserIdToDialog: [19223, 20330, 19788, 20336, 19626, 19348, 2],
    dialogId: 2,
    dialogUserUpdate: false,
    UserIdDialog: {
        2: ["2", "Hi", "Dimmych"],
        19223: ["19223", "H1i", "Koly"],
        20330: ["20330", "H2i", "Victor"],
        19788: ["19788", "H3i", "Stanislaw"],
        20336: ["20336", "H4i", "Alexandra"],
        19626: ["19626", "H5i", "Alexei"],
        19348: ["19348", "H6i", "Kirill"]
    },
    messagesArray: [
        {id: 1, message: 'Hello Pes'},
        {id: 2, message: 'How Are you'},
        {id: 3, message: 'I am bad'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}],
    dialogsArray: [
        {if: 1, name: 'Dmitry'},
        {if: 2, name: 'Viktor'},
        {if: 3, name: 'Nikola'},
        {if: 4, name: 'Stanislav'},
        {if: 5, name: 'Kirill'},
        {if: 6, name: 'Aleksii'},
        {if: 7, name: 'Leha'}],
};

//Reducer для диалогов, принимает:
//state - только для себя (messagesPage) и
//action - набор всех возможных команд
const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.textMessageNew;
            stateCopy = {...state,
                messagesArray: [...state.messagesArray, {id: 6, message: body}]
            };
            // stateCopy.messagesArray.push({id: 6, message: body});
            // stateCopy.newMessageBody = '';
            return stateCopy;
        case SET_USER_DIALOG: {
            let body = action.arrTC;
            return {
                ...state, dialogUser: [...state.dialogUser, {user: body}]
            }
        }
        case SET_ID_DIALOG:
            return {...state, dialogId: action.dialogId}
        case DIALOG_OLL_USER:{
            console.log(state.UserIdDialog[2])
            return {...state,
                UserIdDialog: {...state.UserIdDialog,
                    [action.UserId]: [
                    ...state.UserIdDialog[action.UserId], action.messageTxt]}}}
        case DIALOG_USER_UPDATE:
            return {...state, dialogUserUpdate: action.isUpdate}
        case ADD_USER_MESSAGE:
            return {...state,
                ArrayUserIdToDialog: [...state.ArrayUserIdToDialog, action.newID]
            }



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
export let dialogUserUpdateCreater = (isUpdate) => ({type: DIALOG_USER_UPDATE, isUpdate});
export let setDialogIdCreater = (dialogId) => ({type: SET_ID_DIALOG, dialogId});
export let addUserIdMessage  = (newID) => ({type: ADD_USER_MESSAGE, newID});
export let addUserMessageCreater  = (UserId, messageTxt) => ({type: DIALOG_OLL_USER, UserId, messageTxt});


export let setDialogUserAC = (arrTC) => {
    return {type: SET_USER_DIALOG, arrTC}
};

export let getDialogUserThunkCreater = (userID) => async (dispatch) => {
    let arrayUserM = []
    userID.map(async (id) => {
        let data = await profileAPI.getUserProfile(id);
        dispatch(setDialogUserAC({name: data.fullName, userId: data.userId, small: data.photos.small}))})
    // dispatch(setDialogUserAC(arrayUserM));

}

export default dialogsReducer;