import React from 'react'
import {
    addPostActionCreator,
    setUserProfileAC,
    updateNewTextPostActionCreator
} from "../../redux/reducers/profile-reducer";
import ProfileAPI from "./Profile";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import Post from "./Post/Post";
import {withRouter} from "react-router-dom";



class ProfileClass extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userId;
        if (!userID) userID=2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userID)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
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
const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(WithUrlData);


export default ProfileContainer;