import React from 'react'
import {
    addPostActionCreator,
    getStatusThunkCreator,
    getUserProfileThunkCreater,
    setUserProfileAC,
    updateStatusThunkCreator
} from "../../redux/reducers/profile-reducer";
import ProfileAPI from "./Profile";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";



class ProfileClass extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userId;
        if (!userID) userID=20553;

        this.props.getUserProfileTC(userID);
        this.props.getStatusTC(userID);
    }

    render() {
        if (!this.props.isAuth)
            return <Redirect to={'/login'}/>;
        return(<ProfileAPI {...this.props}
                           ollPostElement={this.props.ollPost.postArray}
                           addPost={this.props.addPost}

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
        status: state.profilePage.status
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
    updateStatusTC: updateStatusThunkCreator

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