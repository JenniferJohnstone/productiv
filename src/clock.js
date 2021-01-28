import {useState} from 'react'

var Clock = ({start}) => {

    const [ counter, setCounter ] = useState(100)
    var today = new Date()
    var time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    const style = {
        fontSize: '50px',
        color: 'white', 
        backgroundColor: 'black',
        marginLeft: '80%',
    }

    if (start === true){
        setTimeout(() => {
            setCounter(counter - 1)
        }, 1000);
    }

    if(start === false){
        setInterval(() => {
            today = new Date()
            time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            console.log('updating the time')
            //this makes it so the time will keep updating even if the timer isn't running
        }, 60000);
    }

    
    return (

        <>
        <p style = {style}>{time}</p>
        <p>{counter}</p>
        </>
    )
}


export default Clock;