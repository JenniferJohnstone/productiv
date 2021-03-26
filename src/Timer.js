import { useState, useEffect } from 'react'
import './index.css';

var Clock = () => {

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);


    function toggle() {
        setIsActive(!isActive);
    }


    function reset() {
        setSeconds(0);
        setIsActive(false);
    }

    function setTime(time) {
        setSeconds(time)
    }

    var minutes = Math.floor(seconds / 60);
    var displaySeconds = seconds - minutes * 60;
    //a little math to calculate minutes and seconds from the timer (which is in seconds)

    function str_pad_left(string, pad, length) {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    }
    var finalTime = str_pad_left(minutes, '0', 2) + ':' + str_pad_left(displaySeconds, '0', 2);
    //formatting so the time will display as 00:00 


    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds => seconds - 1);
                }
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);


    return (

        <>
            <p className='timerStyle'>{finalTime}</p>

            {/* {(pomodoroCount % 4 == 0) && (pomodoroCount !== 0) && */}
            {/* <p className='breakTime'>Time to take a break!</p> */}
            {/* } */}

            <button className='buttons' onClick={() => {
                toggle()
            }}>{isActive ? 'Pause' : 'Start'}</button>

            <button className='buttons' onClick={() => {
                reset()
            }}>Reset</button>

            <div className='container'>
                <button className='buttons' onClick={() => setTime(1500)}>Pomodoro</button>
                <button className='buttons' onClick={() => setTime(300)}>Short Break</button>
                <button className='buttons' onClick={() => setTime(900)}>Long Break</button>
            </div>
        </>
    )
}


export default Clock;