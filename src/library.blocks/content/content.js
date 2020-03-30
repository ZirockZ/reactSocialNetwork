import React from 'react';
import ProfileBackground from '../pic-container/profile-background/profile-background.js';
import ProfileInfo from './profile-info/profile-info.js';
import ProfileNewPost from './profile-new-post/profile-new-post.js';
import ProfilePost from './profile-post/profile-post.js';
import './content.css';
import '../block.css';

const Content = () =>
    (
        <div className="content">
            <ProfileBackground />
            <ProfileInfo />
            <ProfileNewPost />
            <ProfilePost />
            <ProfilePost />
            <ProfilePost />
            <ProfilePost />
            <ProfilePost />
        </div>
    );


export default Content;
