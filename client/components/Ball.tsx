function Ball(){
  const ping_height=50
  const ping_width = 50
  const container_height = 500
  const container_width = 500
return(
  <div className = "container" 
  style = {{
    height:container_height,
    width:container_width,
    border:"1px solid black"}}>
      
    <div className = "ball" style ={{
      height:ping_height,
      width:ping_width,
      background:"black"
    }}></div>
  </div>
)
}
export default Ball