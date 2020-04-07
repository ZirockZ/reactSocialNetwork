import React from 'react';
import './profile.css';
import ProfileBackground from '../../pic-container/profile-background/profile-background.js';
import ProfileInfo from './profile-info/profile-info.js';
import ProfileNewPost from './profile-new-post/profile-new-post.js';
import ProfilePost from './profile-post/profile-post.js';

const Profile = (props) => {
    let htmlPostsArr = props.state.postsState.postsArr.map(currentElement => <ProfilePost key={currentElement.id} postSenderName={currentElement.postSenderName} postSendDate={currentElement.postSendDate} postMessage={currentElement.postMessage} />);

    return(
        <div className="profile">
            <ProfileBackground />
            <ProfileInfo />
            <ProfileNewPost state={props.state.postsState}/>
            {htmlPostsArr}
       </div>
    );
}

export default Profile;
