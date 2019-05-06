import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './table.css'


let table = (props) =>{
    function renderTable(movie) {
       return(
            <tr className='tableTr' key={movie.id}>
                <td className='tableTd'>{movie.title}</td>
                <td className='tableTd'>{movie.director}</td>
                <td className='tableTd'><Link className='tableLink' to={`/details/${movie.id}`}>Read more</Link></td>
                <td className='tableTd tableTd_rating'>{movie.rating}</td>
                <td className='tableTd'><Link className='tableLink' to={`/edit/${movie.id}`}>Edit</Link></td>
            
                <td><button className='delMovieButton' value={movie.id} onClick={props.delete} >X</button></td>
            </tr>
        )
    }

    return(
        <div className='table'>
            <table>
                <thead className='table-head'>
                    <tr>
                        <th className='tableTh'>Title</th>
                        <th className='tableTh'>Director</th>
                        <th className='tableTh'>Details</th>
                        <th className='tableTh'>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {props.movies.map(renderTable)}
                </tbody>
            </table>
        </div>
    )
}

export default table;
