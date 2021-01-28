import './App.css';
import Clock from './clock'
import { useState } from 'react';
import React from 'react'


function App() {

  const [startCounter, setStartCounter] = useState(false);
  const [timeType,  setTimeType] = useState(1500)
  
  return (

    <div className="App">

      <Clock start = {startCounter} timeType = {timeType} />
      <button onClick = {() => setStartCounter(true)}>Start</button>
      <button onClick = {() => setStartCounter(false)}>Stop</button>
      <br></br>
      <button onClick = {() => setTimeType(1500)}>Pomodoro</button>
      <button onClick = {() => setTimeType(300)}>Short Break</button>
      <button onClick = {() => setTimeType(900)}>Long Break</button>

    </div>
  );
}

export default App;
