import React from 'react';
import './App.css';

function request() {
  let parse = JSON.parse(this.responseText);
  createList(parse);
  console.log(parse); 
}

function doRequest(){
  let info = new XMLHttpRequest();
  info.addEventListener("load", request);
  info.open("GET", "/countries?page=1&size=20");
  info.send ();
}

function createList(parse) {


}

function App() {
  return (
    <div className="App">
      <button onClick={doRequest}>click!</button>
      <ul>

      </ul>
    </div>
  );
}

export default App;
