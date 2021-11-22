import React from "react";
import UserStatusHook from "../UserStatusHook";
import {Input, Textarea} from "../../../../basket/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";
import uim from "../user.info.module.css";
import styles from "../../../../basket/FormsControls/FormsControls.module.css";
import btn from "../../../../Style/Button.module.css";


const UserDataForm = ({profile, status, updateStatus, handleSubmit, error})=>{
    return <form onSubmit={handleSubmit}>
        <div>
            <b>Full Name</b>
            <Field placeholder={"Full Name"} name={"fullName"} validate={[]} component={Input}/>
        </div>
        <UserStatusHook status={status} updateStatus={updateStatus}/>
        <div> <b>Looking for a job:</b>
            <Field placeholder={"Looking For a Job?"} name={"lookingForAJob"} validate={[]} type={"checkbox"} component={Input}/>
        </div>
        <div>
            <b>My professional skills: </b>
            <Field placeholder={"Professional Skills"} name={"lookingForAJobDescription"} validate={[]}  component={Textarea}/>
        </div>
        <div>
            <b>About me: </b>
            <Field placeholder={"About Me"} name={"aboutMe"} validate={[]}  component={Textarea}/>
        </div>
        <div>
            <b>Contacts</b>:
            <table className={uim.userText}>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact contactTitle={key} contactValue={profile.contacts[key]} key={key}/>
                })}
            </table>
            {error && <div className={styles.formOllError}> {error} </div>}
        </div>
        <div >
            <button className={btn.button}>Save</button>
        </div>
    </form>
};

const UserDataReduxForm = reduxForm({form: 'userData'})(UserDataForm);


const Contact = ({contactTitle, contactValue}) => {
    return <div>
            <tr>
                <td><b>{contactTitle}:</b></td>
                <td><Field placeholder={contactTitle} name={"contacts." + contactTitle} validate={[]} component={Input}/></td>
            </tr>
    </div>
};


export  default UserDataReduxForm