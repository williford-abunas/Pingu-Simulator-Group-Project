import Pingu from './Pingu'
import '../main.css'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
// import Ball from './Ball'
function App() {
  function makeMore(){
    console.log("hoy")
  }
  return (
    <>
      <Header />
      <div className="winterWonderland">
        <div>
          <h1>App</h1>
          <p>React development has begun!</p>
        </div>

        {/* <Ball /> */}
        <Pingu />
        <button onClick={makeMore}>asdf</button>
      </div>
      <Footer />
    </>
  )
}

export default App
