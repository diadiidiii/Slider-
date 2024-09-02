import React from 'react';
import Slide from './slide'; // Import your Slide component
import './slide.css'; // Import CSS styles for the App component

function App() {
  return (
    <div className="App">
      <h1>Slider Component Example</h1>
      <Slide min={0} max={100} initialValue={50} showMinMaxValues={true} showDroplet={true} />
    </div>
  );
}

export default App;
