import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment';

function App() {
  return (
    <div className = "App" style = {{ padding : 16, backgroundColor : '#282c34' }}>
      <header className = "App-header">
        <img src = {logo} className = "App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className = "App-link"
          href = "https://reacts.org"
          target = "_blank"
          rel = "noopener noreferrer">
          Learn React
          </a>
      </header>
    <div>
    <Comment name = {'Shin KM'} content = {'My comment!'} />
    <Comment name = {'경민'} content = {'내 댓글'} />
       </div>
    </div>
   );
}

export default App;