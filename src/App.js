import React from 'react';
import './App.css';
import Header from './custom/Header';
import Nav from './custom/Nav';
import Content from './custom/Content';

const App = () =>
  (
    <div className="App">
      <Header />
      <div className="container">
        <Nav />
        <Content />
      </div>
    </div>
  );


export default App;
