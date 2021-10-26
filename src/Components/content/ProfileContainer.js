import React from 'react'
import {addPostActionCreator, updateNewTextPostActionCreator} from "../../redux/reducers/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";

// Контенерная компонента который получает данные и передает их компонете Profile
// const ProfileContainer = (props) => {
//     let state = props.store.getState();
//     let addPost = ()=> {props.store.dispatch(addPostActionCreator());};
//     let onPostChange = (text) => {
//         props.store.dispatch (updateNewTextPostActionCreator(text));};
//     return
//         <Profile upTxtP={onPostChange}   //callback
//                  addPost={addPost}                  //callback
//                  ollPost={state.getState().profilePage}   //данные
//                  newPostText={state.profilePage.newPostText}/>
// };
// const ProfileContainer = (props) => {
//     //let state = props.store.getState();
//     // let addPost = ()=> {props.store.dispatch(addPostActionCreator());};
//     // let onPostChange = (text) => {
//     //     props.store.dispatch (updateNewTextPostActionCreator(text));};
//     return (
//         <StoreContext.Consumer>
//             {
//             (store)=> {
//                 let state = store.getState();
//
//                 let addPost = ()=> {store.dispatch(addPostActionCreator());};
//                 let onPostChange = (text) => {
//                    store.dispatch (updateNewTextPostActionCreator(text));};
//                 return <Profile upTxtP={onPostChange}   //callback
//                      addPost={addPost}                  //callback
//                      ollPost={state.profilePage}   //данные
//                      // ollPost={state.getState().profilePage}   //данные
//                      newPostText={state.profilePage.newPostText}/>
//             }
//             }
//         </StoreContext.Consumer>
//     )
// };

// Функция которая передает данные
let mapStateToProps = (state)=> {
    return {
        ollPost: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
};

// функция которая передает объект "функции" для выполнения в Redux
let mapDispatchToProps = (dispatch) => {
    return{
        upTxtP: (text) =>{ dispatch(updateNewTextPostActionCreator(text));},
        addPost: ()=>{ dispatch(addPostActionCreator());}
    }
};

//Контенерная компонента который получает данные и передает их компонете Profile
const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile);


export default ProfileContainer;