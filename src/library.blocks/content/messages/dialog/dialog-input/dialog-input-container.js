import {messageAddActionCreator} from '../../../../../redux/messages-reducer.js';
import DialogInput from './dialog-input.js';
import socket from '../../../../../api/socket.js';
import {connect} from 'react-redux';

let mapDispatcherToProps = (dispatch) => {
    return{
        sendMessage: (sendBy, text) => {      
            socket.emit('new message', messageAddActionCreator(sendBy, text));         
        }      
    }
}

const DialogInputContainer = connect(null, mapDispatcherToProps)(DialogInput);

export default DialogInputContainer;
