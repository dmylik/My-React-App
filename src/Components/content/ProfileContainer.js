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
import {Redirect, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";



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
        if (!this.props.isAuth)
            return <Redirect to={'/login'}/>;
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

export default compose(
    connect(mapStateToProps,objectAC),
    withRouter,
    withAuthRedirect
)(ProfileClass);
// compose заменяет все то, что написано ниже
// Выполнение от последнего к первому

// HOC хок для проверки подкиски
let AuthRedirectComponent = withAuthRedirect(ProfileClass);

// делает запрос на сервак, для получения данных по URL
let WithUrlData =  withRouter(AuthRedirectComponent);

//Контенерная компонента который получает данные и передает их компонете Profile
const ProfileContainer = connect(mapStateToProps,objectAC)(WithUrlData);

// export default ProfileContainer;