let rerenderEntireTree = ()=>{console.log('State');};

let state = {
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
        navFriends:[
                {nameFriend: 'Elsa'},
                {nameFriend: 'Emma'},
                {nameFriend: 'Emilia'}]
    }
};

export let addPost = () => {
    let newPost = {
        id: 7,
        post: state.profilePage.newPostText,
        likes: 0
    };

    state.profilePage.postArray.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let upTxtP = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) =>{
    rerenderEntireTree = observer;

}

export default state;