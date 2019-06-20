import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
  render(){
    return (
      <div>
        <button onClick={this.props.onClickDecrease}>-</button>
        <button onClick={this.props.onClickIncrease}>+</button>
        <p>{this.props.counter}</p>
      </div>

    )
  }
  }

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      counter1: 0,
      counter2: 0,
      counter3: 0,
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

  }

  increase(x){              {/* i metoden måste vi bestämma vilken räknare vi trycker på (consol.log:a för att se vad x är) */}
    let obj ={};             {/* detta genom att skapa ett tomt objekt där vår nya key kommer hamna */}
    const key = "counter" + x; {/* denna key:n kommer 'ersätta' våra nuvarande props. X är knappen vi trycker på (1,2,3). genom att skriva 'counter'+ x får vi vår nya key (som egentligen är samma props som innan men nu med ett värde) */}
    obj[key] = this.state[key] + 1; {/* vi plusar vårt värde med 1 */}    
    
    this.setState(obj)
  } 
  
  decrease(x){
    let obj ={};
    const key = "counter" + x;
    obj[key] = this.state[key] - 1;
    
    this.setState(obj)
  }

  reset(x){
    this.setState({counter1: 0, counter2: 0, counter3: 0})
  }
  render() {
    return (
      <div className="App">   {/* kallar på Counter klassen tre gånger för att skapa tre räknare */}
      <Counter counter={this.state.counter1} onClickIncrease={() => this.increase(1)} onClickDecrease={() => this.decrease(1)}/>
      <Counter counter={this.state.counter2} onClickIncrease={() => this.increase(2)} onClickDecrease={() => this.decrease(2)}/>
      <Counter counter={this.state.counter3} onClickIncrease={() => this.increase(3)} onClickDecrease={() => this.decrease(3)}/>
      <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
} 


export default App;
