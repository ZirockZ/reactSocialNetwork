import React from 'react';
import './dialogs-list-message.css';
import '../../../../block.css';

const DialogsListMessage = () =>
    (
        <div className="block dialogs-list-message">
            <div className="message-sender">
                <img className="message-sender_img" src="https://sun9-61.userapi.com/c850616/v850616671/1964fb/KcAs46NBN-U.jpg" alt=""/>
                <div className="message-sender_name">Карев Андрей</div>
            </div>
            <div className="dialogs-list-message_text">Заебал игнорить</div>
       </div>
    );


export default DialogsListMessage;
