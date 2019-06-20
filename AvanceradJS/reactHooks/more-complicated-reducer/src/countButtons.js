import React, { useReducer } from 'react';

const number = '';
const reducer = (state, action) => {
    switch (action.type) {
        case 'number': return (state + action.amount).substring(0, 10);
        case 'remove': return state.substring(0, state.length -1);
        case 'clear': return '';
        default: throw new Error('u suck m8')
    }
}


let Tablet = () => {
    const [numb, dispatch] = useReducer(reducer, number);
    return (
        <div>
            {numb}
            <button onClick={() => dispatch({type:'number', amount:'1'})}>1</button>
            <button onClick={() => dispatch({type:'number', amount:'2'})}>2</button>
            <button onClick={() => dispatch({type:'number', amount:'3'})}>3</button>
            <button onClick={() => dispatch({type:'number', amount:'4'})}>4</button>
            <button onClick={() => dispatch({type:'number', amount:'5'})}>5</button>
            <button onClick={() => dispatch({type:'number', amount:'6'})}>6</button>
            <button onClick={() => dispatch({type:'number', amount:'7'})}>7</button>
            <button onClick={() => dispatch({type:'number', amount:'8'})}>8</button>
            <button onClick={() => dispatch({type:'number', amount:'9'})}>9</button>
            <button onClick={() => dispatch({type:'number', amount:'0'})}>0</button>
            <button onClick={() => dispatch({type:'remove'})}>Back</button>
            <button onClick={() => dispatch({type:'clear'})}>Clear</button>
        </div>
    )
}

export default Tablet;