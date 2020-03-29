import React from 'react';
import './style/Header.css';




const Header = () =>
    (
        <div className="header-container">
            <div className="header">
                <img className="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/07/UNESCO_logo_white.png" alt="" />
                <img className="profile-pic-icon" src="https://sun9-42.userapi.com/c857020/v857020712/ea335/tiEFiNjeAqw.jpg" alt="" />
                <div className="profile-name">Даня Кондратьев</div>
            </div>
        </div>
    );


export default Header;
