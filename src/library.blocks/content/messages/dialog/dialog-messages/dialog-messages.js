import React from 'react';
import Message from './message/message.js';
import './dialog-messages.css';
import '../../../../block.css';

const CurrentDialogMessages = (props) => {
    let htmlMessageArr = props.messagesArr.map(currentElement => <Message key={currentElement.id} name={currentElement.name} date={currentElement.date} text={currentElement.text}/>);



    return(
        <div className="block dialog-messages">
            {htmlMessageArr}
        </div>
    );
}

export default CurrentDialogMessages;
