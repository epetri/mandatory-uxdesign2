import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const [imageSrc, updateimageSrc] = useState(null);

  const myPic = useRef(null);


  function onChange(e){
    console.log(e.target.files);
    
    const url = URL.createObjectURL(e.target.files[0])

    updateimageSrc(url)    
  }

  return (
    <div className="App">
      <input 
        onChange={onChange}
        type='file' 
        accept='image/*'
        multiple></input>
      <img src={imageSrc}></img>
    </div>
  );
}

export default App;
