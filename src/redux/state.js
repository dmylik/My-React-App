import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";

// Store  (BLL) данные для отрисовки UI

let store = {
    //Приватные данные
    _state: {
        profilePage: {
            postArray: [
                {id: 1, post: 'Hello Pes', likes: 234},
                {id: 2, post: 'This is first React project', likes: 1},
                {id: 3, post: 'I am lus', likes: 941},
                {id: 4, post: 'This is bad idea', likes: 6},
                {id: 5, post: 'I know((', likes: 23},
                {id: 6, post: 'oh no', likes: 1}],
            newPostText: ' ',
        },

        messagesPage: {
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
        },

        navPage: {
            navFriends: [
                {nameFriend: 'Elsa'},
                {nameFriend: 'Emma'},
                {nameFriend: 'Emilia'}]
        }
    },
    //переотрисовка UI
    _rerenderEntireTree() {
        console.log('State')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },
    //Возврат state
    getState() {
        return this._state;
    },

    // обработка приходимых данный (ввод текста, нажате клавиши)
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage =  dialogsReducer(this._state.messagesPage, action);
        this._rerenderEntireTree(this._state);
    }
};
export default store;