import { useState } from 'react'
import './index.css';
import finished_sound from './finished.mp3'


var Clock = ({ start, timeType, setStartCounter, pomodoroCount, setPomodoroCount }) => {
    const [counter, setCounter] = useState(0)

    var secondsPassed = timeType + counter
    const [today, setToday] = useState(new Date())
    var sound = new Audio(finished_sound)

    const reset = () => {
        setStartCounter(false)
        console.log('setting counter to 0')
        setCounter(0)
    }

    const finished = () => {
        sound.play()
        setStartCounter(false)
        if (timeType === 1500) {
            setPomodoroCount(pomodoroCount + 1)
        }
    }

    setTimeout(() => {
        if (start === true) {
            if (-counter < (timeType)) {
                console.log('setting counter to the timer time')
                setCounter(counter - 1)
            } else {
                finished()
            }
        }
    }, 1000);

    setTimeout(() => {
        setToday(new Date())
        //this makes it so the time will keep updating (every 30 seconds
    }, 60000);


    var time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    //formatting the time to display

    var minutes = Math.floor(secondsPassed / 60);
    var seconds = secondsPassed - minutes * 60;
    //a little math to calculate minutes and seconds from the timer (which is in seconds)

    function str_pad_left(string, pad, length) {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    }
    var finalTime = str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);
    //formatting so the time will display as 00:00 

    console.log()



    return (

        <>
            <p className='ClockStyle'>{time}</p>
            <p className='timerStyle'>{finalTime}</p>

            {(pomodoroCount % 4 == 0) && (pomodoroCount !== 0) &&
                <p className='breakTime'>Time to take a break!</p>
            }

            <button className='buttons' onClick={() => {
                reset()
            }}>Reset</button>

        </>
    )
}


export default Clock;