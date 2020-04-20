import React from 'react';
import Message from './message/message.js';
import './dialog-messages.css';

const DialogMessages = (props) => {
    let htmlMessageArr = props.messagesArr.map(element => <Message key={element.id} sendBy={element.sendBy} sendDate={element.sendDate} text={element.text}/>);

    return(
        <div className="block dialog-messages">
            {htmlMessageArr}
        </div>
    );
}

export default DialogMessages;
