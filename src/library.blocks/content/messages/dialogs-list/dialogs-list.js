import React from 'react';
import './dialogs-list.css';
import DialogsHeader from './dialogs-list-header/dialogs-list-header.js';
import DialogsListMessage from './dialogs-list-message/dialogs-list-message.js';

const DialogsList = () =>
    (
        <div className="dialogs-list">
            <DialogsHeader />
            <DialogsListMessage />
            <DialogsListMessage />
            <DialogsListMessage />
            <DialogsListMessage />
            <DialogsListMessage />
            <DialogsListMessage />
            <DialogsListMessage />
            <DialogsListMessage />
            <DialogsListMessage />
            <DialogsListMessage />
            <DialogsListMessage />
       </div>
    );


export default DialogsList;
