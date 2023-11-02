import { animationStyles } from './Ball'

function Pingu() {
  return (
    <div>
      <img style={animationStyles()} src="client/media/pingu.png" alt="pingu" />
      <img src="client/media/pingu2.png" alt="pingu" />
    </div>
  )
}

export default Pingu
