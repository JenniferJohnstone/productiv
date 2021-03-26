import React from 'react';
import button_sound from './cute.flac'
import stop_sound from './pop.wav'
import other_Sound from './button_sound.wav'

function Sounds({ setStartCounter, setTimeType }) {

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
        <div>

            <div className='buttons'>
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
                    // change to 1500 for pomodoro timetype
                    setTimeType(1500)
                }}>Pomodoro</button>
                <button onClick={() => {
                    playStopSound()
                    setTimeType(300)
                }}>Short Break</button>
                <button onClick={() => {
                    playStopSound()
                    setTimeType(900)
                }}>Long Break</button>

            </div>
        </div>
    );
}

export default Sounds;