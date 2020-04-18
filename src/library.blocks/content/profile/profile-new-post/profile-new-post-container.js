import ProfileNewPost from './profile-new-post.js';
import './profile-new-post.css'
import {postAddActionCreator} from '../../../../redux/profile-reducer.js';
import {connect} from 'react-redux';

let mapDispatchToProps = (dispatch) => {
    return{
        postAdd: (sendBy, text) => {
            dispatch(postAddActionCreator(sendBy, text));
        }
    }
}

const ProfileNewPostContainer = connect(null, mapDispatchToProps)(ProfileNewPost);

export default ProfileNewPostContainer;