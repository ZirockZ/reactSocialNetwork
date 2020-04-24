import React from 'react';
import UserInfo from './user-info/user-info.js';
import * as axios from 'axios';
import './users.css';

const Users = (props) => {

    let htmlUsersInfo = props.usersArr.map(el =>
        <UserInfo key={el.id} id={el.id} name={el.name} status={el.status} city={el.city} follow={el.follow} profilePic={el.profilePic} followAction={props.follow} />
    );

    let showMoreUsers = () => {         
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {props.showMoreUsers(response.data.items)});        
    }

    return (
        <div className="users">
            <div className="block users_header">Пользователи</div>
            <div className="block users-list">
                {htmlUsersInfo}
            </div>
            <div className="block users-footer">
                <button className="users-footer_button" onClick={showMoreUsers}>Показать больше</button>
            </div>
        </div>
    )
}

export default Users;