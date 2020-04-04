import React from 'react';
import './dialog-input.css';
import '../../../../block.css';

const CurrentDialogInput = () =>
    (
        <div className="block dialog-input">
            <textarea className="dialog-input_textarea"></textarea>
            <button className="dialog-input_button">Отправить</button>
       </div>
    );


export default CurrentDialogInput;
