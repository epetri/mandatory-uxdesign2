import React, {useState, useRef} from 'react';
import './App.css';

function App() {
  const [progress, updateProgress] = useState(0);
  const myRef = useRef(null);  

  const onButtonPlay = () => {
    myRef.current.play();
  };

  const onButtonPaus = () => {
    myRef.current.pause();
  };

  const onButtonReplay = () => {
    myRef.current.currentTime = 0;
  };

  const onProgress = (e) => {
    updateProgress(e.target.currentTime / e.target.duration)
  }

  const percent = 100 * progress;

  return (
    <div className="App">
      <video onTimeUpdate={onProgress} ref={myRef} width='1000px' src='https://download.blender.org/peach/trailer/trailer_1080p.ogg'/>
      <div className='progressbar'>
        <div style={{ width: `${percent}%`, transition: "width 0.4s linear" }} className='progressbar-bar'>
        </div>
      </div>
      <button onClick={onButtonPlay}>Play</button>
      <button onClick={onButtonPaus}>Paus</button>
      <button onClick={onButtonReplay}>Replay</button>
    </div>
  );
}

export default App;
