import * as serviceWorker from './serviceWorker';
import './index.css';
import state from'./redux/state.js';
import render from './redux/render.js';

render(state);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
