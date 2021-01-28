import './App.css';
import Clock from './clock'
import { useState } from 'react';
import React from 'react'
// import Timer from './timer'


function App() {

  // finding today's date and time
  const [startCounter, setStartCounter] = useState(false);




  return (

    <div className="App">

      <Clock start = {startCounter} />
      <button onClick = {() => setStartCounter(true)}>Start</button>
      <button onClick = {() => setStartCounter(false)}>Stop</button>
    </div>
  );
}

export default App;
