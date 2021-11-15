import React from 'react'
import fordMustang from '../../../assets/photo/ford.mustamg69.jpg'
import Preloader from "../../../basket/Preloader/Preloader";
import uim from './user.info.module.css'
import UserStatus from "./UserStatus";
import UserStatusHook from "./UserStatusHook";

// Класовая компанента Profile
const UserInformation = React.memo((props) => {
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

                <div className={uim.userText}>
                    <h3>{props.profile.fullName}</h3>

                    <UserStatusHook status={props.status} updateStatus={props.updateStatus}/>

                    <br/>
                    <table>
                        {props.profile.contacts.facebook ? <tr>
                            <td>facebook:</td>
                            <tr> {props.profile.contacts.facebook}</tr>
                        </tr> : ''}
                        {props.profile.contacts.website ? <tr>
                            <td>website:</td>
                            <tr> {props.profile.contacts.website}</tr>
                        </tr> : ''}
                        {props.profile.contacts.vk ? <tr>
                            <td>vk:</td>
                            <tr> {props.profile.contacts.vk}</tr>
                        </tr> : ''}
                        {props.profile.contacts.twitter ? <tr>
                            <td>twitter:</td>
                            <tr> {props.profile.contacts.twitter}</tr>
                        </tr> : ''}
                        {props.profile.contacts.instagram ? <tr>
                            <td>instagram:</td>
                            <tr> {props.profile.contacts.instagram}</tr>
                        </tr> : ''}
                        {props.profile.contacts.youtube ? <tr>
                            <td>youtube:</td>
                            <tr> {props.profile.contacts.youtube}</tr>
                        </tr> : ''}
                        {props.profile.contacts.github ? <tr>
                            <td>github:</td>
                            <tr> {props.profile.contacts.github}</tr>
                        </tr> : ''}
                        {props.profile.contacts.mainLink ? <tr>
                            <td>mainLink:</td>
                            <tr> {props.profile.contacts.mainLink}</tr>
                        </tr> : ''}
                    </table>
                </div>
            </div>
        )
});

export default UserInformation