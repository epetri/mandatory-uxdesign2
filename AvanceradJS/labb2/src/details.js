import React, {Component} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";import edit from './edit'
import { Helmet } from "react-helmet";
import './details.css';




class Details extends Component {
    constructor(props){
        super(props);
        this.state={
            info: {},
        }
    
    }

    componentDidMount(){
        axios.get(`http://ec2-13-53-132-57.eu-north-1.compute.amazonaws.com:3000/movies/${this.props.match.params.id}`)
        .then(response => {
            this.setState({info: response.data})
        })
    }



    render(){
        return(
            <>
                <Helmet>
                    <title>{this.state.info.title}</title>
                </Helmet>
                    <div className='details'>
                        <div className='detail-info'>
                            <h1 className='detail-title'>{this.state.info.title}</h1>
                            <p><strong>Directed by:</strong> {this.state.info.director}</p>
                            <p><strong>Rating: </strong>{this.state.info.rating}</p>
                            <p className='readDescription'>{this.state.info.description}</p>
                            <Link to={`/edit/${this.props.match.params.id}`}>
                                <button className='detail-edit-button'>Edit</button>
                            </Link>
                        </div>
                    </div>
            </>


               
       

        )
    }
}

export default Details;