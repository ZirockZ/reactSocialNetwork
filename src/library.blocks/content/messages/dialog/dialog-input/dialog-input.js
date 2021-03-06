import React from 'react';
import './dialog-input.css';

const CurrentDialogInput = (props) => {

    let newMessageRef = React.createRef();

    let sendMessage = () => {        
        let textAreaText= newMessageRef.current.value; 
        props.sendMessage("Даня Кондратьев", textAreaText);       
    }

    return (
        <div className="block dialog-input">
            <textarea ref={newMessageRef} className="dialog-input_textarea"></textarea>
            <button className="dialog-input_button" onClick={sendMessage}>Отправить</button>
        </div>
    );
}

export default CurrentDialogInput;
