import React, { useState } from 'react'
import Cloud from './Cloud'
import rainSound from './rain.wav'

var Asmr = () => {
    const [rain, setRain] = useState(false)
    const [volume, setVolume] = useState(0.1)


    if (rain == true) {
        var audio = document.getElementById("downPour");
        audio.loop = true;
        var vol = volume / 10
        audio.volume = vol;
        audio.play()
    } else {
        var audio = document.getElementById("downPour");
        if (audio != null) {
            audio.pause()
        }
    }

    const changeVolume = (event) => {
        setVolume(event.target.value)
        var vol = event.target.value
        vol = vol / 10
        if (rain == true) {
            console.log(vol)
            audio.volume = vol
        }
    }



    return (
        <>
            <audio id="downPour">
                <source src={rainSound} type="audio/ogg" />
            </audio>
            <input type="range" min="0" max="10" value={volume} id="myNumber" onChange={(event) => changeVolume(event)} />


            <Cloud rain={rain} setRain={setRain} />

        </>
    )
}

export default Asmr