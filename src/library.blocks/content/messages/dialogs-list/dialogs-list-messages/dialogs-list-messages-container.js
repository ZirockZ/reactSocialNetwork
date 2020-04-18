import DialogsListMessages from './dialogs-list-messages.js';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return{
        dialogsArr: state.messagesPage.dialogsArr
    }
}

let DialogsListMessagesContainer = connect(mapStateToProps, null)(DialogsListMessages);

export default DialogsListMessagesContainer;
