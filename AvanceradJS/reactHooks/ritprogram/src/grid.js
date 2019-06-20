import React, { useReducer } from 'react';
import './grid.css';


const Grid = ({cells, onClickCell}) => {

    function renderRow(row, i){
        let id = '_' + Math.random().toString(36).substr(2, 9);
        return(
            <tr key={id} className="row">
                {row.map((cell, j) => renderCell(cell , i, j))}
            </tr>
        )
    }

    function renderCell(cell, i, j){
        let id = '_' + Math.random().toString(36).substr(2, 9);
         return(   
            <td key={id} className="cell" onMouseDown={() => onClickCell(i, j)} style={{backgroundColor: cell}}>
            
            </td>
         )
    }

    return(
        <div className='container'>
            {cells.map((row, i) => renderRow(row, i))}
        </div>
    )
}

export default Grid;

