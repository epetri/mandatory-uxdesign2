import React, { Component } from 'react';
import './App.css';
import Button from './button';
import Totop from './scrolltotopp';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Button/>
          <Totop/>
      </div>
    );
  }
}

export default App;

