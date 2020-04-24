import openSocket from 'socket.io-client';
import store from '../redux/redux-store.js'

const socket = openSocket('http://localhost:4000');

socket.on('new message', action => {
    store.dispatch(action);
})  

export default socket;