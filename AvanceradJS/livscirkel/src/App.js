import React, { Component } from 'react';
import './App.css';

class Count extends Component {
  constructor(props){
    super(props);
    this.state= {
      counter: 0,
    };
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      this.setState({counter: this.state.counter + 1})
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    return(
        <h1>{this.state.counter}</h1>
     )
    }
  }


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: false,
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(event){
    this.setState({value: event.target.checked})
  }

  render() {
    return (
      <div>
           <input className='checkbox' type='checkbox'onChange={this.onChange} checked={this.state.value}></input>
            {this.state.value ? <Count/> :null}
      </div>
    );
  }
}

export default App;
