import React from 'react'

import Time from './Time'
import Timer from './Timer'
import VideoPlayer from './videoPlayer'


function App() {


  return (
    <div className='App'>

      <div className='mainApp'>

        <Time />
        <Timer />

      </div>


      {/* <div className='desktop'>
        <VideoPlayer />
      </div> */}

      <div className='mobile'>
        <VideoPlayer />
      </div>

    </div>

  )
}

export default App;
