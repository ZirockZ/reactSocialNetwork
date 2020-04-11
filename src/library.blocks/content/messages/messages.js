import React from 'react';
import DialogsList from './dialogs-list/dialogs-list.js';
import Dialog from './dialog/dialog.js';
import './messages.css';
import '../../block.css';

const Messages = (props) => { 
    return (
        <div className="messages">
            <DialogsList dialogsArr={props.messagesPage.dialogsArr} />
            <Dialog messagesPage={props.messagesPage} dispatch={props.dispatch}/>
        </div>
    );
}


export default Messages;
