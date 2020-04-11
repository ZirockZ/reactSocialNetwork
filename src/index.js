import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import store, {setRenderMethodActionCreator} from './redux/state.js';


export let renderer = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderer(store.state);

store.dispatch(setRenderMethodActionCreator(renderer));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
