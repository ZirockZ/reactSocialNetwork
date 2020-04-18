import ProfilePosts from './profile-posts.js';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return{
        postsArr: state.profilePage.postsArr
    }
}

const ProfileContainer = connect(mapStateToProps, null)(ProfilePosts);

export default ProfileContainer;
