import React from 'react'
import {
    addPostActionCreator, getUserProfileThunkCreater,
    setUserProfileAC,
    updateNewTextPostActionCreator
} from "../../redux/reducers/profile-reducer";
import ProfileAPI from "./Profile";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import Post from "./Post/Post";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";



class ProfileClass extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userId;
        if (!userID) userID=2;

        this.props.getUserProfileTC(userID);
    }

    ollPostElement = this.props.ollPost.postArray.map(p => <Post message={p.post} like={p.likes} key={p.id}/>);
    newPostElement = this.props.newPostText;

    onAddPost = () => {this.props.addPost();};
    onPostChange = (e) => {this.props.upTxtP(e.target.value);};

    render() {
        return(<ProfileAPI {...this.props}
                           newPostElement={this.newPostElement}
                           ollPostElement={this.ollPostElement}
                           onAddPost={this.onAddPost}
                           onPostChange={this.onPostChange}
                           profile={this.props.profile}

        />)
    }
};


// Функция которая передает данные
let mapStateToProps = (state)=> {
    return {
        ollPost: state.profilePage,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
};

// функция которая передает объект "функции" для выполнения в Redux
// обект actionCreater для упрощенной схемы передачи их redux
// redux сам собирает объект как mapDispatchToProps
// если  назвать функции в reducer и container можно еще упростить код
let objectAC = {
    upTxtP: updateNewTextPostActionCreator,
    addPost: addPostActionCreator,
    setUserProfile: setUserProfileAC,
    getUserProfileTC: getUserProfileThunkCreater
};

let mapDispatchToProps = (dispatch) => {
    return{
        upTxtP: (text) =>{ dispatch(updateNewTextPostActionCreator(text));},
        addPost: ()=>{ dispatch(addPostActionCreator());},
        setUserProfile: (profile)=>{dispatch(setUserProfileAC(profile));}
    }
};

// делает запрос на сервак, для получения данных по URL
let WithUrlData =  withRouter(ProfileClass);

//Контенерная компонента который получает данные и передает их компонете Profile
const ProfileContainer = connect(mapStateToProps,objectAC)(WithUrlData);


export default ProfileContainer;