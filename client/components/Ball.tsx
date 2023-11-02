export function animationStyles() {
  const ping_height = 50
  const ping_width = 50

  return {
    height: ping_height,
    width: ping_width,
    background: 'black',
    animation: `moveRight 2s linear infinite`,
  }
}

function Ball() {
  const ping_height = 50
  const ping_width = 50
  const container_height = 500
  const container_width = 500

  const animation_duration = '3s'
  const animation_timing_function = 'linear'
  const random = Math.floor(Math.random() * 4) + 1
  const animation_name = 'moveRight'

  return (
    <div
      className="container"
      style={{
        height: container_height,
        width: container_width,
        border: '1px solid black',
      }}
    >
      <div
        className="ball"
        style={{
          height: ping_height,
          width: ping_width,
          background: 'black',
          animation: `${animation_name} 2s linear infinite`,
        }}
      ></div>
    </div>
  )
}

export default Ball
