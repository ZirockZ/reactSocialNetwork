import React from 'react';
import Profile from './profile/profile.js';
import Messages from './messages/messages.js';
import UsersContainer from './users/users-container.js';
import { Route } from "react-router-dom";
import './content.css';
import '../block.css';

const Content = (props) => {
    
    return (
        <div className="content">
            <Route path="/Profile" render={() => <Profile />} />
            <Route path="/Messages" render={() => <Messages />} />
            <Route path="/Users" render={() => <UsersContainer />} />
        </div>
    );
}

export default Content;
