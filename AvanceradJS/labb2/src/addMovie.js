import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import AddMovieForm from './addMovieForm';
import { Helmet } from "react-helmet";
import './addMovie.css';


class AddMovie extends Component {
    constructor(props){
        super(props);
        this.state={
            info: {
                title: '',
                director: '',
                description: '',
                rating: '',
                errMsg: null,
            },
            finished: false,
        }
    
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        let id = e.target.id;

        if(id === 'title'){
            this.setState({title: e.target.value})
            console.log(this.state.title);

        }else if (id === 'director'){
            this.setState({director: e.target.value})
            console.log(this.state.director);
            

        }else if (id === 'description'){
            this.setState({description: e.target.value})

        }else if (id === 'rate'){
            this.setState({rating: e.target.value})
        }
    }

    
    onSubmit(e){
        e.preventDefault();
        let saveInfo = {};

        saveInfo.title =this.state.title;
        saveInfo.director =this.state.director;
        saveInfo.description =this.state.description;
        saveInfo.rating =this.state.rating;

        let stringified = JSON.stringify(saveInfo);
        console.log(stringified); 
        axios.post("http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies/", saveInfo) 
            .then(response => {
            this.setState({ finished: true });
        }) 
        .catch((err) => {            
            this.setState({errMsg: 'Make sure you filled in all fields!'})
        })
    }
    

    render(){
        if (this.state.finished) {
            return <Redirect to="/" />;
        }
        return(
            <div className='addMovieForm'>     
                <Helmet>
                    <title>Add Movie</title>
                </Helmet>  
                {this.state.errMsg ? (
                        <p className='errorMsgAddMovie' style= {{color: 'red'}}>{this.state.errMsg}</p>
                    ) : <h1 className='newMovietext'>Add a new movie</h1> }   
                    
                <AddMovieForm
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    info={this.state}
                />
 
            </div>
        )
    }
}

export default AddMovie;