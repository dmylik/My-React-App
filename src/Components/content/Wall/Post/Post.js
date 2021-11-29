import React from 'react'
import pm from './Post.module.css'
import cn from "classnames";
import like from '../../../../assets/photo/like.png'
import userPhotoE from "../../../../assets/photo/photoElizabetOlsen.jpg";

const Post = (props) => {
    return(
        <div className={pm.item}>
            <div className={pm.block}>
                <img className={pm.img} src={props.profile.photos.small != null ? props.profile.photos.small : userPhotoE}/>
            </div>
            <div className={cn([pm.block], pm.txtPost)}>
                <p>
                    {props.message}
                </p>
            </div>

            <img className={pm.LikeIMG} src={like}/>
            <span className={pm.txtLike}>{props.like}</span>

        </div>
    )
};

export default Post