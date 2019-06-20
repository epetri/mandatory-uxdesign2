import React, { Component } from 'react';
import './App.css';

let id = 4;

class Square extends Component {
  shouldComponentUpdate(newProps){
    return newProps.color !== this.props.color;
  }

  render() {  //Styla diven 
    return( 
      <div style={{backgroundColor: this.props.color, height:'100px', width:'100px', margin: '10px'}} onClick={() => this.props.onClick(this.props.id)}/>
      )
    }
  }

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      squares: [{
        id: 'square1',
        color: 'red',
      },
      {
        id: 'square2',
        color: 'red',
      },
      {
        id: 'square3',
        color: 'red',
      }
    ],
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick(id){
    console.log(id);
    
    const newSquares = [...this.state.squares];
    const index = newSquares.findIndex(squa => squa.id === id);

    newSquares[index].color = newSquares[index].color === 'red' ? 'blue' : 'red';

    this.setState({squares: newSquares});
    return;
  }

  render() {
    return (
      <div className="App">
          <button onClick= {() => {this.setState({ squares: [...this.state.squares,{ color: 'red', id: `square${id++}`}], })}}>Add square</button>
          {this.state.squares.map(square => <Square key={square.id} id={square.id} color={square.color} onClick={this.onClick}/>)}
      </div>
    );
  }


}

export default App;
