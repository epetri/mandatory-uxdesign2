import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

function Home(){
  return (<div>
    <Helmet>
      <title>home</title>
    </Helmet>
    <p>Homepage</p>
    </div>
  )
} 

function Page1(){
  return (<div>
    <Helmet>
      <title>page2</title>
    </Helmet>
      <p>Not home</p>
    </div>
  )
}

function Page2(){
  return (<div>
    <Helmet>
      <title>page3</title>
    </Helmet>
    <p>Where am I?</p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
          <Link to="/">Home </Link>
          <Link to="/page1"> hola¡ </Link>
          <Link to="/page2"> panik </Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
        </div>
      </Router>
    );
  }
}

export default App;
