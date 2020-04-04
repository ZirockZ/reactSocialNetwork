import React from 'react';
import ProfileBackground from '../../pic-container/profile-background/profile-background.js';
import ProfileInfo from './profile-info/profile-info.js';
import ProfileNewPost from './profile-new-post/profile-new-post.js';
import ProfilePost from './profile-post/profile-post.js';

const Profile = () =>
    (
        <div className="profile">
            <ProfileBackground />
            <ProfileInfo />
            <ProfileNewPost />
            <ProfilePost postSenderName="Андрей Карев" postSendDate="30.03.2020" postMessage="От тебя соцсеть говниной пахнет, удали страницу"/>
            <ProfilePost postSenderName="Андрей Карев" postSendDate="30.03.2020" postMessage="Ты пидарас"/>
            <ProfilePost postSenderName="Андрей Карев" postSendDate="30.03.2020" postMessage="Анимешники пидары"/>
            <ProfilePost postSenderName="Андрей Карев" postSendDate="30.03.2020" postMessage="Три дня создавал страницу на гитхабе"/>
            <ProfilePost postSenderName="Андрей Карев" postSendDate="30.03.2020" postMessage="Если мы будем вместе делать проект - ты будешь уборщиком в моей компании"/>
        </div>
    );


export default Profile;
