import React, { useState } from "react";

import "./App.css";

function App() {
  const [animal, updateAnimal] = useState(null);
  const animals = ["Hundar", "Katter", "Joanna", "Jonathan", 'Oskis'];

  return (
    <div className="App">
    <h1>choose your fav animal</h1>
      {animals.map(animal => (
        <div key={animal}>
          <input
            type="radio"
            name="animal"
            onChange={() => updateAnimal(animal)}
          />
          <label>{animal}</label>
        </div>
      ))}
      <p>Jag gillar också {!animal ? "..." : animal}</p>
    </div>
  );
}

export default App;