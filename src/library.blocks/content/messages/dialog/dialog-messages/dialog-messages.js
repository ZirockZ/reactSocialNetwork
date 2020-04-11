import React from 'react';
import Message from './message/message.js';
import './dialog-messages.css';
import '../../../../block.css';

const CurrentDialogMessages = (props) => {
    let htmlMessageArr = props.messagesArr.map(element => <Message sendBy={element.sendBy} sendDate={element.sendDate} text={element.text}/>);



    return(
        <div className="block dialog-messages">
            {htmlMessageArr}
        </div>
    );
}

export default CurrentDialogMessages;
