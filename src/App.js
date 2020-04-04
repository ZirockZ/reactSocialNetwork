import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Header from './library.blocks/header/header';
import Nav from './library.blocks/nav/nav';
import Content from './library.blocks/content/content.js';


const App = () =>
  (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container">
          <Nav />
          <Content />
        </div>
      </div>
    </BrowserRouter>
  );


export default App;
