import React, { Component } from 'react';
import './addMovie.css'


let editform = (props) =>{
    
    return(
        <form className='movieForm' onSubmit={props.onSubmit}>
            <label className='movieForm-label'>
                Title: 
            <input 
              type="text"
              className='movieForm-input' 
              value={props.info.title}
              onChange={props.onChangeTitle}
             />
             </label>

             <label className='movieForm-label'>
                Director: 
            <input 
              className='movieForm-input' 
              type="text" 
              value={props.info.director}
              onChange={props.onChangeDirector}
             />
             </label>

            <label className='movieForm-label'>
                Description: 
            <textarea 
              className='movieForm-textarea'
              type="text" 
              value={props.info.description}
              onChange={props.onChangeDescription}
             />
             </label>

             <label className='movieForm-label'>
                Rating: 
                
            <input 
              className='movieForm-input' 
              type="range" 
              min='0'
              max='5'
              onChange={props.onChangeRating}
              value={props.info.rating}
             />
             </label>
             <h3 className='ratingNumber'>{props.info.rating}</h3>

            <button className='movieForm-button' type="submit">Save</button>
        </form>
    )
}

export default editform;