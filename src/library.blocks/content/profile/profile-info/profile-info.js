import React from 'react';
import ProfileText from './profile-text/profile-text.js';
import ProfilePic from '../../../pic-container/profile-pic/profile-pic.js';
import '../../content.css';
import './profile-info.css'

const ProfileInfo = () =>
    (
        <div className="profile-info">
            <ProfilePic />
            <ProfileText />
        </div>
    );

export default ProfileInfo;


