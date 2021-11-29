import styles from "./UserContacts.module.css"
import UserStatusHook from "./UserStatus/UserStatusHook"
import React from "react"
import cn from "classnames"
import userEdit from '../../../../assets/photo/editUser.png'


const UserContacts = ({profile, status, updateStatus, setEditMode, isOwner})=>{
    return <div className={ cn([styles.Inform], styles.TextName)}>
        {isOwner &&
        <img className={styles.imgUserEdit} src={userEdit} onClick={()=> {setEditMode(true)}}/>}

        <h1>{profile.fullName}</h1>

        <UserStatusHook status={status} updateStatus={updateStatus}/>

        <table className={styles.firsData}>
            <AboutUser UserTitle={"Looking for a job:"} UserValue={profile.lookingForAJob? "Yes" : "No"}/>
            <AboutUser UserTitle={"My prof. skills: "} UserValue={profile.lookingForAJobDescription}/>
            <AboutUser UserTitle={"About me:"} UserValue={profile.aboutMe}/>
        </table>

        <table className={styles.userText}>
            <h3>Contacts</h3>
            {Object.keys(profile.contacts).map(key => {
                return <Contact contactTitle={key} contactValue={profile.contacts[key]} key={key}/>
            })}
        </table>

    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <>
        {contactValue ?
            <tr>
                <td><b>{contactTitle}:</b></td>
                <td><p>{contactValue}</p></td>
            </tr> : ''}
    </>
}

const AboutUser = ({UserTitle, UserValue})=>{
    return <>
        {UserValue ?
            <tr>
                <td><b>{UserTitle}</b></td>
                <td><p>{UserValue}</p></td>
            </tr> : " "
        }
        </>
}

export default UserContacts