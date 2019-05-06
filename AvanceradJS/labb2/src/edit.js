import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import Editform from './editform';
import { Helmet } from "react-helmet";
import './addMovie.css'


class Edit extends Component {
    constructor(props){
        super(props);
        this.state={
            info: {},
            finished: false,
        }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDirector = this.onChangeDirector.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    }

    componentDidMount(){
        this.source = axios.CancelToken.source();

        axios.get(`http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies/${this.props.match.params.id}`)
        .then(response => {
            this.setState({info: response.data})
            }
        )
    }

    componentWillUnmount() {
        this.source.cancel("Operation canceled by the user.");
      }

    onSubmit(e){
        e.preventDefault();
        axios.put(`http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies/${this.props.match.params.id}`, this.state.info, {headers: {"Content-Type": "application/json"}})
            .then(respons => {
                this.setState({ finished: true });
            })
    }

    onChangeTitle(e){
        this.state.info.title = e.target.value;
        this.setState({title: e.target.value})
    }

    onChangeDescription(e){
        this.state.info.description = e.target.value;
        this.setState({description: e.target.value})
    }

    onChangeDirector(e){
        this.state.info.director = e.target.value;
        this.setState({director: e.target.value})
    }

    onChangeRating(e){
        this.state.info.rating = e.target.value;
        this.setState({rating: e.target.value})
    }
    

    render(){
        if (this.state.finished) {
            return <Redirect to="/" />;
        }
        return(
            <div className='addMovieForm'>
                <Helmet>
                    <title>{this.state.info.title}</title>
                </Helmet>
              <Editform 
                onChangeTitle={this.onChangeTitle}
                onChangeDescription={this.onChangeDescription}
                onChangeDirector={this.onChangeDirector}
                onChangeRating={this.onChangeRating}
                onSubmit={this.onSubmit}
                info={this.state.info}
                />
            </div>
        )
    }
}

export default Edit;