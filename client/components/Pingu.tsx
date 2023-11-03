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
  }

  return (
    <div>
      <img
        id="pingu"
        className={spin === true ? 'spinner' : 'pingu'}
        onClick={handleClick}
        onContextMenu={rightClick}
        src="client/media/pingu4.png"
        alt="pingu"
      />
      {/* <img src="client/media/pingu4.png" class="pingu" alt="pingu" /> */}
    </div>
  )
}

export default Pingu
