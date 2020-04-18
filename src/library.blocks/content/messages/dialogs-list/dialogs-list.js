import React from 'react';
import './dialogs-list.css';
import DialogsHeader from './dialogs-list-header/dialogs-list-header.js';
import DialogsListMessagesContainer from './dialogs-list-messages/dialogs-list-messages-container.js';

const DialogsList = (props) => {

    return(
        <div className="dialogs-list">
            <DialogsHeader />
            <DialogsListMessagesContainer store={props.store}/>
        </div>
    );
}

export default DialogsList;
