import React from 'react';
import CurrentDialogHeader from './dialog-header/dialog-header.js';
import CurrentDialogMessages from './dialog-messages/dialog-messages.js';
import CurrentDialogInput from './dialog-input/dialog-input.js';
import './dialog.css';

const CurrentDialog = () =>
    (
        <div className="dialog">
            <CurrentDialogHeader/>
            <CurrentDialogMessages/>
            <CurrentDialogInput/>
       </div>
    );


export default CurrentDialog;
