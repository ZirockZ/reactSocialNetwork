import Users from './users.js';
import {connect} from 'react-redux';
import {followActionCreator} from '../../../redux/users-reducer.js'
import './users.css';

let mapStateToProps = (state) => ({
    usersArr: state.usersPage.usersArr
})

let mapDispatchToProps = (dispatch) => ({
    follow: (userId, follow) => {
        dispatch(followActionCreator(userId, follow))
    }
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;