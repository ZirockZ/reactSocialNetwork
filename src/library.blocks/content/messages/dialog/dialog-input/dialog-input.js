import React from 'react';
import './dialog-input.css';
import '../../../../block.css';

const CurrentDialogInput = (props) => {

    let newMessageText = React.createRef();

    let sendMessage = () => {
        debugger;
        let textAreaRef = newMessageText.current.value;
        
        props.messageAdd("Даня Кондратьев", textAreaRef, "15");
    }

    return (

        <div className="block dialog-input">
            <textarea ref={newMessageText} className="dialog-input_textarea"></textarea>
            <button className="dialog-input_button" onClick={sendMessage}>Отправить</button>
        </div>
    );
}

export default CurrentDialogInput;
