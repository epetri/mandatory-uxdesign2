import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import addMovie from './addMovie';
import home from './home';
import edit from './edit';
import details from './details';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <nav className='header-nav'>
          <Link className='nav-link' to= '/'>Home</Link>
          <Link className='nav-link' to= '/addMovie'>Add movie</Link>
        </nav>
        <Route exact path='/' component={home}/>
        <Route path='/addMovie' component={addMovie}/>
        <Route path='/details/:id' component={details}/>
        <Route path='/edit/:id' component={edit}/>
      </div>
      </Router>
    );
  }
}

export default App;
