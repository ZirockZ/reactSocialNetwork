import React from 'react';
import ProfilePost from './profile-post/profile-post.js';

const ProfilePosts = (props) => {
    let htmlPostsArr = props.postsArr.map(element => <ProfilePost sendBy={element.sendBy} sendDate={element.sendDate} text={element.text} />);

    return(
        <div className="profile-posts">
            {htmlPostsArr}
       </div>
    );
}

export default ProfilePosts;
