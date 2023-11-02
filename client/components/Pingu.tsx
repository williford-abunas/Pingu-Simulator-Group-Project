import { animationStyles } from './Ball'

import { useState, useEffect } from 'react'

function Pingu() {
  const [explode, setExplode] = useState(false)
  const img = document.getElementById('pingu')
  const handleClick = (e: EventTarget) => {
    setExplode(!explode)
    console.log(explode)
    // explode == false
    //   ? (img.src = 'client/media/explosion.gif' setTimeout(()=> img.src = 'client/media/pingu2.png',2))
    //   : (img.src = 'client/media/pingu2.png')
    if (!explode) {
      img.src = 'client/media/explosion.gif';
    
      setTimeout(() => {
        
        img.src = 'client/media/pingu2.png';
      }, 1000);
    }
    else{
      // setTimeout(()=>{
      //   console.log("asdf")
      //   return (
      //     img.src = 'client/media/pingu2.png'
      //   )
      // },200)
      return (
            img.src = 'client/media/pingu2.png'
          )
    }
  }

  return (
    <div>
      <img
        style={animationStyles()}
        id="pingu"
        className="pingu"
        onClick={handleClick}
        src="client/media/pingu2.png"
        alt="pingu"
      />
      {/* <img src="client/media/pingu4.png" class="pingu" alt="pingu" /> */}
    </div>
  )
}

export default Pingu
