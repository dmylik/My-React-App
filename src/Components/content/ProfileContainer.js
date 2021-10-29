import React from 'react'
import {addPostActionCreator, updateNewTextPostActionCreator} from "../../redux/reducers/profile-reducer";
import ProfileAPI from "./Profile";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import Post from "./Post/Post";



class ProfileClass extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                // this.props.setUserProfile(response.data);


            });
    }
    ollPostElement = this.props.ollPost.postArray.map(p => <Post message={p.post} like={p.likes} key={p.id}/>);
    newPostElement = this.props.newPostText;

    onAddPost = () => {this.props.addPost();};
    onPostChange = (e) => {this.props.upTxtP(e.target.value);};

    render() {
        return(<ProfileAPI newPostElement={this.newPostElement}
                           ollPostElement={this.ollPostElement}
                           onAddPost={this.onAddPost}
                           onPostChange={this.onPostChange}

        />)
    }
};


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
const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(ProfileClass);


export default ProfileContainer;