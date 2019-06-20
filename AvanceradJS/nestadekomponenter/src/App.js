import React, { Component } from 'react';
import './App.css';

const planets = ['Merkurius', 'Venus', 'Tellus', 'Mars', 'Jupiter', 'Saturnus', 'Uranus', 'Neptunus'];

class ListItem extends Component {

  render(){
    return(
        <li className='ListItem'>{this.props.children}</li>
    )
  }
}

class List extends Component {
  render() {
    return (
        <ul className='list'>{this.props.children}</ul>
    );
  }
}

class App extends Component {
  render(){
    return(
      <List>
        {planets.map(planet => <ListItem key={planet}>{planet}</ListItem>)}
     </List>
    );
  }
}

export default App;
