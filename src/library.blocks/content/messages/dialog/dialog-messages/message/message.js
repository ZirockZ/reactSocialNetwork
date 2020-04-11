import React from 'react';
import './message.css';

const Message = (props) =>
    (
        <div className="message">
            <div className="message-sender message-sender_justify-content_normal">
                <img className="message-sender_img" src="https://sun9-61.userapi.com/c850616/v850616671/1964fb/KcAs46NBN-U.jpg" alt="" />
                <div className="message-sender_name message-sender_name_color_bluegrey">{props.sendBy}</div>
                <div className="message-sender_date">{props.sendDate}</div>
            </div>
            
            <div className="message_text">{props.text}</div>
       </div>
    );


export default Message;
