import React from 'react';
import './profile.css';
import ProfileBackground from '../../pic-container/profile-background/profile-background.js';
import ProfileInfo from './profile-info/profile-info.js';
import ProfileNewPost from './profile-new-post/profile-new-post.js';
import ProfilePost from './profile-post/profile-post.js';

const Profile = (props) => {
    let htmlPostsArr = props.profilePage.postsArr.map(element => <ProfilePost sendBy={element.sendBy} sendDate={element.sendDate} text={element.text} />);

    return(
        <div className="profile">
            <ProfileBackground />
            <ProfileInfo />
            <ProfileNewPost profilePage={props.profilePage} dispatch={props.dispatch}/>
            {htmlPostsArr}
       </div>
    );
}

export default Profile;
