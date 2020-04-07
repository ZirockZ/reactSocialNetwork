import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

let renderer = (state) => ReactDOM.render(
    <React.StrictMode>
      <App state={state}/>
    </React.StrictMode>,
    document.getElementById('root')
  );

export default renderer;