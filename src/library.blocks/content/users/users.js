import React from 'react';
import UserInfo from './user-info/user-info.js';
import './users.css';

const Users = (props) => {

    let htmlUsersInfo = props.usersArr.map(element =>
        <UserInfo id={element.id} name={element.name} status={element.status} city={element.city} follow={element.follow} profilePic={element.profilePic} followAction={props.follow} />
    );

    return (
        <div className="users">
            <div className="block users_header">Пользователи</div>
            <div className="block users-list">
                {htmlUsersInfo}
            </div>
            <div className="block users-footer">
                <button className="users-footer_button">Показать больше</button>
            </div>
        </div>
    )
}

export default Users;