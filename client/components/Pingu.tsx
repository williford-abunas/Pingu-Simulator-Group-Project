import { animationStyles } from './Ball'

import { useState, useEffect } from 'react'

function Pingu() {
  const [explode, setExplode] = useState(false)
  const [spin, setSpin] = useState(false)
  const img = document.getElementById('pingu')
  const [audio, setAudio] = useState('client/media/sounds/noot.mp3')
  const sound = new Audio(audio)
  sound.play()
  sound.loop = true
  const timeout = setTimeout(() => {
    sound.loop = false
  }, 7000)
  // sound.addEventListener('canplaythrough', async (event) => {
  //   /* the audio is now playable; play it if permissions allow */
  //   await sound.play()
  //   sound.loop = true
  //   sound.load()
  // })
  const handleClick = (e: EventTarget) => {
    setExplode(!explode)
    // setAudio()

    // explode == false
    //   ? (img.src = 'client/media/explosion.gif' setTimeout(()=> img.src = 'client/media/pingu2.png',2))
    //   : (img.src = 'client/media/pingu2.png')
    if (!explode) {
      img.src = 'client/media/explosion.gif'
      const explosionSound = new Audio('client/media/sounds/explosion.mp3')
      explosionSound.volume = 1
      explosionSound.play()

      const timeout = setTimeout(() => {
        img.src = 'client/media/pingu4.png'
      }, 2000)
    } else {
      // setTimeout(()=>{
      //   console.log("asdf")
      //   return (
      //     img.src = 'client/media/pingu4.png'
      //   )
      // },200)
      return (img.src = 'client/media/pingu4.png')
    }
  }

  const rightClick = (e) => {
    e.preventDefault()
    setSpin(!spin)
    sound.loop = false
    sound.pause()
    const spinSound = new Audio('client/media/sounds/weee.mp3')
    spinSound.play()

    // const audio = new Audio('client/media/sounds/explosion.mp3')
    // audio.play()
  }
  let animationName = ''
  let random = Math.floor(Math.random()*4)+1
  if(random === 1){
    animationName = "moveRight"
  }
  else if(random ===2){
    animationName = "moveLeft"
  }
  else if(random === 3){
    animationName = "moveUp"
  }
  else if(random ===4){
    animationName === "moveDown"
  }
  console.log(animationName)
  return (
    <div>
      <img
        id="pingu"
        className={spin === true ? 'spinner' : 'pingu'}
        onClick={handleClick}
        onContextMenu={rightClick}
        src="client/media/pingu4.png"
        alt="pingu"
        style={{width: "350px",
          height: "250px",
          animationName: animationName,
          animationDuration: "8000ms",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear" }}
      />
      {/* <img src="client/media/pingu4.png" class="pingu" alt="pingu" /> */}
    </div>
  )
}

// Change pingu to random character

export default Pingu
