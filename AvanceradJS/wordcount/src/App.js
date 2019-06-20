import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      text: '',
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(event){
    this.setState({text: event.target.value})
  }

      render() {
        let color;
        const wc = this.state.text.trim().split(' ').length;
        if(wc > 20){
          color = 'red';
        }
        return (
          <div>
          <textarea value={this.state.text} onChange={this.onChange}></textarea>
          <h1 style={{ color: color }}>{wc}/20</h1>
          </div>
        ); 
        } 
    }

export default App;
