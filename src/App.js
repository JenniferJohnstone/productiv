import Clock from './clock'
import { useState } from 'react';
import React from 'react'
import VideoPlayer from './videoPlayer'
import Sounds from './sounds';


function App() {

  const [startCounter, setStartCounter] = useState(false);
  const [timeType, setTimeType] = useState(1500)
  const [pomodoro_count, setPomodoroCount] = useState(0)

  return (

    <div className="App">

      <div className='mainApp'>

        <Clock start={startCounter} timeType={timeType} setStartCounter={setStartCounter} pomodoroCount={pomodoro_count} setPomodoroCount={setPomodoroCount} />

        <Sounds setStartCounter={setStartCounter} setTimeType={setTimeType} />

      </div>

      <div className='desktop'>
        <VideoPlayer pomodoroCount={pomodoro_count} />
      </div>

      <div className='mobile'>
        <VideoPlayer pomodoroCount={pomodoro_count} />
      </div>
    </div>
  );
}

export default App;
