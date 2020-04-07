import React from 'react';
import DialogsList from './dialogs-list/dialogs-list.js';
import Dialog from './dialog/dialog.js';
import './messages.css';
import '../../block.css';

const Messages = (props) => {
    console.log();

    return (
        <div className="messages">
            <DialogsList dialogsArr={props.state.dialogsArr} />
            <Dialog state={props.state.messagesState} />
        </div>
    );
}


export default Messages;
