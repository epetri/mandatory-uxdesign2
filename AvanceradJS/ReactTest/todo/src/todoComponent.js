import React, { Component } from 'react';


let TodoList = (props) => {
    return(
        <>
            <li className='todo-li' key={props.item.id}>{props.item.content}
              <button id={props.item.id} onClick={props.removeItem}>del</button>
            </li>
        </>
    )
}

export default TodoList;