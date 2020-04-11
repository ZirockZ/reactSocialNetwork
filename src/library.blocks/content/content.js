import React from 'react';
import Profile from './profile/profile.js';
import Messages from './messages/messages.js';
import './content.css';
import '../block.css';
import { Route } from "react-router-dom";

const Content = (props) => {
    return (
        <div className="content">
            <Route path="/Profile" render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>} />
            <Route path="/Messages" render={() => <Messages messagesPage={props.state.messagesPage} dispatch={props.dispatch}/>} />
        </div>
    );
}

export default Content;
