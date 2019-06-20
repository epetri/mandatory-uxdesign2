import React, { Component } from 'react';
import './App.css';
import DayInfo from './dayInfo';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      year: '',
      month: '',
      day: '',    
    }
    this.onChange = this.onChange.bind(this)
    console.log(this.state.value);
  }

  onChange(e){
    let value = e.target.value;
    let splitValue = value.split('-');
    console.log(splitValue);
    
    if(splitValue.length > 1){
      this.setState({
        year: splitValue[0],
        month: splitValue[1],
        day: splitValue[2]
      })
    }

  }


  render() {
    return (
      <div className="App">
        <input type='date' onChange={this.onChange}></input>
        <DayInfo year={this.state.year} month={this.state.month} day={this.state.day}/> 
      </div>
    );
  }
}

export default App;
