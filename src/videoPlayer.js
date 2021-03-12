import Video from './video'
import React from 'react'
import Asmr from './asmr'

var VideoPlayer = ({ pomodoroCount }) => {

    console.log('this is pomodoro count', pomodoroCount)

    return (
        <>
            <div className='bottomText'>
                <p>Welcome to Productiv, a productivity timer that helps you focus. Below you'll find some sounds to
                help you stay focused or music to listen to while you work.
                </p>

                <Asmr />

                <Video />


                <p className='pomoCount'><span style={{ fontWeight: 'bold' }}>Pomodoros Completed: </span> {pomodoroCount}</p>
            </div>
        </>
    )
}


export default VideoPlayer