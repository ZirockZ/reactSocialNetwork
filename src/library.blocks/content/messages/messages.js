import React from 'react';
import DialogsList from './dialogs-list/dialogs-list.js';
import CurrentDialog from './dialog/dialog.js';
import './messages.css';
import '../../block.css';

const Messages = () =>
    (
        <div className="messages">
          <DialogsList />
          <CurrentDialog />
       </div>
    );



export default Messages;
