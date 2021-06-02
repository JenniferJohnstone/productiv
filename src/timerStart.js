import finished from './tickingClock.wav'

const playSound = () => {
    console.log('tick tick')
    var sound = new Audio(finished)
    sound.play()
}

export default playSound