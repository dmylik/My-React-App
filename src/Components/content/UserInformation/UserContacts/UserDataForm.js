import React from "react";
import {Input, Textarea} from "../../../../basket/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";
import styles from "../../../../basket/FormsControls/FormsControls.module.css";
import btn from "../../../../Style/Button.module.css";
import cn from "classnames";
import userImage from "../../../../assets/photo/photoEdit.png";
import styleForm from './UserDataForm.module.css'


const UserDataForm = ({profile, isOwner, onMainPhotoSelected, handleSubmit, error})=>{
    return <form onSubmit={handleSubmit} className={styleForm.Form}>
        {isOwner &&
        <div className={styleForm.updatePhoto}>
            <label>
                <img src={userImage} alt="Нажмите для выбора файла."/>
                <input name="file"  type={"file"} onChange={onMainPhotoSelected} className={btn.TypeText}/>
            </label>
        </div>
        }
        <div className={styleForm.EditName}>
            <td><b>Full Name</b></td>
            <td><Field placeholder={"Full Name"} name={"fullName"} validate={[]} component={Input}/></td>
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
            <td><b>Looking for a job:</b></td>
            <td><Field placeholder={"Looking For a Job?"} name={"lookingForAJob"} validate={[]} type={"checkbox"} component={Input}/></td>
        </div>
        <div>
            <b>Contacts</b>:
            <table className={styleForm.userText}>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact contactTitle={key} contactValue={profile.contacts[key]} key={key}/>
                })}
            </table>
            {error && <div className={styles.formOllError}> {error} </div>}
        </div>



        <div >
            <button className={cn([btn.button],styleForm.button )}>Save</button>
        </div>
    </form>
};



const UserDataReduxForm = reduxForm({form: 'userData'})(UserDataForm);


const Contact = ({contactTitle, contactValue}) => {
    return <tr>
        <td><b>{contactTitle}:</b></td>
        <td><Field placeholder={contactTitle} name={"contacts." + contactTitle} validate={[]}  component={Input}/></td>
    </tr>

};


export  default UserDataReduxForm