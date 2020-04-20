import React from 'react';
import '../block.css';
import './nav.css';
import {NavLink} from "react-router-dom";

const Nav = () =>
    (
        <div className="block nav">
            <NavLink className="nav_a nav_a_margin-top_20px" to="/Profile">Profile</NavLink>
            <NavLink className="nav_a" to="/Messages">Messages</NavLink>
            <NavLink className="nav_a" to="/News">News</NavLink>
            <NavLink className="nav_a" to="/Users">Users</NavLink>
            <NavLink className="nav_a nav_a_margin-top_80px" to="/Settings">Settings</NavLink>
        </div>
    );


export default Nav;
