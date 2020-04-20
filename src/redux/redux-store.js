import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reducer.js';
import messagesReducer from './messages-reducer.js';
import usersReducer from './users-reducer.js';


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;
window.dispatch = store.dispatch;

export default store;