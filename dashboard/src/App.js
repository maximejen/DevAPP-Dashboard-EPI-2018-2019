import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="" alt="logo" />
          <h1>
            Welcome to the <b>Dashboard</b>
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
