import Clock from './clock'
import { useState } from 'react';
import React from 'react'
import button_sound from './cute.flac'
import stop_sound from './pop.wav'
import other_Sound from './button_sound.wav'


function App() {

  const [startCounter, setStartCounter] = useState(false);
  const [timeType, setTimeType] = useState(1500)
  const [pomodoro_count, setPomodoroCount] = useState(0)

  //sounds from the buttons 

  const playSound = () => {
    var sound = new Audio(button_sound)
    sound.play()
  }
  const playStopSound = () => {
    var sound = new Audio(stop_sound)
    sound.play()
  }
  const otherSound = () => {
    var sound = new Audio(other_Sound)
    sound.play()
  }

  return (

    <div className="App">

      {pomodoro_count > 0 &&
        <div className='desktop'>
          <div className='bottomText'>
            <p className='pomoCount'><span style={{ fontWeight: 'bold' }}>Pomodoros Completed: </span> {pomodoro_count}</p>
          </div>
        </div>
      }

      <div className='mainApp'>

        <Clock start={startCounter} timeType={timeType} setStartCounter={setStartCounter} pomodoroCount={pomodoro_count} setPomodoroCount={setPomodoroCount} />
        <button onClick={() => {
          playSound()
          setStartCounter(true)
        }}>Start</button>
        <button onClick={() => {
          otherSound()
          setStartCounter(false)
        }}>Stop</button>
        <br></br>
        <button onClick={() => {
          playStopSound()
          setTimeType(1)
        }}>Pomodoro</button>
        {/* should be 1500 but i'm going to change this to check if it plays sound when the timer stops */}
        <button onClick={() => {
          playStopSound()
          setTimeType(300)
        }}>Short Break</button>
        <button onClick={() => {
          playStopSound()
          setTimeType(900)
        }}>Long Break</button>

      </div>

      {pomodoro_count > 0 &&
        <div className='mobile'>
          <div className='bottomText'>
            <p className='pomoCount'><span style={{ fontWeight: 'bold' }}>Pomodoros Completed: </span> {pomodoro_count}</p>
          </div>
        </div>
      }

    </div>
  );
}

export default App;
