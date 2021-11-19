import React, {useState} from 'react'
import fordMustang from '../../../assets/photo/ford.mustamg69.jpg'
import Preloader from "../../../basket/Preloader/Preloader";
import uim from './user.info.module.css'
import UserStatusHook from "./UserStatusHook";
import UserDataForm from "./UserDataForm/UserDataForm";
import {Field} from "redux-form";
import {Textarea} from "../../../basket/FormsControls/FormsControls";

// Класовая компанента Profile
// profile/20282
const UserInformation = React.memo((props) => {
    let [editMode, setEditMode] = useState(false);

    const onSubmit =  (formData) =>{
        props.saveUserInfo(formData).then(()=>{setEditMode(false);})
        // setEditMode(false);
    };

    const onMainPhotoSelected = (e)=>{
        if(e.target.files.length ){props.savePhoto((e.target.files[0]));}};


    if (!props.profile) {
        return <Preloader/>
    } else
        return (
            <div className={uim.userItem}>
                <div className={uim.userImage}>
                    {props.profile.photos.large === null
                        ? <div className={uim.logoMustang}><img src={fordMustang}/></div>
                        : <div className={uim.logoUser}><img src={props.profile.photos.large}/></div>}
                    {props.isOwner && <div>
                    <input type={"file"} onChange={onMainPhotoSelected}/>
                    <button onClick={()=> {setEditMode(true)}}>Edit</button></div>
                    }
                </div>

                {editMode
                    ? <UserDataForm initialValues={props.profile}
                                    profile={props.profile}
                                    onSubmit={onSubmit}
                                    status={props.status}
                                    updateStatus={props.updateStatus} />
                    : <UserContacts profile={props.profile}
                                    status={props.status}
                                    updateStatus={props.updateStatus}/>
                }
            </div>
        )
});

const UserContacts = ({profile, status, updateStatus})=>{
    return <div className={uim.userText}>
        <h3>{profile.fullName}</h3>
        <UserStatusHook status={status} updateStatus={updateStatus}/>
        <div > Looking for a job: {profile.lookingForAJob? "Yes" : "No"}</div>
        <div><b>My professional skills: </b> {profile.lookingForAJobDescription}</div>
        <div><b>About me: </b> {profile.aboutMe}</div>

        <table className={uim.userText}>
            {Object.keys(profile.contacts).map(key => {
                return <Contact contactTitle={key} contactValue={profile.contacts[key]} key={key}/>
            })}
        </table>
    </div>
};

const Contact = ({contactTitle, contactValue}) => {
    return <div>
        {contactValue ?
        <tr>
            <td><b>{contactTitle}:</b></td>
            <td>{contactValue}</td>
        </tr> : ''}
    </div>
};

export default UserInformation