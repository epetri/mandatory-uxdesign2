import React, { useReducer } from 'react';
import Grid from './grid';
import Colors from './colors';

const grid = Array(16)
  .fill(null)
  .map(_ => Array(16).fill(""));

const reducer = (state, action) => {
  switch(action.type){
    case 'onClickCell':
      const newImage = [...state.cells];
      newImage[action.row][action.column] = state.color;
      return {
        ...state,
        cells: newImage
      };

      case 'changeColor':
        return{
          ...state,
          color: action.color,
        }

      default:
        throw new Error('nope!');
  }

}

const funcy = () => {
  const [state, dispatch] = useReducer(reducer, {
    cells: grid,
    color: 'white',
  })

    return (
      <div className="App">
        <Grid cells={state.cells} onClickCell={(row, column) => dispatch({type: 'onClickCell', row, column})}/>
        <Colors onClick={(color) => dispatch({ type: "changeColor", color })} />
      </div>
    );
  }


export default funcy;
