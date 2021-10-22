
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
            newPostText: ' '
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
                {message: 'Hello Pes'},
                {message: 'How Are you'},
                {message: 'I am bad'},
                {message: 'Yo'},
                {message: 'Yo'}]
        },

        navPage: {
            navFriends: [
                {nameFriend: 'Elsa'},
                {nameFriend: 'Emma'},
                {nameFriend: 'Emilia'}]
        }
    },
    _rerenderEntireTree(){console.log('State')},
    // не изменяющие функции
    subscribe (observer) {this._rerenderEntireTree = observer},
    getState() {return this._state;},
    //Приватные функции
    _addPost() {
        let newPost = {
            id: 7,
            post: this._state.profilePage.newPostText,
            likes: 0
        };

        this._state.profilePage.postArray.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree(this._state);
    },
    _upTxtP (newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },

    dispatch (action) {
         if(action.type ==='ADD-POST')
             this._addPost();
         else if(action.type === 'UPDATE-NEW-POST-TEXT')
             this._upTxtP(action.textNew);
         else alert("Errrror");

    }

}

export default store;