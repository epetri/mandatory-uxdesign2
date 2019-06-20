import React, { Component } from 'react';
import './App.css';

import Table from './table'

const data = [
  {
    name: 'Bob',
    age: 18,
  },
  {
    name: 'Alice',
    age: 20,
  },
  {
    name: 'Benny',
    age: 54,
  }
 ];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table data={data}/>
      </div>
    );
  }
}

export default App;
