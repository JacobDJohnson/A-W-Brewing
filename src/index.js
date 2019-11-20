import React from 'react';
import ReactDOM from 'react-dom';
import logo from './Images/beerbottleandglass.svg';
import Header from './Components/Header';
import './index.css';
import './App.css';


function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Brew Site.
          </p>
        </header>
      </div>
    );
  }

ReactDOM.render(<App />, document.querySelector('#root'));