import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserState from './context/user/UserState';

function App() {
  return (
    <UserState>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
    </UserState>

  );
}

export default App;
