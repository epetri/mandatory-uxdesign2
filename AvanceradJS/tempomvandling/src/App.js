import React, { Component } from 'react';
import './App.css';

import Kelvin from './kelvin';
import Fahrenheit from './fahrenheit';

class App extends Component {
  constructor(props){
    super(props);

    this.state={celsius: '0.0',}

    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
   this.setState({celsius: e.target.value}); {/* läs av vad användaren gör i input*/}
  }

  render() {
    return (
      <div className="App">
        <h1>TempConvert</h1>
        <h3 className='celsius'>{this.state.celsius}&deg;C</h3>
        <input type='range' onChange={this.onChange} value={this.state.celsius}/> {/*skapa ett input, kalla på oChange, ge inputet värdet av det användaren sätter*/}
        <Kelvin celsius={this.state.celsius}/>     {/* skicka state.celsius till barnen */}
        <Fahrenheit celsius={this.state.celsius}/>
      </div>
    );
  }
}

export default App;
