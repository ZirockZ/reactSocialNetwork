import {createStore, combineReducers} from 'redux';
//import storeReducer from './store-reducer';
import profileReducer from './profile-reducer.js';
import messagesReducer from './messages-reducer.js';


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
});

let store = createStore(reducers);

window.store = store;
window.dispatch = store.dispatch;

export default store;