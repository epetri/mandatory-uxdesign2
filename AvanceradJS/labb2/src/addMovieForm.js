import React, { Component } from 'react';
import './addMovie.css';


let addMovieForm = (props) =>{
    return(
        <form className='movieForm' onSubmit={props.onSubmit}>
            <label className='movieForm-label'>
                Title:
                <input 
                minLength="1" 
                maxLength="40"
                className='movieForm-input'
                type='text'
                onChange={props.onChange}
                id='title'
                />
            </label>

            <label className='movieForm-label'>
                Director:
                <input 
                className='movieForm-input'
                type='text'
                onChange={props.onChange}
                id='director'
                />
            </label>

            <label className='movieForm-label'>
                Description:
                <textarea 
                minLength="1" 
                maxLength="300"
                className='movieForm-textarea'
                type='text'
                onChange={props.onChange}
                id='description'
                />
            </label>

            <label className='movieForm-label'>
                rating:
                <input 
                className='movieForm-input'
                type='range'
                min='0'
                max='5'
                onChange={props.onChange}
                value={props.info.rating}
                id='rate'
                />
            </label>
            <h3 className='ratingNumber'>{props.info.rating}</h3>

            <button className='movieForm-button' type='submit'>Add movie</button>
        </form>
    )
}

export default addMovieForm;