import React from 'react';
import '../block.css';
import './nav.css';

const Nav = () =>
    (
        <div className="block nav">
            <a className="nav_a nav_a_margin-top_20px" href="http://localhost:3000/">Profile</a>
            <a className="nav_a" href="http://localhost:3000/">Messages</a>
            <a className="nav_a" href="http://localhost:3000/">News</a>
            <a className="nav_a" href="http://localhost:3000/">Music</a>
            <a className="nav_a nav_a_margin-top_80px" href="http://localhost:3000/">Settings</a>
        </div>
    );


export default Nav;
