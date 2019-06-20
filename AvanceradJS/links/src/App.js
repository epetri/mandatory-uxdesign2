import React, { Component } from 'react';
import './App.css';

const Links = (props)=> {
  let regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  let splitWords = props.children.split(' '); /* splitta hela texten vid mellanslag */

  function find(word){
    if(regex.test(word)){       /* testa om orden innehåller något som stämmer med regex */
      return (
        <a href={`https://${word}`}>{word}</a>  /* skapa a-element med href */
        )
      } else {
        return word ; /* returnera ordet */
      }
    } 
    return (
      <p>{splitWords.map(word => find(word)).map(word => [word, " "])}</p>
       /* returnera ett p-element, lopa igenom alla ord som finns i texten med hjälp av map, skicka in orden i functionen find, 
       sätter in varje ord vi får tillabaka i en ny array med ett ' ' mellanrum */
    );
  }
  
class App extends Component {
  render() {
    return (
      <div className="App">
        <Links>
          Visit www.google.se and then hejhej.se
        </Links>
      </div>
    );
  }
}

export default App;
