import { useState, useEffect } from 'react'
import './index.css';
import playSound from './finishedSound';
import startSound from './timerStart'
import { Helmet } from 'react-helmet'

var Clock = () => {

    const [seconds, setSeconds] = useState(1500);
    const [isActive, setIsActive] = useState(false);
    const [pomodoro, setPomodoro] = useState({ isActive: true, count: 0 })

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

    // detecting the time type for notification message 
    var timeType = 'Time to take a break!'
    if (seconds == 1500) {
        timeType = 'Time to take a break!'
    } else if (seconds == 300) {
        timeType = "Break's over! Back to work!"
    } else if (seconds == 900) {
        timeType = 'Time for your long break, go stretch your legs and get some air.'
    }


    var minutes = Math.floor(seconds / 60);
    var displaySeconds = seconds - minutes * 60;
    //a little math to calculate minutes and seconds from the timer (which is in seconds)

    function str_pad_left(string, pad, length) {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    }
    var finalTime = str_pad_left(minutes, '0', 2) + ':' + str_pad_left(displaySeconds, '0', 2);
    //formatting so the time will display as 00:00 

    // notification to user 
    const notify = () => {
        new Notification("Time's up!", {
            body: timeType,
            icon: 'https://i.pinimg.com/736x/8f/b3/84/8fb384e3fb66cc2ac4e420c61ada6d1c.jpg',
        })
    };


    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds => seconds - 1);
                } else {
                    // this will occur when the seconds have run out and clears the interval to stop the useEffect
                    playSound()
                    notify()
                    if (pomodoro.isActive == true) {
                        setPomodoro({ isActive: false, count: pomodoro.count + 1 })
                    }
                    clearInterval(interval)
                }
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);


    return (

        <div className='timerContainer'>
            <Helmet>
                <title> {finalTime}</title>
            </Helmet>
            <p className='timerStyle'>{finalTime}</p>
            {pomodoro.count % 4 == 0 && pomodoro.count !== 0 &&
                <h1 style={{ color: 'white', backgroundColor: 'black', width: '300px', marginLeft: 'auto', marginRight: 'auto' }}>Time for a break!</h1>
            }
            <h1 className="pomoStyle"><span style={{ color: 'darkred' }}>Pomodoro Count</span> {pomodoro.count}</h1>



            <div className='buttonContainer'>
                <button className='buttons' onClick={() => {
                    toggle()
                    console.log(isActive)
                    if (!isActive) { startSound() }
                }}>{isActive ? 'Pause' : 'Start'}</button>

                <button className='buttons' onClick={() => {
                    reset()
                }}>Reset</button>

                <div className='container'>
                    <button tabindex='0' className='buttons' onClick={() => {
                        setTime(1500)
                        setPomodoro({ isActive: true, count: pomodoro.count })
                    }}>Pomodoro</button>
                    <button className='buttons' onClick={() => setTime(300)}>Short Break</button>
                    <button className='buttons' onClick={() => setTime(900)}>Long Break</button>
                </div>


            </div>

        </div>
    )
}


export default Clock;