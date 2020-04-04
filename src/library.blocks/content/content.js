import React from 'react';
import Profile from './profile/profile.js';
import Messages from './messages/messages.js';
import './content.css';
import '../block.css';
import { Route } from "react-router-dom";

const Content = () =>
    (
        <div className="content">
            <Route path="/Profile" component={Profile} />
            <Route path="/Messages" component={Messages} />
        </div>
    );


export default Content;
