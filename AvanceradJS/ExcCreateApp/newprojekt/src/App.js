import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return(
      <div className= 'root'>
        <input onChange = {this.onChange}></input>
        <h1>Hej {this.state.value}</h1>
      </div>
    );
  }
}

export default App;
