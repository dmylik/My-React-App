import uim from "../user.info.module.css";
import UserStatusHook from "../UserStatusHook";
import React from "react";

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

export default UserContacts