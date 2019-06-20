import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  let key = 0;

  const [imageSrc, updateimageSrc] = useState([]);
  const [value, updateValue] = useState(false);
  const [size, updateSize] = useState('300px')


  const myPic = useRef(null);


  function onChange(e){
    console.log(e.target.files);

    let imgArr = Array.from(e.target.files)
    
    let url = imgArr.map(URL.createObjectURL)
 

    updateimageSrc(url)    
    console.log(imageSrc);
    
  }

  function onClick(e){
    
    console.log('hej');
    updateSize('1000px')
  }

  function renderImg(img){
    key++;
    return(
      <img onClick={onClick} key={key} src={img} style={{width: size}}/>
    )
  }

  function onSubmit(e){
    e.preventDefault();
    updateValue(true);
  }

  return (
    <div className="App">
    <form onSubmit={onSubmit}>
      <input 
        onChange={onChange}
        type='file' 
        accept='image/*'
        multiple/>
        <button type='submit'>Uploade</button>
    </form>
    {value? imageSrc.map((img)=> renderImg(img)) : null}

    </div>
  );
}

export default App;
