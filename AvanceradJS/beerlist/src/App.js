import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import axios from 'axios';



class HomePage extends Component {
  constructor(props){
    super(props);
    this.state={
      beers: [],
    };
    axios.get('https://api.punkapi.com/v2/beers')
    .then((respons) => {
      this.setState({ beers: respons.data})
    })
  }

  render(){
    return(
      <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className='div'>
        <ul className='beerList'>{this.state.beers.map(beer => (
          <li key={beer.id} className='beerLi'>
            <Link to={`/about/${beer.id}`} className='beerLi'>{beer.name}</Link>
          </li>
          ))}
        </ul>
        </div>
      </>
    )
  }
}

class InfoPage extends Component {
  constructor(props){
    super(props);
    this.state= {
      beer: {},
    };
    axios.get(`https://api.punkapi.com/v2/beers/${this.props.match.params.id}`)
    .then(respons => {
      this.setState({beer: respons.data[0]})
    })
  }
  render() {
    return(
      <>
        <Helmet>
          <title>{this.state.beer.name}</title>
        </Helmet>
        <div className='div'>
          <h1>{this.state.beer.name}</h1>
          <img src={this.state.beer.image_url} height={250}></img>
          <p>{this.state.beer.description}</p>
        </div>
      </>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Link to='/' className='home'>Home</Link>
          <Route exact path="/" component={HomePage} />
          <Route path="/about/:id" component={InfoPage} />
        </div>
      </Router>
      
    );
  }
}

export default App;
