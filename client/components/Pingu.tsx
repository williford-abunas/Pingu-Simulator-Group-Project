import { animationStyles } from './Ball'

import { useState, useEffect } from 'react'

function Pingu() {
  const [explode, setExplode] = useState(false)
  const [spin, setSpin] = useState(false)
  const img = document.getElementById('pingu')

  const handleClick = (e: EventTarget) => {
    setExplode(!explode)
    console.log(explode)
    // explode == false
    //   ? (img.src = 'client/media/explosion.gif' setTimeout(()=> img.src = 'client/media/pingu2.png',2))
    //   : (img.src = 'client/media/pingu2.png')
    if (!explode) {
      img.src = 'client/media/explosion.gif'

      const timeout = setTimeout(() => {
        img.src = 'client/media/pingu2.png'
      }, 2000)
    } else {
      // setTimeout(()=>{
      //   console.log("asdf")
      //   return (
      //     img.src = 'client/media/pingu2.png'
      //   )
      // },200)
      return (img.src = 'client/media/pingu2.png')
    }
  }

  const rightClick = (e) => {
    e.preventDefault()
    setSpin(!spin)
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
        src="client/media/pingu2.png"
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

export default Pingu
