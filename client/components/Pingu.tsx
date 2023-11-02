import { useState, useEffect } from 'react'

function Pingu() {
  const [explode, setExplode] = useState(false)
  let img = document.getElementById('pingu')
  const handleClick = (e: EventTarget) => {
    setExplode(!explode)
    console.log(explode)
    explode == false
      ? (img.src = 'client/media/explosion.gif')
      : (img.src = 'client/media/pingu2.png')
  }

  return (
    <div>
      <img
        id="pingu"
        onClick={handleClick}
        src="client/media/pingu2.png"
        alt="pingu"
      />
    </div>
  )
}

export default Pingu
