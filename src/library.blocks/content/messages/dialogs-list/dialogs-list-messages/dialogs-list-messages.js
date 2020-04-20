import React from 'react';
import DialogsListMessage from './dialogs-list-message/dialogs-list-message.js';

const DialogsListMessages = (props) => {

    let htmlMessagesArr = props.dialogsArr.map(element => <DialogsListMessage key={element.userId} userId={element.userId} sendBy={element.sendBy} text={element.text} />);

    return(
        <div className="dialogs-list-messagges">
            {htmlMessagesArr}
        </div>
    );
}

export default DialogsListMessages;
