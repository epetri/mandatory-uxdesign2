import React, { Component } from 'react';
import axios from 'axios'; 
import Table from './table';
import { Helmet } from "react-helmet";
import './home.css'


class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            movies: [],
            searchMovie: '',
        }

    this.delete = this.delete.bind(this);
    this.onChange = this.onChange.bind(this);
    this.mapMovie = this.mapMovie.bind(this);
 }

  componentDidMount(){
    axios.get('http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies')
  .then((respons) => {
    this.setState({movies: respons.data})
    })
  .catch(function (error) {
    console.log(error);
    });
  }

  delete(e){
    let id = e.target.value;
    
    axios.delete('http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies/' + id)
    .then((response) =>{
        let refresh = [...this.state.movies];
        this.setState({movies: refresh.filter(movie =>  id !== movie.id)})
    })
  }

  onChange(e){
      this.setState({searchMovie: e.target.value})

  }

  mapMovie(data){
   return(
     <div>
        <div className='searchResult-movie' key={data.id}>
            <h1>{data.title}</h1>
            <p>Directed by: {data.director}</p>
            <p>Rating: {data.rating}</p>
            <p>{data.description}</p>
        </div>
     </div>

    )
  }

  render(){      
        
    
    let filterMovies = this.state.movies.filter((movie) => {        
       return  ( movie.title.toLowerCase().includes(this.state.searchMovie.toLowerCase()) ||
                movie.director.toLowerCase().includes(this.state.searchMovie.toLowerCase())
       )
    })
    console.log(filterMovies);
    
      return(
        <div className='renderTableDiv'>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className='renderTableDiv_search'>
                <h3>Find your fav movie: </h3>
                <input className='searchInput' type='search' placeholder='search' onChange={this.onChange}/>
            </div>
            <div className='searchResult'>
              {this.state.searchMovie ? (
                    filterMovies.map( this.mapMovie )) :  <Table delete={this.delete} movies={this.state.movies}/>
                  }
            </div>
           
        </div>
      )
  }
}

export default Home;
