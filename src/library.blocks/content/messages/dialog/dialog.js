import React from 'react';
import DialogHeader from './dialog-header/dialog-header.js';
import DialogMessages from './dialog-messages/dialog-messages.js';
import DialogInput from './dialog-input/dialog-input.js';
import './dialog.css';

const Dialog = (props) =>
    (
        <div className="dialog">
            <DialogHeader/>
            <DialogMessages messagesArr={props.state.messagesArr}/>
            <DialogInput messageAdd={props.state.messageAdd}/>
       </div>
    );


export default Dialog;
