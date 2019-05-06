import React from 'react';
import './App.css';

const NameContext = React.createContext('name');

function CountVowels(){
  function countVowels(name) {
   let splitName = name.match(/[aeiouåäö]/gi);
   let number = splitName === null ? 0 : splitName.length

   return (
     <p>{name} has {number} vowels</p>
   )
  }
  return (
    <NameContext.Consumer>
      {countVowels}
    </NameContext.Consumer>
  )
}

function CountConsonants() {
  function countConsonants(name) {
    let splitName = name.match(/[^aeiouåäö]/gi);
    let number = splitName === null ? 0 : splitName.length    

    return(
      <p>{name} has {number} consonants</p>
    )
    
  }
  return(
    <NameContext.Consumer>
      {countConsonants}
    </NameContext.Consumer>
  )
}

function App() {
  return (
    <div className="App">
      <NameContext.Provider value='Emma'>
        <CountVowels/>
        <CountConsonants/>
      </NameContext.Provider>
    </div>
  );
}

export default App;
