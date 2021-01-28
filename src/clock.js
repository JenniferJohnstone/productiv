import {useState} from 'react'
import './index.css';


var Clock = ({start, timeType}) => {

    const [counter, setCounter ] = useState(0)
    var secondsPassed = timeType + counter
    const [today, setToday] = useState(new Date())

    if (start === true){
        setTimeout(() => {
            setCounter(counter - 1)
        }, 1000);
    }

    if(start === false){
        setTimeout(() => {
            setToday(new Date())
            //this makes it so the time will keep updating (every 30 seconds) even if the timer isn't running
        }, 60000);
    }

    var time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    //formatting the time to display

    var minutes = Math.floor(secondsPassed / 60);
    var seconds = secondsPassed - minutes * 60;
    //a little math to calculate minutes and seconds from the timer (which is in seconds)

    function str_pad_left(string,pad,length) {
        return (new Array(length+1).join(pad)+string).slice(-length);
    }
    var finalTime = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);
    //formatting so the time will display as 00:00 




    return (

        <>
        <p className = 'ClockStyle'>{time}</p>
        <p className = 'timerStyle'>{finalTime}</p>
        <button onClick = {() => setCounter(0)}>Reset</button>
        </>
    )
}


export default Clock;