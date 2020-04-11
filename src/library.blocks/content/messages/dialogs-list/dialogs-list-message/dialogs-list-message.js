import React from 'react';
import './dialogs-list-message.css';
import '../../../../block.css';
import { NavLink } from 'react-router-dom';

const DialogsListMessage = (props) => {
    let path = '/Messages/' + props.userId;

    return (
        <NavLink className="dialogs-list-message_a" to={path}>
            <div className="block dialogs-list-message">
                <div className="message-sender">
                    <img className="message-sender_img" src="https://sun9-61.userapi.com/c850616/v850616671/1964fb/KcAs46NBN-U.jpg" alt="" />
                    <div className="message-sender_name">{props.sendBy}</div>
                </div>
                <div className="dialogs-list-message_text">{props.text}</div>
            </div>
        </NavLink>
    )
}


export default DialogsListMessage;
