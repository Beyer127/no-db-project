import React from 'react';
import './App.css';
import DraftPool from './components/DraftPool'
import AddPlayer from './components/AddPlayer'

function App() {
  return (
    <div>
    <nav className="header">
      <div id="nav">
        <a href="*" class="nav">HOME</a>
        <a href="*" class="nav">ABOUT</a>
        <a href="*" class="nav">CONTACT</a>
      </div>

    </nav>
    <div id="container">
      <h1>Draft Pool</h1>
      <ul>
        <DraftPool/>
      </ul>
      </div>
    </div>
  );
}

export default App;
