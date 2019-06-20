import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      person: [],
      name: '',
      age: '',
      email: '',
      id: '',
        }
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addPerson = this.addPerson.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  addPerson(person){
    return(
      <CSSTransition
        key= {person.id}
        classNames= 'item'
        timeout={500}>
        <tr>
          <td>{person.name}</td>
          <td>{person.age}</td>
          <td>{person.email}</td>
          <td><button onClick={this.onClick} id={person.id}>&times;</button></td>    
        </tr>
      </CSSTransition>
    )
  }

  onChange(e){
    let id = e.target.id;    

    if(id === 'name'){
      this.setState({name: e.target.value})
    } else if (id === 'age'){
      this.setState({age: e.target.value})
    } else if (id === 'email'){
      this.setState({email: e.target.value})
    }
  }

  onSubmit(e){
    e.preventDefault();
    const id = '_' + Math.random().toString(36).substr(2,9);
    let object = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      id: id,
    }
    
    this.setState({
      person: [...this.state.person, object]
    })
  }

  onClick(event){
    const people = [...this.state.person];
    const id = event.target.id;

    this.setState({
      person: people.filter(person => person.id  !== id)
    })
    
  }

  render() {
    return (
      <div>
          <form onSubmit={this.onSubmit}>
            <label>
                Eneter name:
                <input
                  type="text"
                  id='name'
                  onChange={this.onChange}
                />
              </label>

              <label>
                Eneter age:
                <input
                  type="number"
                  id='age'
                  onChange={this.onChange}
                />
              </label>

              <label>
                Eneter email:
                <input
                  type="text"
                  id='email'
                  onChange={this.onChange}
                />
              </label>
              <button onSubmit={this.onSubmit}>add</button>
          </form>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <TransitionGroup component={null}>
              {this.state.person.map(person =>
                this.addPerson(person))}
              </TransitionGroup>

            </tbody>
          </table>
      </div>
     
    )
  } 
}

export default App;
