import React from 'react';
import './user-info.css'

const UserInfo = (props) => {

    let follow = () => {
        let followState = !props.follow;
        props.followAction(props.id, followState);
    }

    let followBtnText = props.follow ? "UNFOLLOW" : "FOLLOW";

    return (
        <div className="user-info">
            <div className="user-info-left">
                <img className="user-info-left_img" src={props.profilePic} alt="" />
                <button className="block user-info-left_button" onClick={follow}>{followBtnText}</button>
            </div>
            <div className="user-info-content">
                <div className="user-info-content_name">{props.name}</div>
                <div className="user-info-content_status">{props.status}</div>
                <div className="user-info-content_city">{props.city}</div>
            </div>
        </div>
    )
}

export default UserInfo;