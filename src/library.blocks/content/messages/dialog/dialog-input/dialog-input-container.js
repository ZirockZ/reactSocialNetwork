import {messageAddActionCreator} from '../../../../../redux/messages-reducer.js';
import DialogInput from './dialog-input.js';
import {connect} from 'react-redux';

let mapDispatcherToProps = (dispatch) => {
    return{
        sendMessage: (sendBy, text) => {      
            dispatch(messageAddActionCreator(sendBy, text));
        }      
    }
}

const DialogInputContainer = connect(null, mapDispatcherToProps)(DialogInput);

export default DialogInputContainer;
