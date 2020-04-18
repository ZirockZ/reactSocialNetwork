import React from 'react';
import DialogHeader from './dialog-header/dialog-header.js';
import DialogMessagesContainer from './dialog-messages/dialog-messages-container.js';
import DialogInputContainer from './dialog-input/dialog-input-container.js';
import './dialog.css';

const Dialog = (props) => {
    return (
        <div className="dialog">
            <DialogHeader />
            <DialogMessagesContainer />
            <DialogInputContainer />
        </div>
    );
}

export default Dialog;
