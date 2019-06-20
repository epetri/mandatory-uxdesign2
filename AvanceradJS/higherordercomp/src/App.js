import React from 'react';
import './App.css';
import { BlueText, OrangeText, RedText, GreenText} from './text';

function App() {
  return (
    <div className="App">
      <BlueText>Info</BlueText>
      <OrangeText>Warning</OrangeText>
      <RedText>Error</RedText>
      <GreenText>Success</GreenText>
    </div>
  );
}

export default App;
