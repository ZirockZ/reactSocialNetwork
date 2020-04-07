import React from 'react';
import Profile from './profile/profile.js';
import Messages from './messages/messages.js';
import './content.css';
import '../block.css';
import { Route } from "react-router-dom";

const Content = (props) => {
    return (
        <div className="content">
            <Route path="/Profile" render={() => <Profile state={props.state.profilePage}/>} />
            <Route path="/Messages" render={() => <Messages state={props.state.messagesPage} />} />
        </div>
    );
}

export default Content;
