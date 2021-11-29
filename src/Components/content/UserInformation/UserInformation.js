import React, {useState} from 'react'
import fordMustang from '../../../assets/photo/ford.mustamg69.jpg'
import Preloader from "../../../basket/Preloader/Preloader";
import uim from './user.info.module.css'
import UserDataForm from "./UserContacts/UserDataForm";
import UserContacts from "./UserContacts/UserContacts";


// Класовая компанента Profile
// profile/20282
const UserInformation = React.memo((props) => {
    let [editMode, setEditMode] = useState(false);

    const onSubmit =  (formData1) =>{
        props.saveUserInfo(formData1).then(()=>{setEditMode(false);})
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
                </div>

                <div className={uim.borderOll}>
                {editMode
                    ? <UserDataForm initialValues={props.profile}
                                    profile={props.profile}
                                    onSubmit={onSubmit}
                                    status={props.status}
                                    onMainPhotoSelected ={onMainPhotoSelected}
                                    isOwner={props.isOwner}
                                    updateStatus={props.updateStatus} />

                    : <UserContacts profile={props.profile}
                                    status={props.status}
                                    updateStatus={props.updateStatus}
                                    setEditMode = {setEditMode}
                                    isOwner={props.isOwner}
                    />
                }
                </div>
            </div>
        )
});

export default UserInformation