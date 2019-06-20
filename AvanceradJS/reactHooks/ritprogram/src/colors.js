import React, { useReducer } from 'react';

const Color = (props) => {
    return (
        <div>
            <button onClick={() => props.onClick("red")}>röd</button>
            <button onClick={() => props.onClick("green")}>grön</button>
            <button onClick={() => props.onClick("purple")}>lila</button>
            <button onClick={() => props.onClick("blue")}>blå</button>
            <button onClick={() => props.onClick("pink")}>rosa</button>
            <button onClick={() => props.onClick("black")}>svart</button>


        </div>
    )
}

export default Color;