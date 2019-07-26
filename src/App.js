import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import About from './components/about';
import Home from './components/home';
import Content from './components/content';

function App() {
  return (
    <div className="App">
    <BrowserRouter >
          <Home />
          <About/>
          <div>
          <Content />
          </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
