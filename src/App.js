import React, { Component } from 'react';
import Clock from 'react-live-clock'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock format={'h:mm a'} ticking={true} timezone={'US/Mountain'} />
      </div>
    );
  }
}

export default App;
