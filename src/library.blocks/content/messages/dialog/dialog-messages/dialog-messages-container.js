import DialogMessages from './dialog-messages.js';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return{
        messagesArr: state.messagesPage.messagesArr
    }
}

const CurrentDialogMessages = connect(mapStateToProps, null)(DialogMessages);

export default CurrentDialogMessages;
