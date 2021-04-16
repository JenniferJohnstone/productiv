import React, { useState } from 'react';

function Time() {
    var now = new Date()
    now = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const [time, setTime] = useState(now)

    setInterval(() => {
        var now = new Date()
        now = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        console.log('updating time')
        setTime(now)
    }, 60000);


    return (
        <div className='clockContainer'>
            <p className='ClockStyle'>{time}</p>
        </div>
    );
}

export default Time;