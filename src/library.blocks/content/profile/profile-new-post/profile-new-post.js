import React from 'react';
import '../../../block.css';
import '../../content.css';
import './profile-new-post.css'

const ProfileNewPost = () =>
    (
        <div className="block profile-new-post">
            <div className="profile-new-post_header">Что у вас нового?</div>
            <textarea className="profile-new-post_text"></textarea>
            <button className="profile-new-post_button">Опубликовать</button>
        </div>
    );

export default ProfileNewPost;