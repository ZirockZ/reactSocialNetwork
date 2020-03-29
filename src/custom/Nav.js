import React from 'react';
import './style/Nav.css';


const Nav = () =>
    (
        <div className="nav">
            <div className="main-nav-panel">
                <a className="nav-item" href="http://localhost:3000/">Profile</a>
                <a className="nav-item" href="http://localhost:3000/">Messages</a>
                <a className="nav-item" href="http://localhost:3000/">News</a>
                <a className="nav-item" href="http://localhost:3000/">Music</a>
            </div>
            <a id="settings" className="nav-item" href="http://localhost:3000/">Settings</a>
        </div>
    );


export default Nav;
