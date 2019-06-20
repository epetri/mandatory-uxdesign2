import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value: '',
      message: '',
    }
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    this.setState({value: e.target.value})
  }

  onClick(){    
    let validate = /^[0-9]{3} *[0-9]{2}$/
    
    if(validate.test(this.state.value)){
      this.setState({message: 'Postal code submited'})
    } else {
      this.setState({message: 'Postal code is invalid'})
    }
  }

  render() {    
    let color;
    let wrong = this.state.message;
    if(wrong === 'Postal code is invalid'){
      color = 'red';
    }

    return (
      <div className="App">
        <h1>Postcode</h1>
        <p style={{ color: color}}>{this.state.message}</p>
        <input placeholder='Enter postcode' onChange={this.onChange}></input>
        <button onClick={this.onClick}>Submit</button>
      </div>
    );
  }
}

export default App;
