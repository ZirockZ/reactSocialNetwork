import React from 'react';
import '..//block.css';
import './header.css';

const Header = () =>
    (
        <div className="header">
            <div className="block header_content">
                <img className="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/07/UNESCO_logo_white.png" alt="" />
                <img className="profile-pic-icon" src="https://sun9-42.userapi.com/c857020/v857020712/ea335/tiEFiNjeAqw.jpg" alt="" />
                <div className="profile-name">Даня Кондратьев</div>
            </div>
        </div>
    );


export default Header;
