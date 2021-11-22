import React from 'react'
import {
    addPostActionCreator,
    getStatusThunkCreator,
    getUserProfileThunkCreater, savePhotoThunkCreator, saveUserInfoThunkCreator,
    setUserProfileAC,
    updateStatusThunkCreator
} from "../../redux/reducers/profile-reducer";
import ProfileAPI from "./Profile";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";



class ProfileClass extends React.Component {
    refreshProfile () {
        // Получение id выбраного пользователся
        let userID = this.props.match.params.userId;
        // если его нет, переходим на свой профиль
        if (!userID){
            userID= this.props.authUserId;
            if(!userID)
                this.props.history.push("/login");
        }
        this.props.getUserProfileTC(userID);
        this.props.getStatusTC(userID);
    }
    componentDidMount() {this.refreshProfile();}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile();


        }
    }

    render() {
        if (!this.props.isAuth)
            return <Redirect to={'/login'}/>;
        return(<ProfileAPI {...this.props}
                           ollPostElement={this.props.ollPost.postArray}
                           addPost={this.props.addPost}
                           isOwner = {!this.props.match.params.userId}
                           savePhoto ={this.props.savePhoto}
                           saveUserInfo={this.props.saveUserInfo}

                           profile={this.props.profile}
                           status ={this.props.status}
                           updateStatus = {this.props.updateStatusTC}
        />)
    }
};


// Функция которая передает данные
let mapStateToProps = (state)=> {
    return {
        ollPost: state.profilePage,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.authReducer.userId,
        isAuth: state.authReducer.isAuth

    }
};

// функция которая передает объект "функции" для выполнения в Redux
// обект actionCreater для упрощенной схемы передачи их redux
// redux сам собирает объект как mapDispatchToProps
// если  назвать функции в reducer и container можно еще упростить код
let objectAC = {
    addPost: addPostActionCreator,
    setUserProfile: setUserProfileAC,
    getUserProfileTC: getUserProfileThunkCreater,
    getStatusTC: getStatusThunkCreator,
    updateStatusTC: updateStatusThunkCreator,
    savePhoto: savePhotoThunkCreator,
    saveUserInfo: saveUserInfoThunkCreator

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