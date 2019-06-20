// npm install --save react-test-render
// npm install --save enzyme-adapter-react-16 react-test-render

import React, { Component } from 'react';
import './App.css';
import TodoList from './todoComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todos: [],
      value: '',
      id: '',
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  onChange(e){
    this.setState({value: e.target.value})    
  }

  onSubmit(e){
    
    e.preventDefault();
    const id = '_' + Math.random().toString(36).substr(2,9);

    let obj = {
      content: this.state.value,
      id: id,
    }
    this.setState({
      todos: [...this.state.todos, obj]
    })
  }

  removeItem(e){
    
    const filterTodo = [...this.state.todos];
    const id = e.target.id;

    console.log(filterTodo);
    

    this.setState({
      todos: filterTodo.filter(todo => todo.id !== id)      
    })
  }

  render() {
    return (
      <div className="App"> 
        <input onChange={this.onChange} value={this.state.value}></input>
        <button onClick={this.onSubmit}>Add</button>
        <ul>
           {this.state.todos.map(item =>
           <TodoList onChange={this.onChange} onChange={this.onChange} remove={this.removeItem} item={item} />
            )}
        </ul>

      </div>
    );
  }
}

export default App;
