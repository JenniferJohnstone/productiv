import finished from './finished.wav'

const playSound = () => {
    var sound = new Audio(finished)
    sound.play()
}

export default playSound