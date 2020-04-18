import React from 'react';
import './profile.css';
import ProfileBackground from '../../pic-container/profile-background/profile-background.js';
import ProfileInfo from './profile-info/profile-info.js';
import ProfileNewPostContainer from './profile-new-post/profile-new-post-container.js';
import ProfilePostsContainer from './profile-posts/profile-posts-container.js';

const Profile = (props) => {
    return(
        <div className="profile">
            <ProfileBackground />
            <ProfileInfo />
            <ProfileNewPostContainer store={props.store}/>
            <ProfilePostsContainer store={props.store}/>
       </div>
    );
}

export default Profile;
