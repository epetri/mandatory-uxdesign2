import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CSSTransition } from 'react-transition-group';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      show: false,
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.state.show === false ? this.setState({show: true}) : this.setState({show: false});
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onClick}>Show</button>
          <CSSTransition 
          classNames='message'
          timeout={100}
          unmountOnExit
          in={this.state.show}>
            <div className='message'>
                    <button onClick={this.onClick}>Close</button>
                    <p>Dialogruta</p>
            </div>
          </CSSTransition>
      </div>
    );
  }
}

export default App;
