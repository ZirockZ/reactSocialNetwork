import React from 'react';
import '../../../block.css';
import './profile-text.css'

const ProfileText = () =>
    (
        <div className="block profile-text">
            <div className="profile-text_name-birth">
                <div className="profile-text_name">Даня Кондратьев</div>
                <div className="profile-text_birthdate">13 июня 2001</div>
            </div>
            <div className="profile-text_city">Тагай</div>
            <div className="profile-text_education">Не учился, хуи пинал</div>
            <div className="profile-text_web-site">http://localhost:3000/</div>
        </div>
    );

export default ProfileText;


