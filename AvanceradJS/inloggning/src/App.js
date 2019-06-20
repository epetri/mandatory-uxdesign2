import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loggin from './loggin';
import Profile from './profile';
import { token$ }  from './store';


function home(){
  return(
  <div> 
    <p>You're home</p>
  </div>
  )
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      token: token$.value,
    }
  }

  componentDidMount(){
   this.subscription = token$.subscribe( (token) => this.setState({ token }));
  }

  componentWillUnmount(){
    this.subscription.unsubscribe();
  }

  render() {
    const token = this.state.token;

    return (
      <Router>
      <div className="App">
        <header>
          <Link to='/'>Home</Link>
          <Link to='/loggin'>Loggin</Link>
          {token ? <Link to='/profile'>Profile</Link> : null}
        </header>
          <Route exact path='/' component={home}/>
          <Route path='/loggin' component={Loggin}/>
          <Route path='/profile' component={Profile}/>
      </div>
      </Router>
    );
  }
}

export default App;
