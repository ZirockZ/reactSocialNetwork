import React from 'react';
import './dialogs-list.css';
import DialogsHeader from './dialogs-list-header/dialogs-list-header.js';
import DialogsListMessage from './dialogs-list-message/dialogs-list-message.js';

const DialogsList = (props) => {


    let htmlMessagesArr = props.dialogsArr.map(element => <DialogsListMessage userId={element.userId} sendBy={element.sendBy} text={element.text} />);


    return(
        <div className="dialogs-list">
            <DialogsHeader />
            {htmlMessagesArr}
        </div>
    );
}

export default DialogsList;
